import Logo from "@/assets/logo.png";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import MenuItem from "./MenuItem.jsx";
import PublicItem from "./PublicItem.jsx";
import UserItem from "./UserItem.jsx";

const Sidebar = ({ isOpen, onClose, variant }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col bg-[#020617] backdrop-blur-xl border-r border-white/5 transition-all duration-500 ease-in-out ${isOpen ? "w-64 translate-x-0" : "-translate-x-full md:translate-x-0 md:w-22"}
        `}
      >
        {/* Header */}
        <div className="h-16 md:h-20 flex items-center px-5 border-b border-white/5 bg-transparent text-white">
          <div className="flex items-center gap-3">
            {/* Logo ALWAYS visible */}
            <img
              src={Logo}
              alt="HAHU Market Logo"
              className={`w-10 h-10 rounded-full ring-2 ring-white/5 object-cover transition-transform duration-500 ease-in-out `}
            />

            {/* Text only when open */}
            <span
              className={` overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out origin-left
                 ${isOpen ? "opacity-100 scale-100 translate-x-0 max-w-45" : "opacity-0 scale-95 -translate-x-3 max-w-0"}
                `}
            >
              <span className="text-lg font-bold tracking-tight text-slate-100">
                SECOND <span className="text-blue-400">HAND</span>
              </span>
            </span>
          </div>
        </div>

        {/* Scrollable Menu */}
        <div className="flex-1 h-full overflow-y-auto custom-scrollbar flex flex-col gap-2 px-3 py-6">
          {/* Main Menu Items */}
          <MenuItem isOpen={isOpen} variant="user" onClose={onClose} />
          {/* Public Categories */}
          {variant === "public" && (
            <PublicItem isOpen={isOpen} variant="public" onClose={onClose} />
          )}

          {/* Bottom Actions */}
          {variant === "user" && (
            <UserItem isOpen={isOpen} variant="user" onClose={onClose} />
          )}
        </div>
        <Tooltip
          id="sidebar-tooltip"
          place="right"
          delayShow={200}
          offset={40}
        />
      </aside>
    </>
  );
};
export default Sidebar;
