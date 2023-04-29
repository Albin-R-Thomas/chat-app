import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { ChatState } from '../context/ChatProvider'
import SideDrawer from '../components/miscellaneous/SideDrawer'
import ChatBox from '../components/ChatBox'
import MyChats from '../components/MyChats'
const ChatPage = () => {
  const { user, setUser } = ChatState()

  return (
    <div className='chat_container'>
      {user && <SideDrawer />}
      <div className='chat'>
        {user && <MyChats />}
        {user && <ChatBox />}
      </div>
    </div>
  )
}

export default ChatPage