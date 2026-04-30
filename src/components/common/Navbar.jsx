import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useCart } from "../../store/cartStore"
import { useAuth } from "../../store/authStore"
import { useCategory } from "../../store/categoryStore"
import SearchBar from "./SearchBar"

const Navbar = ({ onCartClick }) => {
  const [showCategories, setShowCategories] = useState(false)

  const dropdownRef = useRef()

  const { cartItems } = useCart()
  const { user, logout } = useAuth()
  const { setSelectedCategory } = useCategory()

  const categories = ["All", "Phones", "Electronics", "Furniture", "Clothes"]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (query) => {
    console.log("Searching:", query)
  }

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          BDU Market
        </Link>

        <Link to="/seller/add-product" className="hover:text-gray-300">
          Sell
        </Link>

        <Link to="/admin" className="hover:text-gray-300">
          Admin
        </Link>

        {/* Categories */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="hover:text-gray-300"
          >
            ☰ Categories
          </button>

          {showCategories && (
            <div className="absolute mt-2 bg-white text-black rounded shadow w-48">
              {categories.map((cat) => (
                <div
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setShowCategories(false)
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search */}
        <div className="flex-1">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="relative text-xl hover:text-gray-300"
          >
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Auth */}
          {user ? (
            <>
              <span className="text-sm text-gray-300">
                {user.email}
              </span>
              <button onClick={logout} className="text-red-400">
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar