import { Link } from "react-router-dom"

function ListingCard({ listing }) {
  return (
    <Link to={`/product/${listing.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
        
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {listing.title}
          </h2>

          <p className="text-blue-600 font-bold mt-2">
            {listing.price} ETB
          </p>

          <p className="text-gray-500 text-sm mt-1">
            📍 {listing.location}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ListingCard