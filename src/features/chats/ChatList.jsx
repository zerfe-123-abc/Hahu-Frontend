import React from "react";
import ChatType from "./ChatType";

const ChatList = ({ messages }) => {
  return (
    <div className="p-6">
      {messages.map((message) => (
        <ChatType key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatList;
