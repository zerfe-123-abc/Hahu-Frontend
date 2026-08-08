import useAuthStore from "@/stores/AuthStore";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const admin = useAuthStore((state) => state.admin);
  if (!admin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
