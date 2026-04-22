import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./store/cartStore.jsx"
import { AuthProvider } from "./store/authStore.jsx"
import { CategoryProvider } from "./store/categoryStore.jsx"
import { SearchProvider } from "./store/searchStore.jsx"
import { ProductProvider } from "./store/productStore.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <CategoryProvider>
          <SearchProvider>
            <ProductProvider>
             <BrowserRouter>
              <App />
             </BrowserRouter>
            </ProductProvider>
           </SearchProvider>
        </CategoryProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)