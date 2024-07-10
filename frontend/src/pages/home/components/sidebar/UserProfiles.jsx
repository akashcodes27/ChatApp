import React from 'react'

function UserProfiles() {

    const users = [
        { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
        // Add more users as needed
      ];
  return (
    
    <div className="flex-1 overflow-y-auto p-4">
      {users.map(user => (
        <div key={user.id} className="flex items-center mb-4 cursor-pointer">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <span className="text-white">{user.name}</span>
        </div>
      ))}
    </div>
  )
}

export default UserProfiles