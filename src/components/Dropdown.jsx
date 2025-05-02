import React from "react";
import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";

const Dropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-60 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-lg z-30 overflow-hidden">
      <ul className="py-2">
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaUser />
          <span>Manage My Account</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaBoxOpen />
          <span>My Order</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaTimesCircle />
          <span>My Cancellations</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaStar />
          <span>My Reviews</span>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaSignOutAlt />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
