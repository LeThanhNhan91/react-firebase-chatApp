import { useEffect, useState } from "react";
import "./chatlist.css";
import AddUser from "./addUser/addUser";
import { useUserStore } from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;
        console.log('data', res.data())

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises)

        setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log('chats', chats)

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prev) => !prev)}
          alt={addMode ? "minus icon" : "plus icon"}
        />
      </div>
      {chats.map((chat) => (
        <div className="items" key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png"} alt={`${chat.user.username}'s avatar`} />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
