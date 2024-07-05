import React from 'react'
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <div>
            <form action="" className='flex'>
                <input type="text" placeholder="search" className="input input-bordered rounded-full" />
                <button className='btn btn-circle bg-sky-500 text-white'><FaSearch/></button>
            </form>
        </div>
    )
}

export default SearchBar