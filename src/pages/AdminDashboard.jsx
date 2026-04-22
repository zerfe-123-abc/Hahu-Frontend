import { useProducts } from "../store/productStore"

function AdminDashboard() {
  const { products, approveProduct, rejectProduct } = useProducts()

  const pendingProducts = products.filter(
    (p) => p.status === "PENDING"
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Admin Dashboard - Pending Products
      </h2>

      {pendingProducts.length === 0 ? (
        <p>No pending products</p>
      ) : (
        <div className="space-y-4">
          {pendingProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow"
            >
              <h3 className="font-semibold text-lg">
                {product.title}
              </h3>

              <p>{product.description}</p>
              <p className="text-blue-600 font-bold">
                {product.price} ETB
              </p>

              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => approveProduct(product.id)}
                  className="bg-green-600 text-white px-4 py-1 rounded"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectProduct(product.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard