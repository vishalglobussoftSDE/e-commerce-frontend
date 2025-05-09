import React from "react";
import {
  FaUser,
  FaBoxOpen,
  FaTimesCircle,
  FaStar,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

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

        {/* Conditional Login/Logout */}
        {isLoggedIn ? (
          <li
            onClick={handleLogout}
            className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </li>
        ) : (
          <li
            onClick={handleLogin}
            className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer gap-3"
          >
            <FaSignInAlt />
            <span>Login</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
