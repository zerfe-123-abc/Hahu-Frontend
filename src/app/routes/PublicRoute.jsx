import Home from "@/pages/Home";
import Product from "@/pages/product-detail/ProductDetail";
import Cart from "@/pages/Cart";
import CategoryPage from "@/pages/CategoryPage";
import StaticPage from "@/pages/StaticPage";
import BrowseListing from "@/features/listings/pages/BrowseListing";

export const PublicRoute = [
  { index: true, element: <Home /> },
  { path: "browse", element: <BrowseListing /> },
  { path: "product/:id", element: <Product /> },
  { path: "cart", element: <Cart /> },
  { path: "category/:category", element: <CategoryPage /> },

  {
    path: "categories",
    element: <StaticPage title="Categories" description="Browse categories" />,
  },
];
