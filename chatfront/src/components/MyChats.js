import React from "react";

const MyChats = () => {
  return (
    <div className="my-chats-container">
      <div className="my-chats-header">
        <div className="my-chats-text">My Chats</div>
        <div className="new-group-chat-btn">New Group Chat</div>
        <div>
          <ion-icon name="add-outline" id="add-chat-btn"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default MyChats;
