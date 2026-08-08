import useTheme from "@/hooks/useTheme";
import useAuthStore from "@/stores/AuthStore";
import useThemeStore from "@/stores/ThemeStore";
import { ChevronDown, User2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const ProfileDropdown = () => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { theme, setTheme } = useThemeStore();
  const currentTheme = useTheme();

  const handleProfile = () => {
    setOpen(false);
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
    setOpen(false);
  };
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative rounded-xl py-2 px-4
     ${currentTheme.header}
     ${currentTheme.text}
     `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-3 pl-4 pr-3 cursor-pointer"
      >
        <User2 className="w-8 h-8 rounded-full ring-2 ring-gray-600 hover:bg-slate-500" />

        <div className="hidden md:block text-left">
          <p className="text-sm font-medium">Hahu-Market</p>
          <p className="text-xs">Admin@Hahu.</p>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute right-0 mt-5 w-48 rounded-lg shadow-lg overflow-hidden z-50
           ${currentTheme.dropdown}
           ${currentTheme.dropdownText}
            `}
          >
            <Link
              onClick={handleProfile}
              to="/profile"
              className="block px-4 py-3 hover:bg-slate-700 transition-colors"
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-red-400 hover:bg-slate-700 transition-colors"
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
