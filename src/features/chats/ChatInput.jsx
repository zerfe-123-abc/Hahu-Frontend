import EmojiPicker from "emoji-picker-react";
import { Camera, Paperclip, Send, Smile } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const [message, setMessage] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageURL = URL.createObjectURL(file);
    onSendMessage({ type: "image", content: imageURL });
  };

  const textareaRef = useRef(null);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage({ type: "text", content: message });
      setMessage("");

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
  };

  const emojiref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (emojiref.current && !emojiref.current.contains(e.target)) {
        setShowEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="shrink-0 border-t border-green-400 bg-white px-6 py-3 flex items-center justify-between gap-2">
      <div className="flex items-end gap-2 flex-1">
        <button
          onClick={() => fileInputRef.current.click()}
          className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer pb-2 space-x-2"
        >
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <Camera size={24} />
        </button>

        <div className="relative" ref={emojiref}>
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer pb-2"
          >
            <Smile size={24} />
          </button>
          {showEmoji && (
            <div className="absolute bottom-full left-0 mb-2 z-50">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <textarea
          ref={textareaRef}
          placeholder="Type your message..."
          className="w-full bg-transparent border-none focus:outline-none focus:ring-0 bottom-3 resize-none py-3 max-h-32 overflow-y-auto"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          rows={1}
        />
      </div>

      <div className="flex items-center gap-2">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none space-x-3 cursor-pointer">
          <Paperclip size={24} />
        </button>
        <button
          onClick={handleSendMessage}
          className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
