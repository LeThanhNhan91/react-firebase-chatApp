import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlock, isReceiverBlock, changeBlock } =
    useChatStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isCurrentUserBlock
          ? arrayRemove(user.id)
          : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} />
        <h2>{user.username}</h2>
        <p>The apple of my eyes!</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat setting</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://ss-images.saostar.vn/w800/2024/6/21/pc/1718958819705/unozc4q2gn1-3y3f80f88l2-d10y1wt1ky3.jpg" />
                <span>Conan Movie 26</span>
              </div>
              <img src="./download.png" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlock
            ? "You are blocked!"
            : isReceiverBlock
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
