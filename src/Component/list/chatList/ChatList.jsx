import { useEffect, useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [chat, setChat] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return {...items, user};
        });

        const chatData = await Promise.all(promises)

        setChat(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png"></img>
          <input type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prev) => !prev)}
          //change the state when ever u click
        />
      </div>
      {chat.map((chat) => {
        <div className="items" key={chat.chatId}>
          <img src="./avatar.png" />
          <div className="texts">
            <span>San San</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>;
      })}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
