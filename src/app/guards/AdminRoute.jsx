import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/store/authStore.jsx'

const AdminRoute = () => {
  const { user } = useAuth()

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default AdminRoute
