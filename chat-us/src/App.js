import React from 'react'
import Join from './component/join/Join';
import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Chat from './component/chat/Chat';
// const ENDPOINT="http://localhost:4000/";
// const socket=socketio(ENDPOINT,{transport:['WebSocket']})

const route=createBrowserRouter([
  {
    path: "/",
    element: <Join />
  },
  {
    path: "/chat",
    element: <Chat />
  },
])


const App = () => {
  return (
   <>
   <RouterProvider router={route} >
    </RouterProvider>
   

  </>
  )
}

export default App
