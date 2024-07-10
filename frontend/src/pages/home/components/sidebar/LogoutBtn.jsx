import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const LogoutBtn= () => {
  return (
    <div className="p-4">
      <button className="btn btn-outline btn-error flex items-center">
        <FiLogOut size={20} className="mr-2" />
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
