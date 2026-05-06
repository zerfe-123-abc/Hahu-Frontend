import { useCart } from "../../store/cartStore"

function CartSidebar() {
  const { cartItems, addToCart, removeFromCart } = useCart()

  // Group items by ID
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find(i => i.id === item.id)

    if (existing) {
      existing.quantity += 1
    } else {
      acc.push({ ...item, quantity: 1 })
    }

    return acc
  }, [])

  return (
    <div className="h-full w-80 bg-gray-900 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {groupedItems.length === 0 ? (
        <p className="text-gray-300">Cart is empty</p>
      ) : (
        groupedItems.map((item) => (
          <div key={item.id} className="border-b border-gray-700 py-4">

            {/* Item Info */}
            <p className="font-semibold text-white">{item.title}</p>
            <p className="text-blue-300">{item.price} ETB</p>

            {/* Controls */}
            <div className="flex items-center justify-between mt-3 border border-gray-700 rounded-full px-3 py-1 w-40">

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                🗑
              </button>

              {/* Quantity */}
              <span className="font-bold">{item.quantity}</span>

              {/* Add */}
              <button
                onClick={() => addToCart(item)}
                className="text-green-600 text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default CartSidebar