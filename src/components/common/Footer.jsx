import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-2">HAHU MARKET</h3>
            <p className="text-black-400 text-sm mb-3 leading-relaxed">
              Buy & sell second-hand items easily. Find great deals on electronics,
              vehicles, furniture and more.
            </p>
            <div className="flex gap-3 text-black text-base">
              <a href="#" className="hover:text-red-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-500"><FaTwitter /></a>
              <a href="#" className="hover:text-red-500"><FaInstagram /></a>
              <a href="#" className="hover:text-red-500"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-black mb-2 hover:text-gray-700">Links</h4>
            <ul className="space-y-1 text-black text-sm">
              <li className="hover:text-red-700"><Link to="/">Home</Link></li>
              <li className="hover:text-red-700"><Link to="/browse">Browse</Link></li>
              <li className="hover:text-red-700"><Link to="/create-listing">Sell</Link></li>
              <li className="hover:text-red-700"><Link to="/orders">Orders</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-md font-semibold text-black mb-2 hover:text-gray-700">Categories</h4>
            <ul className="space-y-1 text-black text-sm">
              <li className="hover:text-red-700"><Link to="/category/electronics">Electronics</Link></li>
              <li className="hover:text-red-700"><Link to="/category/vehicles">Vehicles</Link></li>
              <li className="hover:text-red-700"><Link to="/category/furniture">Furniture</Link></li>
              <li className="hover:text-red-700"><Link to="/category/clothing">Clothing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold text-black mb-2 hover:text-gray-700">Contact</h4>
            <ul className="space-y-2 text-black text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Bahirdar, Ethiopia
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-500" />
                +251 927 520 386
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-red-500" />
                info@hahumarket.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-black gap-3">
          <span>© {new Date().getFullYear()} HAHU MARKET</span>
          <div className="flex gap-3">
            <Link className="hover:text-red-400" to="/privacy">Privacy</Link>
            <Link className="hover:text-red-400" to="/terms">Terms</Link>
            <Link className="hover:text-red-400" to="/faq">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}