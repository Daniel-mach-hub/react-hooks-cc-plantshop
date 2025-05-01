import React from "react";

function Search({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
}

export default Search;
