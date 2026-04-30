import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import SellerAddProduct from "../pages/SellerAddProduct"
import AdminDashboard from "../pages/AdminDashboard"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/seller/add-product" element={<SellerAddProduct />} />
            <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    )
}

export default AppRoutes
