import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./Data";
import SideItem from "./SideItem";
import { Tooltip } from "react-tooltip";
import { ShieldCheck } from "lucide-react";
import useTheme from "../../../hooks/useTheme";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const currentTheme = useTheme();
  return (
    <div>
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 240 : 72 }}
        transition={{ duration: 0.4 }}
        className={`
        ${currentTheme.sidebar}
        ${currentTheme.text}top-0 left-0 h-screen sticky z-50 p-4 flex flex-col gap-8 transition-colors duration-500 ease-in-out
        `}
      >
        <div
          className={`flex items-center ${isOpen ? "justify-start" : "justify-center"}`}
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-300 to-blue-600 rounded-xl flex items-center justify-center object-cover transition-transform ring-2">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="ml-3"
              >
                <h1 className="font-bold">HAHU</h1>
                <p className="text-xs">Admin board</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <nav
          className={`flex flex-col gap-11 h-full overflow-y-auto ${!isOpen && "no-scrollbar"} `}
        >
          {menuItems.map((item, index) => (
            <SideItem
              key={index}
              icon={item.icon}
              text={item.text}
              path={item.path}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ))}
        </nav>
      </motion.div>
      {!isOpen && <Tooltip id="admin-tooltip" offset={40} />}
    </div>
  );
};

export default Sidebar;
