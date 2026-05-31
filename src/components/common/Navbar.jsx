import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, Heart, PlusCircle, LogIn, LogOut, Bell, ChevronDown, User, Package, MessageCircle, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "@/store/searchStore.jsx";
import { useAuth } from "@/store/authStore.jsx";

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const catRef = useRef();
  const userRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchQuery } = useSearch();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const categories = [
    { id: 1, name: "Electronics & Gadgets", icon: "📱", link: "/category/electronics", count: 234 },
    { id: 2, name: "Vehicles", icon: "🚗", link: "/category/vehicles", count: 89 },
    { id: 3, name: "Furniture", icon: "🛋️", link: "/category/furniture", count: 156 },
    { id: 4, name: "Clothing & Fashion", icon: "👕", link: "/category/clothing", count: 312 },
    { id: 5, name: "Books & Education", icon: "📚", link: "/category/books", count: 78 },
    { id: 6, name: "Sports & Outdoors", icon: "⚽", link: "/category/sports", count: 67 },
    { id: 7, name: "Home & Garden", icon: "🏡", link: "/category/home", count: 145 },
    { id: 8, name: "Baby & Kids", icon: "👶", link: "/category/baby", count: 89 },
  ];

  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Browse", link: "/browse" },
    { id: 3, name: "Categories", link: "/categories" },
  ];

  const userInitials = user?.name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "JD";

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu size={22} />
            </button>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-lg shadow-lg">
                H
              </div>
              <span className="font-bold text-xl hidden lg:block tracking-tight">HAHU<span className="text-white-500">MARKET</span></span>
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search phones, cars, furniture..."
                className="w-full rounded-full border border-gray-700 bg-gray-800 dark:bg-gray-900 px-5 py-2.5 pr-12 focus:outline-none focus:border-white-500 focus:ring-1 focus:ring-white-500 text-sm text-white placeholder-gray-400 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white-500 hover:bg-white-600 rounded-full transition-colors"
              >
                <Search size={16} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-1 md:gap-2">
            <Link to="/notifications" className="p-2.5 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-white-500 rounded-full"></span>
            </Link>

            <Link to="/wishlist" className="p-2.5 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
              <Heart size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-white-500 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </Link>

            <Link to="/cart" className="p-2.5 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-0.5 -right-0.5 bg-white-500 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </Link>

            <Link
              to="/create-listing"
              className="hidden md:flex items-center gap-2 bg-linear-to-r from-white-500 to-white-600 hover:from-white-600 hover:to-white-700 px-4 py-2 rounded-full font-medium text-sm shadow-lg shadow-white-500/20 transition-all hover:scale-105"
            >
              <PlusCircle size={16} />
              <span>Sell</span>
            </Link>

            <div className="relative" ref={userRef}>
              {user ? (
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1.5 hover:bg-gray-800 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-linear-to-br from-white-400 to-white-600 rounded-full flex items-center justify-center text-sm font-bold shadow">
                    {userInitials}
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${userMenuOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium">
                  <LogIn size={16} />
                  <span className="hidden lg:inline">Sign In</span>
                </Link>
              )}

              {userMenuOpen && user && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-xl border border-gray-700 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                  <Link to="/profile" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-800 text-sm transition-colors">
                    <User size={16} />
                    My Profile
                  </Link>
                  <Link to="/my-listings" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-800 text-sm transition-colors">
                    <Package size={16} />
                    My Listings
                  </Link>
                  <Link to="/orders" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-800 text-sm transition-colors">
                    <ShoppingBag size={16} />
                    My Orders
                  </Link>
                  <Link to="/messages" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-gray-800 text-sm transition-colors">
                    <MessageCircle size={16} />
                    Messages
                    <span className="ml-auto bg-white-500 text-[10px] px-1.5 py-0.5 rounded-full">2</span>
                  </Link>
                  <hr className="my-2 border-gray-700" />
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                      navigate("/");
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-700 dark:hover:bg-red-500 text-sm text-white-400 transition-colors w-full"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2.5 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-t border-gray-800 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1 h-10">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-800 ${location.pathname === item.link ? 'bg-gray-800 text-white-400' : ''}`}
              >
                {item.name}
              </Link>
            ))}

            <div className="relative" ref={catRef}>
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Categories
                <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>

              {catOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-xl border border-gray-700 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={cat.link}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors group"
                        onClick={() => setCatOpen(false)}
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{cat.name}</p>
                          <p className="text-xs text-gray-400">{cat.count} items</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-gray-700">
                    <Link to="/categories" className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white-400 hover:bg-gray-700 rounded-lg transition-colors" onClick={() => setCatOpen(false)}>
                      View All Categories
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="flex-1"></div>
            <Link to="/create-listing" className="md:hidden lg:flex items-center gap-2 text-sm text-white-400 hover:text-white-300 transition-colors">
              <PlusCircle size={16} />
              Sell an Item
            </Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-900 border-t border-gray-700 py-4 animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search items..."
                className="w-full rounded-xl border border-gray-600 bg-gray-900 px-4 py-2.5 pr-10 focus:outline-none focus:border-white-500 text-sm text-white placeholder-gray-400"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400">
                <Search size={18} />
              </button>
            </form>

            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.link ? 'bg-gray-700 text-white-400' : 'hover:bg-gray-700'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <hr className="border-gray-700" />

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.link}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-sm font-medium truncate">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <hr className="border-gray-700" />

            <div className="flex flex-col gap-2">
              <Link
                to="/create-listing"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-white-500 to-white-600 px-4 py-3 rounded-xl font-medium text-sm"
              >
                <PlusCircle size={18} />
                Sell an Item
              </Link>
              <div className="flex items-center justify-end">
                <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-medium">
                  <LogIn size={16} />
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;