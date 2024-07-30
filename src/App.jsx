import Chat from "./Component/chat/Chat.jsx";
import List from "./Component/list/ListMessage.jsx";
import Detail from "./Component/detail/Detail.jsx";
import Login from "./Component/login/login.jsx";
import Notification from "./Component/notification/notification.jsx";

const App = () => {
  const user = false;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification/>
    </div>
  );
};

export default App;
