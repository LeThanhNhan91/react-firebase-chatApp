import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };



  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" />
          <div className="texts">
            <span>San San</span>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" />
          <img src="./video.png" />
          <img src="./info.png" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>iu rảnh hì nghỉ ngơi coi phim lấy lại tinh thần nho iuu</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I miss and love you so much bae</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>Goodnight</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://ss-images.saostar.vn/w800/2024/6/21/pc/1718958819705/unozc4q2gn1-3y3f80f88l2-d10y1wt1ky3.jpg"/>
            <p>Phim Điện Ảnh Thám Tử Lừng Danh Conan: Ngôi Sao 5 Cánh 1 Triệu Đô là phần phim điện ảnh thứ 27 trong series. Đây cũng được coi là phần phim thành công nhất của thương hiệu đình đám này. </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" />
          <div className="texts">
            <p>See you again, muahh</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" />
          <img src="./camera.png" />
          <img src="./mic.png" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
