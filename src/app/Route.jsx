import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"
import SellerAddProduct from "../pages/SellerAddProduct"
import AdminDashboard from "../pages/AdminDashboard"
import PublicLayout from "./layouts/PublicLayout"
import AppLayout from "./layouts/AppLayout"
import AdminLayout from "./layouts/AdminLayout"
import ProtectedRoute from "./guards/ProtectedRoute"
import GuestRoute from "./guards/GuestRoute"
import AdminRoute from "./guards/AdminRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<GuestRoute />}>
                <Route element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="product/:id" element={<Product />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="seller/add-product" element={<SellerAddProduct />} />
                </Route>
            </Route>

            <Route element={<AdminRoute />}>
                <Route element={<AdminLayout />}>
                    <Route path="admin" element={<AdminDashboard />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes
