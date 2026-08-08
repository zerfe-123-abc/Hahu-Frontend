import react from "react";
const ChatHeader = ({ selectedChat }) => {
  return (
    <header className="h-20 px-6 border-b border-slate-300  bg-slate-200 flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer">
        <img
          src={selectedChat.avatar}
          alt={selectedChat.seller}
          className="w-12 h-12 rounded-full hover:translate-y-2 transition-all duration-500 ease-in-out"
        />
        <div>
          <h2 className="font-bold">{selectedChat.seller}</h2>
          <p
            className={`text-sm ${selectedChat.online ? "text-green-500" : "text-gray-500"}`}
          >
            {selectedChat.online ? "Online" : "Offline"}
          </p>
          <p className="text-xs text-slate-500">{selectedChat.location}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={selectedChat.productImage}
          className="w-14 h-14 rounded-xl cursor-pointer transition-all duration-700 ease-in-out hover:translate-y-2"
        />
        <div>
          <h3 className="font-semibold">{selectedChat.product}</h3>

          <p className="text-blue-600 font-bold">{selectedChat.price} ETB</p>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
