import { ChevronDown } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  const [catOpen, setCatOpen] = useState(false);
  const catRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={catRef}>
      <button
        onClick={() => setCatOpen(!catOpen)}
        className="hidden md:flex items-center gap-1.5 px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-all duration-200 text-slate-200 border border-blue-300 bg-slate-900/50"
      >
        All
        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Category Dropdown Panel */}
      <div
        className={`absolute top-full left-0 mt-2 w-80 bg-slate-950  rounded-xl shadow-2xl border border-slate-800 py-3 z-50 origin-top-left transition-all duration-200 ${catOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"}`}
      >
        <div className="grid grid-cols-1 gap-0.5 px-2 max-h-96 overflow-y-auto">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-200 group"
              onClick={() => setCatOpen(false)}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-150">
                <cat.icon size={20} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-slate-200 truncate group-hover:text-white">
                  {cat.name}
                </p>
                <p className="text-[10px] text-slate-500">
                  {cat.count} listings
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-slate-800 px-3">
          <Link
            to="/categories"
            className="flex items-center justify-center text-xs font-semibold text-blue-400 hover:text-blue-300 py-1 transition-colors"
            onClick={() => setCatOpen(false)}
          >
            View All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
