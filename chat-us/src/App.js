import React from 'react'
import socketio from 'socket.io-client'

const ENDPOINT="http://localhost:4000/";
const socket=socketio(ENDPOINT,{transport:['WebSocket']})
const App = () => {
  return (
   <>
   
   
   <h1>Working</h1></>
  )
}

export default App
