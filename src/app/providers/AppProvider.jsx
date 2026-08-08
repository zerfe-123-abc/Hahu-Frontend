import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/store/authStore.jsx";
import { CartProvider } from "@/store/cartStore.jsx";
import { CategoryProvider } from "@/store/categoryStore.jsx";
import { SearchProvider } from "@/store/searchStore.jsx";
import { ProductProvider } from "@/store/productStore.jsx";
import { WishlistProvider } from "@/store/wishlistStore.jsx";
import { OrderProvider } from "@/store/orderStore.jsx";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <SearchProvider>
            <WishlistProvider>
              <ProductProvider>
                <OrderProvider>
                  <BrowserRouter>{children}</BrowserRouter>
                </OrderProvider>
              </ProductProvider>
            </WishlistProvider>
          </SearchProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  );
};
export default AppProvider;
