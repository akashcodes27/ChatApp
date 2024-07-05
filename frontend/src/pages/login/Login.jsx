import React from 'react'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-[450px] w-[500px] border-2 border-white bg-white bg-opacity-10" style={{ backdropFilter: 'blur(20px)' }}>
            {/* <h2>Login Page</h2> */}
            {/* <span>BondBuddy</span> */}
            <span className="font-bold text-2xl text-white bg-blue-300 px-4 py-2 rounded-lg shadow-lg">GlobeTalk</span>


            <form class="">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2 mt-7">
                        <span>Username</span>
                    </label>
                    <input
                        className="daisyui-input p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                        type="text"
                        placeholder="Enter Username"
                    />

                    <label className="block text-white text-sm font-bold mb-2">
                        <span>Password</span>
                    </label>
                    <input
                        className="daisyui-input p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                        type="text"
                        placeholder="Enter Username"
                    />

                    <input type="submit" value="Login" className="btn btn-primary px-3 py-1 rounded-lg text-white text-sm bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline"/>
                </div>

            </form>

            <p className="text-white text-sm">
                Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up here</a>.
            </p>



        </div>

    )
}

export default Login 