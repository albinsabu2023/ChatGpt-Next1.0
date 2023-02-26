import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import { collection, deleteDoc,doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type Props={
    id:string;
}

export default function ChatRow({id}:Props) {
    const pathname=usePathname();
    const router=useRouter();
    const {data:session}=useSession();
    const [active,setActive]=useState(false);
    const[messages]=useCollection(
        collection(db,'users',session?.user?.email!,'chats',id,'messages')
        
    )
    useEffect(()=>{
        if(!pathname)return;
        setActive(pathname.includes(id))
    },[pathname])

    const removeChat= async()=>{
        await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id));
        router.replace('/');

    }
  return (
    <Link href={`/chat/${id} `} className={`chatRow justify-center  m-1
    ${active&& 'bg-gray-700/50'}
    `}>

    <ChatBubbleLeftIcon  className="h-4 w-4"  />
    <p className="flex-1 hidden md:inline-flex truncate">{messages?.docs[messages?.docs.length-1]?.data().text || "NewChat"}</p>
    <TrashIcon  onClick ={removeChat}className="h-4 w-4 text-gray-700 hover:text-green-700" />
    </Link>

  )
}
