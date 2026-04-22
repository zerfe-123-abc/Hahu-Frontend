import { createContext, useContext, useState } from "react"
import initialProducts from "../data/products"

const ProductContext = createContext()

export function ProductProvider({ children }) {
  // Initialize products (seed data)
  const [products, setProducts] = useState(
    initialProducts.map((p) => ({
      ...p,
      status: "APPROVED", // existing products are approved
    }))
  )

  // ✅ Seller adds product
  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now(),
      status: "PENDING",
    }

    setProducts((prev) => [...prev, product])
  }

  // ✅ Admin approves product
  const approveProduct = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, status: "APPROVED" }
          : product
      )
    )
  }

  // ❌ Admin rejects product
  const rejectProduct = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, status: "REJECTED" }
          : product
      )
    )
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        approveProduct,
        rejectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)