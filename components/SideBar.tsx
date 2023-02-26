'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from '../firebase'
import { collection, orderBy, query } from 'firebase/firestore'
import ChatRow from './ChatRow'
import ModelSelection from './ModelSelection'
function SideBar() {
    const {data:session}=useSession();
    const[chats,loading,error]=useCollection(
        session&& query(collection(db,'users',session?.user?.email!,"chats"),
            orderBy("createdAt","asc")
        )
    )
    
    
  return (
    <div className='p-2 flex flex-col overflow-y-auto h-screen ' >
        <div className='flex-1'>
            <div>
                <NewChat/>
                {/*modelselection*/}
                <div className='hidden sm:inline' >
                <ModelSelection/>
                </div>
                <div>
                    {loading&&(
                        <div className='animate-pulse text-center text-white'>
                        <p>Loading Chats</p>
                        </div>
                    )}
                    {chats?.docs.map(chat=> (
                    <ChatRow key ={chat.id} id={chat.id}/>
                ))}
                </div>
            </div>
        </div>
        {session&&(
            <div className='flex h-10   border-gray-700 border items-center justify-center chatRow  '>
            <img className=' h-7 w-7 rounded-full cursor-pointer  hover:opacity-2  hidden md:inline-flex ' src={session.user?.image!} alt="" />
            <p onClick={()=>signOut()}  title="signOut" className='text-white font-bold  '>{session?.user?.name}</p>
             
            </div>
            
            
        )}
    </div>
  )
}

export default SideBar