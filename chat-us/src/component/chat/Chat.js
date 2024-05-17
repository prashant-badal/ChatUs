import React, { useEffect, useState } from 'react';
import { user } from '../join/Join';
import './Chat.css';
import SocketIO from "socket.io-client";
import sendButton from "../../image/send.png";

const ENDPOINT = 'http://localhost:4000/';

let socket;

const Chat = () => {
  const [id, setId] = useState("");

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket = SocketIO(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      alert("Connected Start");
      setId(socket.id);
    });

    socket.emit('joined', { user });

    socket.on('userJoined', (data) => console.log(data.user, data.message));
    socket.on('welcome', (data) => console.log(data.message));
    socket.on('leave', (data) => console.log(data.user, data.message));

  

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
        console.log(data.user, data.message, data.id);
      });
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='chatPage'>
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatBox'></div>
        <div className='inputBox'>
          <input id='chatInput' placeholder='Enter Your Emotions' type='text' />
          <button onClick={send} className='inputBtn'><img src={sendButton} alt='send' /></button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
