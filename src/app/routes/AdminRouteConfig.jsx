import AdminDashboard from "@/pages/AdminDashboard";
import StaticPage from "@/pages/StaticPage";

export const AdminRoute = [
    { index: true, element: <AdminDashboard /> },
    { path: "users", element: <StaticPage title="Users" description="Manage users" /> },
    { path: "orders", element: <StaticPage title="Orders" description="Manage orders" /> },
];