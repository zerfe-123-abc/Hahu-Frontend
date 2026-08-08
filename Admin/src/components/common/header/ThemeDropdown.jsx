import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Sun } from "lucide-react";
import useThemeStore from "../../../stores/ThemeStore";
import useTheme from "../../../hooks/useTheme";

const themeOptions = [
  {
    id: "darkblue",
    name: "Default",
    color: "bg-blue-600",
  },
  {
    id: "white",
    name: "White",
    color: "bg-gray-200 border",
  },
  {
    id: "black",
    name: "Black",
    color: "bg-black",
  },
];

const ThemeDropdown = () => {
  const dropdownRef = useRef(null);
  const currentTheme = useTheme();
  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useThemeStore();

  const selectedTheme =
    themeOptions.find((item) => item.id === theme) || themeOptions[0];

  const changeTheme = (value) => {
    setTheme(value);
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
    <div ref={dropdownRef} className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center gap-1 rounded-xl px-4 py-2 transition-all duration-200 cursor-pointer
          ${currentTheme.header}
          ${currentTheme.text}
          transition-colors duration-500 ease-in-out
        `}
      >
        <div className="flex flex-1 items-center space-x-3 pl-6 pr-5 border-l border-slate-200 rounded-xl gap-3">
          <Sun />
          <div className="hidden: md-block">
            <h1 className="font-2xl font-bold">Theme</h1>
            <div className="flex flex-1 gap-2">
              <div className={`w-3 h-3 rounded-full ${selectedTheme.color}`} />
              <span className="font-medium text-xs">{selectedTheme.name}</span>
            </div>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 mt-2 w-52 rounded-xl overflow-hidden z-50
              ${currentTheme.dropdown}
              ${currentTheme.dropdownText}
              transition-colors duration-500 ease-in-out
            `}
          >
            {themeOptions.map((item) => (
              <button
                key={item.id}
                onClick={() => changeTheme(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 transition-all
                  ${
                    theme === "black" || theme === "darkblue"
                      ? "hover:bg-slate-700"
                      : "hover:bg-slate-100"
                  }
                  ${currentTheme.dropdownText}
                `}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />

                  <span>{item.name}</span>
                </div>

                {theme === item.id && (
                  <Check size={18} className="text-blue-500" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeDropdown;
