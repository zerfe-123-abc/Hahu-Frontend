import { useCart } from "@/store/cartStore";
import { useOrders } from "@/store/orderStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();

  const { createOrder } = useOrders();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields");
      return;
    }

    createOrder({
      customer: form,

      items: cartItems,

      total: total,
    });

    clearCart();

    alert("Order placed successfully!");

    navigate("/app/orders");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SIDE FORM */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-xl font-bold mb-6">Shipping Details</h2>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Full Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="
                w-full
                h-12
                rounded-xl
                border
                border-slate-300
                px-4
              "
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="09...."
              className="
                w-full
                h-12
                rounded-xl
                border
                border-slate-300
                px-4
              "
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Address</label>

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              className="
                w-full
                h-28
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
              "
            />
          </div>

          <Button onClick={placeOrder} variant="primary" size="lg">
            Place Order
          </Button>
        </div>

        {/* RIGHT SIDE SUMMARY */}

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-3">
              <span>
                {item.title} × {item.quantity || 1}
              </span>

              <span>{item.price * (item.quantity || 1)} ETB</span>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="text-lg font-bold">Total: {total} ETB</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
