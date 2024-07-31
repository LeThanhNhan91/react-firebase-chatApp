import { useUserStore } from "../../../lib/userStore"
import "./userinfo.css"

const UserInfo = () => {

  const {currentUser} = useUserStore()

  return (
    <div className='userInfo'>
        <div className="user">
            <img src={currentUser.avatar || "./avatar.png"}></img>
            <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
            <img src="./more.png"></img>
            <img src="./video.png"></img>
            <img src="./edit.png"></img>
        </div>
    </div>
  )
}

export default UserInfo