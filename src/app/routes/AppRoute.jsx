import SellerAddProduct from "@/pages/SellerAddProduct";
import StaticPage from "@/pages/StaticPage";
import Dashboard from "@/pages/Dashboard";
import MyListings from "@/pages/MyListings";
import Wishlist from "@/pages/Wishlist";
import Orders from "@/pages/Orders";
import ChatPage from "@/features/chats/ChatPage";
import SellerDetail from "@/pages/product-detail/SellerDetail";

export const AppRoute = [
  { path: "create-listing", element: <SellerAddProduct /> },
  {
    path: "profile",
    element: <StaticPage title="Profile" description="User profile" />,
  },
  { path: "wishlist", element: <Wishlist /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "my-listings", element: <MyListings /> },
  { path: "orders", element: <Orders /> },
  { path: "chat", element: <ChatPage /> },
  { path: "sellerdetail", element: <SellerDetail /> },
];
