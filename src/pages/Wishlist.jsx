import { useWishlist } from "@/store/wishlistStore";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">{product.title}</h2>

                <p className="text-blue-600 font-bold mt-2">
                  {product.price} ETB
                </p>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="mt-4 text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
