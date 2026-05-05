import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()
const AUTH_STORAGE_KEY = "hahu_auth_user"

const getStoredUser = () => {
  if (typeof window === "undefined") return null
  try {
    const storedValue = window.localStorage.getItem(AUTH_STORAGE_KEY)
    return storedValue ? JSON.parse(storedValue) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser)
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
    } else {
      window.localStorage.removeItem(AUTH_STORAGE_KEY)
    }
  }, [user])

  const normalizeEmail = (value) => value?.trim().toLowerCase() || ""

  const getRoleFromEmail = (email) => {
    return email === "admin@hahumarket.com" || email?.includes("admin") ? "admin" : "user"
  }

  const login = async ({ email, password, rememberMe }) => {
    setIsLoading(true)
    setAuthError(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail || !password) {
      setAuthError("Please enter both email and password.")
      setIsLoading(false)
      return null
    }

    const authenticatedUser = {
      email: normalizedEmail,
      name: normalizedEmail.split("@")[0] || "Guest",
      role: getRoleFromEmail(normalizedEmail),
      rememberMe: Boolean(rememberMe),
      authenticatedAt: new Date().toISOString(),
    }

    setUser(authenticatedUser)
    setIsLoading(false)
    return authenticatedUser
  }

  const register = async ({ firstName, lastName, email, phone, location, nationalId, password }) => {
    setIsLoading(true)
    setAuthError(null)

    const normalizedEmail = normalizeEmail(email)
    if (!normalizedEmail || !password || !firstName || !lastName) {
      setAuthError("Please fill in all required fields to complete registration.")
      setIsLoading(false)
      return null
    }

    const registeredUser = {
      email: normalizedEmail,
      name: `${firstName.trim()} ${lastName.trim()}`.trim(),
      phone: phone || "",
      location: location || "",
      nationalIdName: nationalId?.name || "",
      role: getRoleFromEmail(normalizedEmail),
      registeredAt: new Date().toISOString(),
    }

    setUser(registeredUser)
    setIsLoading(false)
    return registeredUser
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, authError, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
