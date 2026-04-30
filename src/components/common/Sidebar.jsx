import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    MessageCircle,
    Heart,
    History,
    ChevronDown,
    ChevronRight,
    Settings,
    User,
    LogOut,
    Store,
    Tag,
    TrendingUp,
    X,
} from "lucide-react";

const Sidebar = ({ isOpen, variant = "public", onClose }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    // Public Sidebar - Categories for second-hand store
    const publicMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/" },
        { id: 2, name: "Browse All", icon: ShoppingBag, link: "/browse" },
        { id: 3, name: "My Listings", icon: Package, link: "/my-listings" },
        { id: 4, name: "Wishlist", icon: Heart, link: "/wishlist" },
        { id: 5, name: "Order History", icon: History, link: "/orders" },
        { id: 6, name: "Messages", icon: MessageCircle, link: "/messages" },
    ];

    const publicCategories = [
        { id: 1, name: "Electronics", icon: "📱", link: "/category/electronics", count: 234 },
        { id: 2, name: "Vehicles", icon: "🚗", link: "/category/vehicles", count: 89 },
        { id: 3, name: "Furniture", icon: "🛋️", link: "/category/furniture", count: 156 },
        { id: 4, name: "Clothing", icon: "👕", link: "/category/clothing", count: 312 },
        { id: 5, name: "Books", icon: "📚", link: "/category/books", count: 78 },
        { id: 6, name: "Sports", icon: "⚽", link: "/category/sports", count: 67 },
        { id: 7, name: "Home & Garden", icon: "🏡", link: "/category/home", count: 145 },
        { id: 8, name: "Baby & Kids", icon: "👶", link: "/category/baby", count: 89 },
    ];

    // User Sidebar - Logged in user features
    const userMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/app/dashboard" },
        { id: 2, name: "My Listings", icon: Package, link: "/app/my-listings" },
        { id: 3, name: "Create Listing", icon: Store, link: "/app/create-listing" },
        { id: 4, name: "Wishlist", icon: Heart, link: "/app/wishlist" },
        { id: 5, name: "My Orders", icon: ShoppingBag, link: "/app/orders" },
        { id: 6, name: "Order History", icon: History, link: "/app/order-history" },
        { id: 7, name: "Messages", icon: MessageCircle, link: "/app/messages", badge: 2 },
    ];

    // Admin Sidebar - Admin features
    const adminMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/admin/dashboard" },
        { id: 2, name: "All Listings", icon: Package, link: "/admin/listings" },
        { id: 3, name: "All Users", icon: User, link: "/admin/users" },
        { id: 4, name: "Categories", icon: Tag, link: "/admin/categories" },
        { id: 5, name: "Orders", icon: ShoppingBag, link: "/admin/orders" },
        { id: 6, name: "Reports", icon: TrendingUp, link: "/admin/reports" },
    ];

    const adminSubMenus = [
        {
            id: "settings",
            name: "Settings",
            icon: Settings,
            items: [
                { name: "Site Settings", link: "/admin/settings" },
                { name: "Payment Settings", link: "/admin/payment-settings" },
                { name: "Notification Settings", link: "/admin/notifications" },
            ]
        },
        {
            id: "content",
            name: "Content",
            icon: Package,
            items: [
                { name: "Banners", link: "/admin/banners" },
                { name: "Pages", link: "/admin/pages" },
                { name: "FAQ", link: "/admin/faq" },
            ]
        }
    ];

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const getMenuItems = () => {
        switch (variant) {
            case "user": return userMenuItems;
            case "admin": return adminMenuItems;
            default: return publicMenuItems;
        }
    };

    const menuItems = getMenuItems();

    const isActive = (link) => location.pathname === link;

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed top-0 left-0 h-screen bg-gray-900 text-white transition-all duration-300 z-50 
             ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
             ${isOpen ? "w-72" : "w-20"}`}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
                    {isOpen && (
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-sm shadow-lg shadow-red-500/20">
                                H
                            </div>
                            <span className="font-bold text-lg tracking-tight">HAHU<span className="text-blue-500">MARKET</span></span>
                        </div>
                    )}
                    <button
                        onClick={onClose}
                        className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Scrollable Menu */}
                <div className="h-[calc(100%-64px)] overflow-y-auto py-4 px-3 space-y-1">
                    {/* Main Menu Items */}
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${isActive(item.link)
                                ? 'bg-linear-to-r from-red-500/20 to-red-600/10 text-blue-400 border-l-2 border-blue-500'
                                : 'hover:bg-slate-800'
                                }`}
                        >
                            <item.icon size={20} className={`${isActive(item.link) ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} transition-colors`} />
                            {isOpen && (
                                <>
                                    <span className="text-sm font-medium flex-1">{item.name}</span>
                                    {item.badge && (
                                        <span className="bg-blue-500 text-[10px] px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                                    )}
                                </>
                            )}
                        </Link>
                    ))}

                    {/* Public Categories */}
                    {variant === "public" && isOpen && (
                        <>
                            <div className="pt-4 pb-2">
                                <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-3">Categories</h3>
                            </div>
                            {publicCategories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={cat.link}
                                    onClick={onClose}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg group-hover:scale-110 transition-transform">{cat.icon}</span>
                                        <span className="text-sm">{cat.name}</span>
                                    </div>
                                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full">{cat.count}</span>
                                </Link>
                            ))}
                        </>
                    )}

                    {/* Admin Sub Menus */}
                    {variant === "admin" && isOpen && (
                        <>
                            <div className="pt-4"></div>
                            {adminSubMenus.map((subMenu) => (
                                <div key={subMenu.id} className="mb-2">
                                    <button
                                        onClick={() => toggleDropdown(subMenu.id)}
                                        className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <subMenu.icon size={20} className="text-slate-400" />
                                            <span className="text-sm">{subMenu.name}</span>
                                        </div>
                                        <ChevronDown
                                            size={16}
                                            className={`text-slate-500 transition-transform ${openDropdown === subMenu.id ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {openDropdown === subMenu.id && (
                                        <div className="ml-6 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                                            {subMenu.items.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={item.link}
                                                    onClick={onClose}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 text-sm text-slate-300 hover:text-white transition-colors"
                                                >
                                                    <ChevronRight size={14} className="text-slate-500" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}

                    {/* Bottom Actions */}
                    {isOpen && (
                        <div className="pt-4 mt-4 border-t border-slate-800">
                            {variant === "user" && (
                                <div className="space-y-1">
                                    <Link
                                        to="/app/settings"
                                        onClick={onClose}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                                    >
                                        <Settings size={20} className="text-slate-400" />
                                        <span className="text-sm">Settings</span>
                                    </Link>
                                    <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors w-full text-left text-red-400">
                                        <LogOut size={20} />
                                        <span className="text-sm">Sign Out</span>
                                    </button>
                                </div>
                            )}
                            {variant === "admin" && (
                                <Link
                                    to="/admin/profile"
                                    onClick={onClose}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
                                >
                                    <User size={20} className="text-slate-400" />
                                    <span className="text-sm">Admin Profile</span>
                                </Link>
                            )}
                            {variant === "public" && (
                                <Link
                                    to="/create-listing"
                                    onClick={onClose}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl font-medium text-sm shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-blue-700 transition-all"
                                >
                                    <Store size={18} />
                                    Sell an Item
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
export default Sidebar