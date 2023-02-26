'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Login() {
  return (
    <div className='bg-[#11A37F] flex flex-col items-center justify-center h-screen text-center'>
        <Image src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
        />
        <button onClick={()=>signIn("google")} className='text-white font-bold text-3xl animate-pulse
        '>Sign in to use ChatGpt-next</button>
    </div>
  )
}

export default Login