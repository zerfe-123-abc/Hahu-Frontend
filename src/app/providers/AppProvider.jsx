import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/store/authStore.jsx"
import { CartProvider } from "@/store/cartStore.jsx"
import { CategoryProvider } from "@/store/categoryStore.jsx"
import { SearchProvider } from "@/store/searchStore.jsx"
import { ProductProvider } from "@/store/productStore.jsx"

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                <CategoryProvider>
                    <SearchProvider>
                        <ProductProvider>
                            <BrowserRouter>{children}</BrowserRouter>
                        </ProductProvider>
                    </SearchProvider>
                </CategoryProvider>
            </CartProvider>
        </AuthProvider>
    )
}
export default AppProvider