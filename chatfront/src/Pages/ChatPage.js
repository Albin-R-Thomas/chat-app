import {React,useEffect, useState} from 'react'
import axios from 'axios'
const ChatPage = () => {
    const [chats,setChats] = useState([])
    const fetchChats = async() =>{
        const chat = await axios.get('http://localhost:5000/api/chat') 
        setChats(chat.data);
        console.log(chat.data);
    }
    useEffect(() => {
      fetchChats()
    },[])
    
  return (
    <div>{
       chats.map(function(chat){
        return (<div key={chat._id}>{chat.chatName}</div>)
       })
    }</div>
  )
}

export default ChatPage