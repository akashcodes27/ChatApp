import React from 'react'
import SearchBar from './SearchBar'
import UserProfiles from './UserProfiles'
import LogoutBtn from './LogoutBtn'

function SideBar() {
  return (
    <div>

        <SearchBar/>
        <div className='divider px-3'/>
        <UserProfiles/>
        <LogoutBtn/>

    </div>
  )
}

export default SideBar


// SideBar component is the parent component of all other components