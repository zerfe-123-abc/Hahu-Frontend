import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatSideBar from "./ChatSideBar";
import { chatData } from "./ChatData";
import ChatList from "./ChatList";

const ChatPage = () => {
  // State to manage the selected chat
  const [selectedChat, setSelectedChat] = useState(chatData[0]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seller",
      type: "text",
      content:
        "Hello! How can I help you? I am available to answer any questions you may have about the product.",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      sender: "buyer",
      type: "text",
      content: "I have a question about the product.",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      sender: "seller",
      type: "text",
      content: "Sure! What would you like to know?",
      timestamp: "10:02 AM",
    },
  ]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.type === "text" && !newMessage.content.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "buyer",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        ...newMessage,
      },
    ]);
  };

  return (
    <div
      className={`flex h-full overflow-hidden m-5 p-4 pb-24 rounded-xl border border-slate-300 bg-slate-100 transition-all duration-700 ease-in-out

    ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {/* Sidebar */}
      <ChatSideBar
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      {/* Right */}
      <div className="flex flex-col flex-1">
        <ChatHeader selectedChat={selectedChat} />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-slate-400">
          <ChatList messages={messages} />
        </div>
        <div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
