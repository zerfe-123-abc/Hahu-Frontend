import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const index = prev.findIndex(item => item.id === id)
      if (index === -1) return prev

      const newCart = [...prev]
      newCart.splice(index, 1)
      return newCart
    })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)