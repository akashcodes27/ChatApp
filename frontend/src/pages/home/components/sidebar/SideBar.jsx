// import React from 'react'
// import SearchBar from './SearchBar'
// import UserProfiles from './UserProfiles'
// import LogoutBtn from './LogoutBtn'

// function SideBar() {
//   return (
//     <>
    
//     <div className='border'>

//         <SearchBar/>
//         <div className='divider px-3 my-0 py-0 h-0 mt-5'/>
//         <UserProfiles/>
//         <UserProfiles/>
//         <UserProfiles/>
//         <UserProfiles/>
//         <UserProfiles/>
//         <UserProfiles/>
//         <LogoutBtn/>

//     </div>
//     </>
//   )
// }

// export default SideBar


// SideBar component is the parent component of all other components


import React from 'react';
import SearchBar from './SearchBar';
import UserProfiles from './UserProfiles';
import LogoutBtn from './LogoutBtn';

const SideBar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <SearchBar />
      <UserProfiles/>
      <LogoutBtn />
    </div>
  );
};

export default SideBar;