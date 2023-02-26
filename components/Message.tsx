import { DocumentData } from "firebase/firestore"
type Props={
    message:DocumentData;
}

function Message({message}:Props) {
    const isChatGpt=message.user.name==="ChatGPT"
  return (
    <div className={`py-5 text-white ${isChatGpt && "bg-[#434654] m-1 rounded-lg"}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto  ">
        <img src={message.user.avatar} alt="" className="h-8 w-8 rounded-lg" />
        <p className="pt-1 text-sm">{message.text}</p>
        </div>
    </div>
    
  )
}

export default Message