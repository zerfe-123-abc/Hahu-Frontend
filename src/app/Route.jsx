import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./guards/ProtectedRoute";
//import AdminRoute from "./guards/AdminRoute";
import GuestRoute from "./guards/GuestRoute";

import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import NotFound from "@/pages/NotFound";

import { PublicRoute } from "./routes/PublicRoute";
import { AppRoute } from "./routes/AppRoute";
import { AdminRoute } from "./routes/AdminRouteConfig";

const AppRouter = () => {
    return (
        <Routes>

            {/* PUBLIC */}
            <Route path="/" element={<PublicLayout />}>
                {PublicRoute.map((route, i) => (
                    <Route key={i} {...route} />
                ))}

                <Route element={<GuestRoute />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>

            {/* USER */}
            <Route element={<ProtectedRoute />}>
                <Route path="/app" element={<AppLayout />}>
                    {AppRoute.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Route>
            </Route>

            {/* ADMIN */}
            <Route element={<AdminRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                    {AdminRoute.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Route>
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default AppRouter;