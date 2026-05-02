import { useState } from 'react'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '@/store/authStore.jsx'

const PublicLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { user } = useAuth()

  return (
    <div className={`min-h-screen bg-default text-black ${showSidebar ? 'md:pl-72' : 'md:pl-20'}`}>
      <Sidebar
        isOpen={showSidebar}
        variant={user ? 'user' : 'public'}
        onClose={() => setShowSidebar(false)}
      />
      <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} isLoggedIn={!!user} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to HAHU MARKET</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
