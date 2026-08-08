import { useState } from "react";
import { useProducts } from "@/store/productStore";
import { useNavigate } from "react-router-dom";

const SellerAddProduct = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "Phones",
    description: "",
    image: "",
  });

  const { addProduct } = useProducts();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      ...form,
      price: Number(form.price),
    });

    setMessage("Product submitted successfully. Waiting for admin approval.");

    setForm({
      title: "",
      price: "",
      category: "Phones",
      description: "",
      image: "",
    });

    setTimeout(() => {
      navigate("/app/my-listings");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-3xl font-bold mb-6">Create New Listing</h2>

        {message && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-5">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">Product Title</label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Example: iPhone 15"
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Price (ETB)</label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Example: 50000"
              className="w-full border p-3 rounded-lg mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
            >
              <option>Phones</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothes</option>
              <option>Vehicles</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Description</label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              className="w-full border p-3 rounded-lg mt-1"
              rows="4"
              required
            />
          </div>

          <div>
            <label className="font-medium">Image URL</label>

            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full border p-3 rounded-lg mt-1"
              required
            />

            {form.image && (
              <img
                src={form.image}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg mt-4"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerAddProduct;
