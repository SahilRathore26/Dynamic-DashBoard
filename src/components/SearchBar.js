import { useDispatch } from "react-redux";
import { setSearchQuery } from "../utils/dashboardSlice";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSearch = () => {
    dispatch(setSearchQuery(input));
  };

  return (
    <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
      <input
        type="text"
        placeholder="Search widgets..."
        value={input}
        onChange={e => setInput(e.target.value)}
        className="w-full px-3 py-2 outline-none text-black"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
