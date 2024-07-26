import ChatList from "./chatList/ChatList"
import "./list.css"
import UserInfo from "./userinfo/UserInfo"

const ListMessage = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default ListMessage