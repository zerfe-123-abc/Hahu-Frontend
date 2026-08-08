import React from "react";
import { Link } from "react-router-dom";
import { publicCategories } from "./SideData";

const PublicItem = ({ isOpen, variant, onClose }) => {
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };
  return (
    <div>
      {variant === "public" && (
        <>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 max-h-10" : "opacity-0   max-h-0"}
              `}
          >
            <div className="pt-4 pb-2">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Categories
              </h3>
            </div>
          </div>
          {publicCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              onClick={handleNavClick}
              data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
              data-tooltip-content={!isOpen ? cat.name : undefined}
              className="group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 text-slate-400 hover:scale-[1.02] hover:text-white hover:bg-white/5"
            >
              {/* Icon ALWAYS visible */}

              <span className="text-lg group-hover:scale-110 transition-transform ">
                <cat.icon size={20} />
              </span>

              {/* Text only when open */}
              <span
                className={`block overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out origin-left ${isOpen ? "opacity-100 translate-x-0 max-w-40" : "opacity-0 -translate-x-3 max-w-0"}`}
              >
                {cat.name}
              </span>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default PublicItem;
