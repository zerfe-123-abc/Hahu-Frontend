import { useState } from "react"
import { useProducts } from "@/store/productStore"

const SellerAddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "Phones",
    description: "",
    image: "",
  })
  const { addProduct } = useProducts()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addProduct(form)

    alert("Product submitted for approval")

    setForm({
      title: "",
      price: "",
      category: "Phones",
      description: "",
      image: "",
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Phones</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Clothes</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit Product
        </button>

      </form>
    </div>
  )
}

export default SellerAddProduct