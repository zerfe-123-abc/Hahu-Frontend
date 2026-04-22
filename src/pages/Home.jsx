import { useCategory } from "../store/categoryStore"
import { useProducts } from "../store/productStore"
import { Link } from "react-router-dom"
import { useSearch } from "../store/searchStore"

function Home() {
  const { selectedCategory } = useCategory()
  const { searchQuery } = useSearch()
  const { products } = useProducts()

  const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "All" || product.category === selectedCategory

  const matchesSearch =
    product.title.toLowerCase().includes(searchQuery.toLowerCase())

  const isApproved = product.status === "APPROVED"

  return matchesCategory && matchesSearch && isApproved
})

  return (
    <div className="p-6 max-w-7xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">
        {selectedCategory} Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {product.title}
              </h3>

              <p className="text-blue-600 font-bold">
                {product.price} ETB
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {product.description}
              </p>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}

export default Home