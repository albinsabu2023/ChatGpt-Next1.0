// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { admindB } from '../../firebaseAdmin';

import admin from "firebase-admin"
import query  from '../../lib/queryApi';

type Data = {
  answer: string
}

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt,chatId,model,session}=req.body;
    if(!prompt){
        res.status(400).json({answer:"Please provide a prompt!"});
        return;
    }
    if(!chatId){
        res.status(400).json({answer:"Please provide a chatId!"});
        return;

    }
    //chatGpt query
    const response= await query(prompt,chatId,model);
    const message:Message ={
      text:response ||'chatGpt-next cant find answer for that',
      createdAt:admin.firestore.Timestamp.now(),
      user:{
        _id:'ChatGPT',
        name:'ChatGPT',
        avatar:"https://links.papareact.com/89k",
      },
    }
    await admindB.collection("users").doc(session?.user?.email).collection("chats").doc(chatId).collection("messages").add(message);

    res.status(200).json({ answer:message.text})
}
