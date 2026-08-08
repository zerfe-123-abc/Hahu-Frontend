import Button from "@/components/ui/Button";
import { useAuth } from "@/store/authStore";
import {
  ChevronDown,
  LogInIcon,
  LogOut,
  MessageCircle,
  Package,
  ShoppingBag,
  User,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userRef = useRef(null);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitials =
    user?.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "JD";

  return (
    <div className="relative pb-1.5" ref={userRef}>
      {user ? (
        <button
          onClick={() => setUserMenuOpen(!userMenuOpen)}
          className="flex items-center gap-1.5 pl-1.5 pr-2 h-9 rounded-full hover:bg-slate-800/60 transition-all duration-200"
        >
          <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
            {userInitials}
          </div>
          <ChevronDown
            size={14}
            className={`text-slate-400 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`}
          />
        </button>
      ) : (
        <Link to="/login">
          <Button variant="login" size="sm" className="gap-1.5">
            <LogInIcon size={28} />
            <span className="hidden sm:inline">Login</span>
          </Button>
        </Link>
      )}

      {/* User Dropdown Menu */}
      {user && (
        <div
          className={`absolute top-full right-0 mt-2 w-56 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 py-2 z-50 transition-all duration-200 origin-top-right ${userMenuOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"}`}
        >
          <div className="px-4 py-2 border-b border-slate-800/60">
            <p className="font-semibold text-sm text-white truncate">
              {user.name}
            </p>
            <p className="text-xs text-slate-400 truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <Link
              to="/profile"
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <User size={15} /> My Profile
            </Link>
            <Link
              to="/my-listings"
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Package size={15} /> My Listings
            </Link>
            <Link
              to="/orders"
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <ShoppingBag size={15} /> My Orders
            </Link>
            <Link
              to="/messages"
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <MessageCircle size={15} /> Messages
              <span className="ml-auto bg-blue-600 text-[10px] text-white px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
          </div>
          <div className="border-t border-slate-800/60 pt-1 mt-1">
            <button
              onClick={() => {
                logout();
                setUserMenuOpen(false);
                navigate("/");
              }}
              className="flex items-center gap-2.5 px-4 py-2 hover:bg-red-500/10 text-sm text-red-400 hover:text-red-300 transition-colors w-full text-left"
            >
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
