import { useCart } from "../store/cartStore"

function Cart() {
  const { cartItems, removeFromCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.cartId}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.price} ETB</p>
                </div>

                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(item.cartId)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right text-xl font-bold">
            Total: {total} ETB
          </div>
        </>
      )}
    </div>
  )
}

export default Cart