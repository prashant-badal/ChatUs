import React from 'react'
import "./Message.css"
const Message = ({user,message,classs}) => {
    if(user){
        return (
            <>
            <div className={`messageBox ${classs}`}>
            <h3>{`${user}: ${message}`}</h3>
            </div> 
               
            </>
          )
    }
    else{
        return (
            <>
            <div className='messageBox right'>
            <h3>{`You : ${message}`}</h3>
            </div> 
               
            </>
          )
    }
 
}

export default Message
