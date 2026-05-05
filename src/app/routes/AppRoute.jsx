import SellerAddProduct from "@/pages/SellerAddProduct";
import StaticPage from "@/pages/StaticPage";

export const AppRoute = [
    { path: "create-listing", element: <SellerAddProduct /> },
    { path: "profile", element: <StaticPage title="Profile" description="User profile" /> },
    { path: "wishlist", element: <StaticPage title="Wishlist" description="Saved items" /> },
];