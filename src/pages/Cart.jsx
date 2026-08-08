import { useCart } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SIDE - CART ITEMS */}
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id || item.cartId}
              className="flex gap-4 border border-slate-400 p-4 rounded-2xl bg-white hover:scale-x-95 hover:translate-1.5 transition-all duration-500 ease-in-out"
            >
              {/* IMAGE (optional fallback) */}
              <img
                src={item.image || "https://via.placeholder.com/120"}
                alt={item.title}
                className="w-28 h-28 object-cover rounded"
              />

              {/* DETAILS */}
              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.title}</h2>

                <p className="text-gray-600">
                  {item.price} ETB × {item.quantity || 1}
                </p>

                {/* Quantity display (future buttons later) */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity || 1}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  className="text-red-500 mt-3 text-sm hover:underline"
                  onClick={() => removeFromCart(item.id || item.cartId)}
                >
                  Remove
                </button>
              </div>

              {/* PRICE */}
              <div className="font-bold text-lg">
                {item.price * (item.quantity || 1)} ETB
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      {cartItems.length > 0 && (
        <div className="h-fit sticky top-20 border border-slate-400 rounded-2xl p-4 bg-white shadow-lg hover:scale-x-95 transition-all duration-500 ease-in-out hover:translate-2">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between font-bold text-lg border-t border-slate-300 pt-2">
            <span>Total</span>
            <span>{total} ETB</span>
          </div>

          <button
            onClick={() => navigate("/app/checkout")}
            className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
