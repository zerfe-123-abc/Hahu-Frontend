import { useAuth } from "@/store/authStore";
import { LogOut, Settings } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserItem = ({ isOpen, variant, onClose }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {isOpen && (
        <div className="mt-auto border-t border-white/5 p-4">
          {variant === "user" && (
            <div className="space-y-1">
              <Link
                to="/app/settings"
                onClick={handleNavClick}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-300 transition-colors"
              >
                <Settings size={20} className="text-slate-400" />
                <span className="text-sm text-white">Settings</span>
              </Link>
              <button
                onClick={() => {
                  logout();
                  setUserMenuOpen(false);
                  navigate("/");
                }}
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-300 dark:hover:bg-gray-300 text-sm text-red-500 transition-colors w-full"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserItem;
