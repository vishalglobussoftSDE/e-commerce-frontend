import React from "react";
import { FaUser, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import {Link} from "react-router-dom"
const Dropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-60 bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-lg shadow-lg z-30 overflow-hidden">
      <ul className="py-2">
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaUser />
          <Link to="/account">Manage My Account</Link>
        </li>
        <li className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3">
          <FaBoxOpen />
          <Link to="/cart">My Order</Link>
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
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
