import { useState } from "react"
import { useSearch } from "../../store/searchStore"

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  const { searchQuery, setSearchQuery } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 py-2 border rounded"
      />

      <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700">
        🔍
      </button>
    </form>
  )
}

export default SearchBar