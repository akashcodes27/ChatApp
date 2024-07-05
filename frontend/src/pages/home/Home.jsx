import React from 'react'
import SideBar from './components/sidebar/SideBar'

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-[650px] w-[500px] border-2 border-white bg-white bg-opacity-10" style={{ backdropFilter: 'blur(20px)' }}>
            {/* <h2>Login Page</h2>
            
            <span className="font-bold text-2xl text-white bg-blue-300 px-4 py-2 rounded-lg shadow-lg">GlobeTalk</span> */}
            <SideBar/>


        </div>
    )
}

export default Home