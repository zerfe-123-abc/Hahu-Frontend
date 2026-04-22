import { createContext, useContext, useState } from "react"

const CategoryContext = createContext()

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => useContext(CategoryContext)