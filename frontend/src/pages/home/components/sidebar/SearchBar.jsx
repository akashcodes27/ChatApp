import React from 'react'
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full p-2"
        />
      </div>
    )
}

export default SearchBar