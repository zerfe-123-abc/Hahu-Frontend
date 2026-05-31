import Login from "./pages/Login"
import Register from "./pages/Register"

const authRoutes = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]

export default authRoutes
export { authRoutes }
