import React, { useEffect } from 'react'
import { user } from '../join/Join'
import './Chat.css'
import SocketIO from "socket.io-client"
import sendButton from "../../image/send.png"

const ENDPOINT='http://localhost:4000/'

const Chat = () => {
   

    useEffect(()=>{
        const socket=SocketIO(ENDPOINT,{transports:['websocket']})
        socket.on('connect',()=>{
            console.log("Connected Start")
        })

        console.log(socket)
        socket.emit('joined',{user})
         
        socket.on('welcome',(data)=>{
            console.log(data.user , data.message)
         })
         socket.on('userJoined',(data)=>{
            console.log(data.user , data.message)
         })

         return ()=>{
            socket.emit("disconnect");
         socket.off();

         }
         

      
    },[])
  return (
   
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
                <input id='chatInput' placeholder='Enter Your Emotions' type='text'/>
                <button className='inputBtn' ><img src={sendButton} alt='send'/> </button>
            </div>
        </div>
    </div>  
    
  )
}

export default Chat
