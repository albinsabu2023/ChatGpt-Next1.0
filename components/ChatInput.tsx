'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import { db } from '../firebase';
import toast from "react-hot-toast"
import ModelSelection from './ModelSelection';
import useSWR from 'swr'
type props={
    chatId:string;
}
function ChatInput({chatId}:props) {
    const[prompt,setPrompt]=useState("")
    const {data:session}=useSession();
    
     const {data:model}=useSWR("model",{
        fallbackData:"text-davinci-003",
    })


    const sendMessage =async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!prompt) return;

        const input=prompt.trim();
        setPrompt("");
        const message:Message ={
            text:input,
            createdAt:serverTimestamp(),
            user:{
                _id:session?.user?.email!,
                name:session?.user?.name!,
                avatar:session?.user?.image! ||`https:ui-avatar.com/api/?name=${session?.user?.name}`,
            }

        }
        await addDoc(
            collection(
                db,
                'users',
                session?.user?.email!,
                'chats',
                chatId,
                'messages'),
            message
            
            );
            //tost notification loading
            const notification=toast.loading('ChatGpt-Next is thinking......')
            
            await fetch("/api/askQuestion",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    prompt:input,
                    chatId,
                    model,
                    session,
                }),
            }).then(()=>{
                toast.success('ChatGpt-next responded..',{
                    id:notification,
                });
                //tost succesfull loading succesfull
            });
    };
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm m-1 position-fixed'>
        <form  onSubmit={sendMessage} className='p-5 space-x-5 flex '>
            <input
            className='bg-transparent focus:outline-none flex-1 
            disabled:cursor-not-allowed disabled:text-gray-300 '
            value={prompt}
            disabled={!session}
            onChange={(e)=>setPrompt(e.target.value)}
             type="text" placeholder={`Hey ${session?.user?.name}!!Type here.....`}/>
            <button 
            disabled={!prompt || !session}
            className="bg-[#11A37F] hover:opacity-50  text-white font-bold
            px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed "
            type="submit">
                <PaperAirplaneIcon className='h-4 w-4 -rotate-45 '/>
            </button>
        </form>
        <div className='md:hidden'>
            <ModelSelection/>
        </div>
    </div>
  )
}

export default ChatInput