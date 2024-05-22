import React, { useState } from 'react'
import './Join.css'
import logo from '../../image/images.jpeg'
import { Link } from 'react-router-dom'

let user;
const Join = () => {
    const [name, setname] = useState("")
   const sendUser=()=>{
        user=document.getElementById("joinInput").value;
        document.getElementById("joinInput").value="";
    }

  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
            <img className='joinLogo' src={logo}/>
            <h1>Chat Uss</h1>

            <input placeholder='Enter the Room' id='joinInput' onChange={(e)=>setname(e.target.value)}/>
           <Link onClick={(e)=>!name ?e.preventDefault():null } to='/chat'> <buton className='joinButton' onClick={sendUser}>Login</buton></Link>
        </div>

    </div>
  )
}

export default Join;
export {user }

