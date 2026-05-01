import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to HAHU MARKET</h1>
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
