import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Product from "@/pages/Product"
import Cart from "@/pages/Cart"
import Login from "@/features/auth/pages/Login"
import Register from "@/features/auth/pages/Register"
import SellerAddProduct from "@/pages/SellerAddProduct"
import AdminDashboard from "@/pages/AdminDashboard"
import PublicLayout from "@/app/layouts/PublicLayout"
import AppLayout from "@/app/layouts/AppLayout"
import AdminLayout from "@/app/layouts/AdminLayout"
import ProtectedRoute from "@/app/guards/ProtectedRoute"
import GuestRoute from "@/app/guards/GuestRoute"
import AdminRoute from "@/app/guards/AdminRoute"
import StaticPage from "@/pages/StaticPage"
import CategoryPage from "@/pages/CategoryPage"
import NotFound from "@/pages/NotFound"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route path="browse" element={<Home />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="categories" element={<StaticPage title="Categories" description="Browse all available categories and trending collections." />} />
                <Route path="category/:category" element={<CategoryPage />} />
                <Route path="privacy" element={<StaticPage title="Privacy Policy" description="Learn how we protect your information on HAHU MARKET." />} />
                <Route path="terms" element={<StaticPage title="Terms & Conditions" description="Read the terms that keep the marketplace safe for buyers and sellers." />} />
                <Route path="faq" element={<StaticPage title="FAQ" description="Frequently asked questions and support information." />} />
                <Route path="notifications" element={<StaticPage title="Notifications" description="Check notifications, updates, and announcements." />} />

                <Route element={<GuestRoute />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="create-listing" element={<SellerAddProduct />} />
                    <Route path="app/create-listing" element={<SellerAddProduct />} />
                    <Route path="profile" element={<StaticPage title="My Profile" description="Update your account details and personal settings." />} />
                    <Route path="wishlist" element={<StaticPage title="Wishlist" description="Your saved items appear here." />} />
                    <Route path="orders" element={<StaticPage title="Orders" description="Track your purchases and order status." />} />
                    <Route path="messages" element={<StaticPage title="Messages" description="Your buyer and seller conversations." />} />
                    <Route path="my-listings" element={<StaticPage title="My Listings" description="Manage your current listings and posted items." />} />
                    <Route path="app/dashboard" element={<StaticPage title="Dashboard" description="Quick overview of your seller activity." />} />
                    <Route path="app/settings" element={<StaticPage title="Settings" description="Change your account preferences and settings." />} />
                </Route>
            </Route>

            <Route element={<AdminRoute />}>
                <Route element={<AdminLayout />}>
                    <Route path="admin" element={<AdminDashboard />} />
                    <Route path="admin/listings" element={<StaticPage title="All Listings" description="Review all marketplace listings." />} />
                    <Route path="admin/users" element={<StaticPage title="All Users" description="Manage users and access levels." />} />
                    <Route path="admin/categories" element={<StaticPage title="Categories" description="Manage marketplace categories." />} />
                    <Route path="admin/orders" element={<StaticPage title="Admin Orders" description="Review all orders placed across the marketplace." />} />
                    <Route path="admin/reports" element={<StaticPage title="Reports" description="Review performance and activity reports." />} />
                    <Route path="admin/settings" element={<StaticPage title="Site Settings" description="Update core application settings." />} />
                    <Route path="admin/payment-settings" element={<StaticPage title="Payment Settings" description="Configure payment and billing settings." />} />
                    <Route path="admin/notifications" element={<StaticPage title="Notification Settings" description="Manage admin notifications." />} />
                    <Route path="admin/profile" element={<StaticPage title="Admin Profile" description="View your admin profile details." />} />
                </Route>
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
