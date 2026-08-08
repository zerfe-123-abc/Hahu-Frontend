import { Circle } from "lucide-react";

const ChatConversetionItem = ({ chat, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 p-3 rounded-xl transition-all duration-700 ease-in-out hover:translate-x-1 cursor-pointer ${
        active
          ? "bg-green-50  border-green-100"
          : "hover:bg-slate-300 bg-slate-100"
      }`}
    >
      {/* Seller Avatar */}
      <div className="flex items-center justify-between">
        <div className="relative flex items-center">
          <div className="relative">
            <img
              src={chat.avatar}
              alt={chat.seller}
              className="w-12 h-12 rounded-full object-cover"
            />
            {chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white">
                <Circle size={10} fill="#22c55e" color="#22c55e" />
              </span>
            )}

            {!chat.online && (
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-gray-400 border-2 border-white">
                <Circle size={10} fill="#9ca3af" color="#9ca3af" />
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Conversation */}
      <div className="flex-1 text-left min-w-0">
        <div className="flex justify-between">
          <h3 className="font-semibold">{chat.seller}</h3>

          <span className="text-xs text-slate-500">{chat.time}</span>
        </div>

        <p className="text-sm text-slate-500 truncate">{chat.product}</p>
        <p className="text-sm text-slate-500 truncate">{chat.lastMessage}</p>
      </div>

      {chat.unread > 0 && (
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center gap-6">
          {chat.unread}
        </div>
      )}
    </button>
  );
};

export default ChatConversetionItem;
