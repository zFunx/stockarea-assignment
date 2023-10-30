import { useState } from "react";

const NavigationBar = ({ logoSrc, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 flex-wrap gap-4">
          <img src={logoSrc} alt="Logo" className="h-10" />
          <div className="flex border-2 rounded w-full sm:w-auto">
            <input
              type="text"
              className="px-4 py-2 sm:w-80 flex-1 sm:flex-initial"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="flex items-center justify-center px-4 border-l"
              onClick={clearSearch}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;