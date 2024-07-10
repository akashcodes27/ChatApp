import React from 'react'
import { FiSend } from 'react-icons/fi';

function ChatInput() {
  return (
    <div className="flex items-center p-4 bg-white border-t border-gray-300">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none"
      />
      <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">
        <FiSend size={20} />
      </button>
    </div>
  )
}

export default ChatInput