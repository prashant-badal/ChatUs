import React, { useEffect, useState } from 'react';
import { user } from '../join/Join';
import './Chat.css';
import SocketIO from "socket.io-client";
import sendButton from "../../image/send.png";
import Message from '../message/Message';
import ReactScrollBottom from 'react-scroll-to-bottom'
import img from "../../image/closeIcon.png"
const ENDPOINT = 'https://chatusbackend.onrender.com/';

let socket;

const Chat = () => {
  const [id, setId] = useState("");
  const [messages,setMessages]=useState([])
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };


  console.log("render again")

  useEffect(() => {
    socket = SocketIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
  console.log("Connected Start");
      setId(socket.id);
    });

    socket.emit('joined', { user });

    socket.on('userJoined', (data) =>{
      console.log(data.user, data.message)
      setMessages([...messages,data])
    }
    ) 
    socket.on('welcome', (data) => {
      
      console.log(data.message)
      setMessages([...messages,data])
    })

    socket.on('leave', (data) => {
      console.log(data.user, data.message);
      setMessages([...messages,data])
    })

  

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
        console.log(data.user, data.message, data.id);
        console.log(messages)
        setMessages(prev=>[...prev,data])
         console.log(messages)
      });
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'>
          <h2>Chat Uss</h2>
        <a href='/'><img src={img} alt='closeIcon'/>
          </a>  
        </div>
        <ReactScrollBottom className='chatBox'>
    {messages.map((item,i)=>
     <Message key={i} message={item.message} user={item.id ===id ?"":item.user} classs={item.id ===id ?"right":"left"}/>
    )}
          
        </ReactScrollBottom>
        <div className='inputBox'>
          <input onKeyPress={(e)=>e.key==='Enter'?send():null} id='chatInput' placeholder='Enter Your Emotions' type='text' />
          <button onClick={send} className='inputBtn'><img src={sendButton} alt='send' /></button>
        </div>
      </div>
    </div>
  );
}

export default Chat;


