import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '@/store/authStore.jsx'

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { user } = useAuth()

  return (
    <div className={`min-h-screen bg-slate-950 text-white ${showSidebar ? 'md:pl-72' : 'md:pl-20'}`}>
      <Sidebar isOpen={showSidebar} variant={user ? "user" : "public"} onClose={() => setShowSidebar(false)} />
      <div>
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} isLoggedIn={!!user} />
        <main className="min-h-[calc(100vh-64px)] bg-slate-950 px-4 py-6 md:px-8">
          <Outlet />
        </main>
        <footer className="bg-gray-900 dark:bg-gray-900 text-gray-200 pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} HAHU MARKET. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
