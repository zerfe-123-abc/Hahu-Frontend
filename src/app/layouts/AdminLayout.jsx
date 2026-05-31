import { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar isOpen={showSidebar} variant="admin" onClose={() => setShowSidebar(false)} />

      <div className={`min-h-screen transition-all ${showSidebar ? 'md:pl-72' : 'md:pl-20'}`}>
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        <main className="min-h-[calc(100vh-64px)] px-4 py-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
