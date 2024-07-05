import React from 'react'

function UserProfiles() {
  return (
    <>
    <div className='flex items-center hover:bg-sky-500 rounded p-2 cursor-pointer '>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="" alt="" />
            </div>

        </div>

        <div className='flex'>
            <p className='ml-3'>Steve Jobs</p>
            <span>🐕‍🦺</span>
        </div>

        
    </div>

    <div className="divider my-0 py-0 h-2"/>
    </>
  )
}

export default UserProfiles