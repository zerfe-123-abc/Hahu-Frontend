import React from "react";

const ChatType = ({ message }) => {
  return (
    <div
      className={`mb-4 p-3 rounded-lg max-w-xs whitespace-pre-wrap break-words transition-all duration-700 hover:translate-x-2 cursor-pointer hover:bg-blue-400 ${
        message.sender === "buyer"
          ? "bg-blue-300 text-white ml-auto"
          : "bg-gray-300 text-gray-800"
      }`}
    >
      {message.type === "text" && <p>{message.content}</p>}

      {message.type === "image" && (
        <img
          src={message.content}
          alt="Sent image"
          className="max-w-full h-auto rounded"
        />
      )}
      <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
    </div>
  );
};

export default ChatType;
