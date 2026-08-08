import Dashboard from "@/features/dashboards/Dashboard";
import Notification from "@/components/pages/notifications/Notification";
import Order from "@/components/pages/orders/Order";
import User from "@/components/pages/users/User";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Login from "@/components/pages/Login";
import Category from "@/components/pages/categories/Category";
import Profile from "@/components/pages/Profile";
import Product from "@/components/pages/products/Product";
import NotFound from "@/components/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      {/* public rouet */}
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Login />} />

        {/* protected route */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/order" element={<Order />} />
          <Route path="/customer" element={<User />} />
          <Route path="/category" element={<Category />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
