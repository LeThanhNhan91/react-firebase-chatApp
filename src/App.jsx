import Chat from "./Component/chat/Chat.jsx"
import List from "./Component/list/ListMessage.jsx"
import Detail from "./Component/detail/Detail.jsx"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App