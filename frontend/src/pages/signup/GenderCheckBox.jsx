function GenderCheckBox() {
    return (
        <div className="flex">
            <div className="form-control mr-5">
                <label className="block text-white text-sm font-bold mb-2">
                    <span>Male</span>
                </label>
                <input
                    className="daisyui-input p-2 h-5 w-5 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 "
                    type="checkbox"
                />

            </div>

            <div className="form-control">
                <label className="block text-white text-sm font-bold mb-2">
                    <span>Female</span>
                </label>
                <input
                    className="daisyui-input p-2 h-5 w-5 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500  "
                    type="checkbox"
                />

            </div>

            


        </div>
    )
}

export default GenderCheckBox