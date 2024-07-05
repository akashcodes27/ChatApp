import React from 'react'

function SearchBar() {
    return (
        <div>
            <form action="" className='flex'>
                <input type="text" placeholder="search" className="input input-bordered rounded-full" />
                <button className='btn btn-circle bg-sky-500 text-white'>icon</button>
            </form>
        </div>
    )
}

export default SearchBar