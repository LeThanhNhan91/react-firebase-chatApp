import { useState } from "react";
import "./chatlist.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png"></img>
          <input type="text" placeholder="Search"/>
        </div>
        <img
          className="add"
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={() => setAddMode((prev) => !prev)}
          //change the state when ever u click
        />
      </div>
      <div className="items">
        <img src="./avatar.png"/>
        <div className="texts">
            <span>San San</span>
            <p>Hello bae</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png"/>
        <div className="texts">
            <span>San San</span>
            <p>Hello bae</p>
        </div>
      </div>
      <div className="items">
        <img src="./avatar.png"/>
        <div className="texts">
            <span>San San</span>
            <p>Hello bae</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
