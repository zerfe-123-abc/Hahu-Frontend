import { useProducts } from "@/store/productStore";
import { Link, useSearchParams } from "react-router-dom";

const BrowseListing = () => {
  const { products } = useProducts();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const filteredProducts = products.filter((product) => {
    const isApproved = product.status === "APPROVED";

    const matchesCategory = !category || product.category === category;

    return isApproved && matchesCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {category ? `${category} Listings` : "All Listings"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.title}</h2>

              <p className="text-blue-600 font-bold">{product.price} ETB</p>

              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default BrowseListing;
