import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} BDU Marketplace. All rights reserved.
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer