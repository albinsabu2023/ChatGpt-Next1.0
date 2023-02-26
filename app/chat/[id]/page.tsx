import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"
type props={
  params:{
    id:string
  }
}
function ChatPage({params:{id}}:props) {
  
  return (
    <div className="flex flex-col h-screen   ">
      <Chat chatId={id}  />
      
      <ChatInput chatId={id} />
      
      {/*chats*/}
    </div>
  )
}

export default ChatPage