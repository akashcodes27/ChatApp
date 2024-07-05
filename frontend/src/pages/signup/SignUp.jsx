import React from 'react'
import GenderCheckBox from './GenderCheckBox'


function SignUp() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[600px] w-[700px] border-2 border-white bg-white bg-opacity-10" style={{ backdropFilter: 'blur(20px)' }}>
                {/* <h2>Login Page</h2> */}
                {/* <span>BondBuddy</span> */}
                <span className="font-bold text-2xl text-white bg-blue-400 px-4 py-2 rounded-lg shadow-lg">GlobeTalk</span>

                <form class="">
                    <div className="mb-4">

                        <div className='flex '>


                            <label className="block text-white text-sm font-bold mb-6 mt-7 mr-5">
                                <span className=''>First Name</span>
                            </label>
                            <input
                                className="daisyui-input p-2  border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 mr-5 mt-4 h-12"
                                type="text"
                                placeholder="Enter First Name"
                            />

                            <label className="block text-white text-sm font-bold mb-2 mt-7 mr-5">
                                <span className="">Last Name</span>
                            </label>
                            <input
                                className="daisyui-input p-2  border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 h-12 mt-4 "
                                type="text"
                                placeholder="Enter Last Name"
                            />


                        </div>


                        <label className="block text-white text-sm font-bold mb-2">
                            <span>Username</span>
                        </label>
                        <input
                            className="daisyui-input p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                            type="text"
                            placeholder="Enter Username"
                        />

                        <label className="block text-white text-sm font-bold mb-2">
                            <span>Password</span>
                        </label>
                        <input
                            className="daisyui-input p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                            type="password"
                            placeholder="Enter Password"
                        />


                        <label className="block text-white text-sm font-bold mb-2">
                            <span>Confirm Password</span>
                        </label>
                        <input
                            className="daisyui-input p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                            type="password"
                            placeholder="Confirm Password"
                        />


                        <label className="block text-white text-sm font-bold mb-2">
                            <span>Email</span>
                        </label>
                        <input
                            className="daisyui-input p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                            type="text"
                            placeholder="Enter Email"
                        />


                        <label className="block text-white text-sm font-bold mb-2">
                            <span>Phone</span>
                        </label>
                        <input
                            className="daisyui-input p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                            type="text"
                            placeholder="Enter Phone"
                        />



                        {/* Gender Check Box */}
                        <GenderCheckBox/>








                        <input type="submit" value="Login" className="btn btn-primary px-3 py-1 rounded-lg text-white text-sm bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline mt-5" />
                    </div>

                </form>

            </div>
        </>
    )
}

export default SignUp