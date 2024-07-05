import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

function LogoutBtn() {
  return (
    <>
        <div className='mt-auto '> 
            <RiLogoutBoxLine className="w-6 h-6 cursor-pointer "/>
        </div>
    </>
  )
}

export default LogoutBtn



// mt-auto ensures that the logout logo will be located at the bottom 