import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-700 dark:border-gray-700">

          {/* About - Second Hand Store */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">HAHU MARKET</h3>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted second-hand marketplace. Buy and sell quality pre-owned items safely and easily.
              Find great deals on electronics, vehicles, furniture, and more!
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-lg">
              <a href="#" className="hover:text-red-500 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/browse" className="hover:text-red-500 transition-colors">Browse All</Link></li>
              <li><Link to="/create-listing" className="hover:text-red-500 transition-colors">Sell an Item</Link></li>
              <li><Link to="/my-listings" className="hover:text-red-500 transition-colors">My Listings</Link></li>
              <li><Link to="/orders" className="hover:text-red-500 transition-colors">Order History</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/category/electronics" className="hover:text-red-500 transition-colors">📱 Electronics</Link></li>
              <li><Link to="/category/vehicles" className="hover:text-red-500 transition-colors">🚗 Vehicles</Link></li>
              <li><Link to="/category/furniture" className="hover:text-red-500 transition-colors">🛋️ Furniture</Link></li>
              <li><Link to="/category/clothing" className="hover:text-red-500 transition-colors">👕 Clothing</Link></li>
              <li><Link to="/category/books" className="hover:text-red-500 transition-colors">📚 Books</Link></li>
              <li><Link to="/category/sports" className="hover:text-red-500 transition-colors">⚽ Sports</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-500" />
                <span>+251 927 520 386</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                <span>info@hahumarket.com</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">Subscribe</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HAHU MARKET. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-red-500 transition-colors">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}