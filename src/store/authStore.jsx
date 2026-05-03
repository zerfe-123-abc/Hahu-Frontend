import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email) => {
    const normalizedEmail = email?.trim().toLowerCase()
    const role = normalizedEmail === "admin@hahumarket.com" || normalizedEmail?.includes("admin") ? "admin" : "user"
    const name = normalizedEmail?.split("@")[0] || "Guest"

    setUser({ email: normalizedEmail, role, name })
  }

  const register = (payload) => {
    const normalizedEmail = payload.email?.trim().toLowerCase()
    const role = normalizedEmail === "admin@hahumarket.com" || normalizedEmail?.includes("admin") ? "admin" : "user"
    const name = `${payload.firstName || "User"} ${payload.lastName || ""}`.trim() || "Guest"

    setUser({ email: normalizedEmail, role, name })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)