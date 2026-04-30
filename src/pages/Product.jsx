import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../store/cartStore"
import { Link } from "react-router-dom"

const Product = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  // Find product by id
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div className="p-6">Product not found</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-6">

      <div className="grid md:grid-cols-2 gap-8">

        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-blue-600 text-2xl font-bold mb-4">
            {product.price} ETB
          </p>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-amber-500 text-white px-5 py-2 rounded-md hover:bg-amber-600 transition"
          >
            Add to Cart
          </button>
          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">
              Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

              {products
                .filter(
                  (p) =>
                    p.category === product.category &&
                    p.id !== product.id
                )
                .map((item) => (
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />

                    <div className="p-3">
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-blue-600 font-bold">
                        {item.price} ETB
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Product