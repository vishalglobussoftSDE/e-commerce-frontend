import React from 'react';
import { Link } from 'react-router-dom';
import dropdown from '../assets/DropDown.png';

const Sidebar = () => {
  return (
    <div className="w-56 p-4 bg-white shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Link to="/womens-fashion" className="hover:underline">Women's Fashion</Link>
          <img src={dropdown} alt="Dropdown" className="w-4 h-4" />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/mens-fashion" className="hover:underline">Men's Fashion</Link>
          <img src={dropdown} alt="Dropdown" className="w-4 h-4" />
        </div>
        <Link to="/electronics" className="hover:underline">Electronics</Link>
        <Link to="/home-lifestyle" className="hover:underline">Home & Lifestyle</Link>
        <Link to="/medicine" className="hover:underline">Medicine</Link>
        <Link to="/sports-outdoor" className="hover:underline">Sports & Outdoor</Link>
        <Link to="/babys-toys" className="hover:underline">Baby’s & Toys</Link>
        <Link to="/groceries" className="hover:underline">Groceries</Link>
        <Link to="/health-beauty" className="hover:underline">Health & Beauty</Link>
      </div>
    </div>
  );
};

export default Sidebar;
