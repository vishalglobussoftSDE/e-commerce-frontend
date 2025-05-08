import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-55 font-[500] flex text min-h-[450px] bg-white pt-12 border-r border-gray-200">
      <div className="flex mt-auto  flex-col gap-5">
        <div className="flex justify-between items-center">
          <Link to="/womens-fashion" className="hover:underline">Women's Fashion</Link>
          <button className='ml-9 w-4 h-4'><FaChevronRight/></button>
      
        </div>
        <div className="flex justify-between items-center">
          <Link to="/mens-fashion" className="hover:underline">Men's Fashion</Link>
          <button className='ml-9 w-4 h-4'><FaChevronRight/></button>
          
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
