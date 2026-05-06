import { AuthProvider as StoreAuthProvider } from "@/store/authStore.jsx"

const AuthProvider = ({ children }) => {
  return <StoreAuthProvider>{children}</StoreAuthProvider>
}

export default AuthProvider
