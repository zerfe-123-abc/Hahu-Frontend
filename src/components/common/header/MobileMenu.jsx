import Button from "@/components/ui/Button";
import { Menu, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MobileMenu = ({ categories }) => {
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Browse", link: "/browse" },
  ];

  const location = useLocation();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();

    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);
  return (
    <div>
      <button
        className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 py-4 px-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search items..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 text-sm text-white placeholder-slate-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white"
            >
              <Search size={16} />
            </button>
          </form>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.link ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-800/60"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="border-slate-800" />

          <hr className="border-slate-800" />

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
              Top Categories
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800/60 border border-slate-800/40 transition-colors"
                >
                  <span className="text-base">{cat.icon}</span>
                  <span className="text-xs font-medium text-slate-300 truncate">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
