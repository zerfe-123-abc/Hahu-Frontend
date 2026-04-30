import Navbar from "./components/common/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Footer from "./components/common/Footer"
import CartSidebar from "./components/ui/CartSidebar"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SellerAddProduct from "./pages/SellerAddProduct"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar (pass toggle function) */}
      <Navbar onCartClick={() => setShowCart(true)} />

      {/* Main Content */}
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller/add-product" element={<SellerAddProduct />} />
          <Route path="/admin" element={<AdminDashboard />} />


        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowCart(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg">
            <CartSidebar />
          </div>
        </div>
      )}
    </div>
  )
}

export default App