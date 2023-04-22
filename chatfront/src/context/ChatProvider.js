import React, { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const ChatContext = createContext()

const ChatProvider = ({ children }) => {
    const navigator = useHistory();
    const [user, setUser] = useState({})
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("chatToken"))
        setUser(userInfo)
    }, [navigator])
    return (
        <ChatContext.Provider value={{ user, setUser }}>{children}</ChatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(ChatContext)
}
export default ChatProvider