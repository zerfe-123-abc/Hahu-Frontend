import React, { useState } from "react";
import { Search } from "lucide-react";
import { useSearch } from "@/store/searchStore";
import Input from "@/components/ui/Input";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  const { setSearchQuery } = useSearch();

  const navigate = useNavigate;

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };

  return (
    <div className="hidden md:flex flex-1 max-w-lg mx-4">
      <form onSubmit={handleSearch} className="relative w-full">
        <Input
          type="text"
          placeholder="Search On Hahu..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
        >
          <Search size={16} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
