import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
