import { createContext, useContext } from "react"

const AuthContext = createContext(null)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContext.Provider")
  }
  return context
}

export default AuthContext
