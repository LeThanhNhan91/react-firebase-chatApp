import Chat from "./Component/chat/Chat.jsx";
import List from "./Component/list/ListMessage.jsx";
import Detail from "./Component/detail/Detail.jsx";
import Login from "./Component/login/login.jsx";
import Notification from "./Component/notification/notification.jsx";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase.js";
import { useUserStore } from "./lib/userStore.js";
import { useChatStore } from "./lib/chatStore.js";

const App = () => {

  const {currentUser, isLoading, fetchUserStore} = useUserStore()
  const {chatId} = useChatStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserStore(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserStore]);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;
