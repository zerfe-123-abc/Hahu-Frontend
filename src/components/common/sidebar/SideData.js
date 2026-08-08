import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  MessageCircle,
  Heart,
  History,
  Store,
  Laptop,
  Van,
  BedSingle,
  Shirt,
  BookOpenText,
  Volleyball,
  House,
  Baby,
} from "lucide-react";

// Public Sidebar - Categories for second-hand store
export const publicMenuItems = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/" },
  { id: 2, name: "Browse All", icon: ShoppingBag, link: "/browse" },
  { id: 3, name: "My Listings", icon: Package, link: "/my-listings" },
  { id: 4, name: "Wishlist", icon: Heart, link: "/wishlist" },
  { id: 5, name: "Order History", icon: History, link: "/orders" },
  { id: 6, name: "Messages", icon: MessageCircle, link: "/messages" },
];

export const publicCategories = [
  { id: 1, name: "Electronics", icon: Laptop, link: "/category/electronics" },
  { id: 2, name: "Vehicles", icon: Van, link: "/category/vehicles" },
  { id: 3, name: "Furniture", icon: BedSingle, link: "/category/furniture" },
  { id: 4, name: "Clothing", icon: Shirt, link: "/category/clothing" },
  { id: 5, name: "Books", icon: BookOpenText, link: "/category/books" },
  { id: 6, name: "Sports", icon: Volleyball, link: "/category/sports" },
  { id: 7, name: "Home & Garden", icon: House, link: "/category/home" },
  { id: 8, name: "Baby & Kids", icon: Baby, link: "/category/baby" },
];

// User Sidebar - Logged in user features
export const userMenuItems = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/app/dashboard" },
  { id: 2, name: "My Listings", icon: Package, link: "/app/my-listings" },
  { id: 3, name: "Create Listing", icon: Store, link: "/app/create-listing" },
  { id: 4, name: "Wishlist", icon: Heart, link: "/app/wishlist" },
  { id: 5, name: "My Orders", icon: ShoppingBag, link: "/app/orders" },
  { id: 6, name: "Order History", icon: History, link: "/app/order-history" },
  {
    id: 7,
    name: "Messages",
    icon: MessageCircle,
    link: "/app/messages",
    badge: 2,
  },
];
