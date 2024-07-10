import React from 'react'
import SideBar from './components/sidebar/SideBar'
import MessageContainer from './components/chatsection/MessageContainer'

function Home() {
    return (
        // < className="flex items-center justify-center h-[650px] w-[500px] border-2 border-white bg-white bg-opacity-10" style={{ backdropFilter: 'blur(20px)' }}>

        //     <SideBar/>
        //     <MessageContainer/>
        <div className="min-h-screen flex bg-gray-200">
            <SideBar />
            <MessageContainer />
        </div>



    
    )
}

export default Home