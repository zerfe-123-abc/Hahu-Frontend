import { useState } from 'react'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/store/authStore.jsx'

const PublicLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const showHero = location.pathname === '/' || location.pathname === '/browse'

  return (
    <div className={`min-h-screen bg-default text-black`}>
      <Sidebar
        isOpen={showSidebar}
        variant={user ? 'user' : 'public'}
        onClose={() => setShowSidebar(false)}
      />
      <div className={`min-h-screen transition-all ${showSidebar ? 'md:pl-72' : 'md:pl-20'}`}>
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        {showHero && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to HAHU MARKET</h1>
            <p className="max-w-2xl text-gray-600">Browse trusted second-hand items, post listings, and manage orders with a responsive market experience.</p>
          </div>
        )}

        <main className="px-4 pb-8 md:px-8">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout
