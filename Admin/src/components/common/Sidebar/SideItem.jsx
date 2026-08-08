import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideItem = ({ icon, path, text, isOpen, setIsOpen }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer w-full hover:text-blue-400">
      <Link to={path}>
        <div
          className={`flex items-center ${
            isOpen ? "gap-4 justify-start" : "justify-center"
          } cursor-pointer hover:text-blue-500`}
        >
          <span
            data-tooltip-id={!isOpen ? "admin-tooltip" : undefined}
            data-tooltip-content={!isOpen ? text : undefined}
            className="text-xl"
          >
            {icon}
          </span>

          <AnimatePresence>
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </div>
  );
};

export default SideItem;
