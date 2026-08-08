import { FaBars } from "react-icons/fa6";
import useTheme from "@/hooks/useTheme";
import useThemeStore from "@/stores/ThemeStore";
import ThemeDropdown from "@/components/common/header/ThemeDropdown";
import AdminInput from "@/components/ui/AdminInput";
import { useState } from "react";
import { Bell, Search, ShoppingCart, User, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import useAuthStore from "@/stores/AuthStore";
import Animate from "@/components/ui/Animate";

const Header = ({ setIsOpen }) => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();

  const admin = useAuthStore((state) => state.admin);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };
  return (
    <header
      className={`top-0 left-0 z-50 sticky w-full h-16 flex items-center gap-6 justify-between p-6 shadow-sm
    ${currentTheme.header}
    ${currentTheme.text}
    transition-colors
    duration-500
    ease-in-out
`}
    >
      <div className="flex items-center space-x-4 gap-6">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-xl p-2 rounded-lg w-5 h-5"
        >
          <FaBars />
        </button>
        <div className="hidden md:block">
          <h1 className="text-2xl font-black">HAHU-DASHBOARD</h1>
          <p> welcome back to hahu</p>
        </div>
      </div>

      <div className="ml-10">
        <div className="hidden md:flex flex-1 w-full">
          <form onSubmit={handleSearch} className="relative w-full">
            <AdminInput
              type="text"
              placeholder="Search And Track Hahu...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center ml-auto gap-5">
        <Link
          to="/Notification"
          className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-800/60 transition-all duration-200"
        >
          <Bell size={25} />
        </Link>
        <Link
          to="/Order"
          className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-800/60 transition-all duration-200"
        >
          <ShoppingCart size={25} />
          <span className="absolute top-2 right-3 w-2 h-2 rounded-full animate-pulse"></span>
        </Link>
        <Animate show={admin && open} variant="slideDown">
          <ProfileDropdown />
        </Animate>
      </div>
      <Animate variant="fade">
        <ThemeDropdown />
      </Animate>
    </header>
  );
};

export default Header;
