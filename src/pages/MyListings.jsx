import { useProducts } from "@/store/productStore";
import { Link } from "react-router-dom";

const MyListings = () => {
  const { products } = useProducts();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Listings</h1>

        <Link
          to="/app/create-listing"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Create Listing
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">You have no listings yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={product.images}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">{product.title}</h2>

                <p className="text-blue-600 font-bold mt-2">
                  {product.price} ETB
                </p>

                <p className="text-gray-500 text-sm mt-1">{product.category}</p>

                <div className="mt-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${
                        product.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : product.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyListings;
