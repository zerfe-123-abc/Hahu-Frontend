import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import CategoryPage from "@/pages/CategoryPage";
import StaticPage from "@/pages/StaticPage";

export const PublicRoute = [
    { index: true, element: <Home /> },
    { path: "browse", element: <Home /> },
    { path: "product/:id", element: <Product /> },
    { path: "cart", element: <Cart /> },
    { path: "category/:category", element: <CategoryPage /> },

    { path: "categories", element: <StaticPage title="Categories" description="Browse categories" /> },
    { path: "privacy", element: <StaticPage title="Privacy Policy" description="Privacy info" /> },
];