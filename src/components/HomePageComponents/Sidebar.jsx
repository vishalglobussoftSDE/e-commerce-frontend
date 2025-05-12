import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50); // Short delay ensures class applies smoothly
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        w-60 font-medium text min-h-[450px] bg-white pt-12 border-r border-gray-200
        transform transition-transform duration-500 ease-in-out
        ${visible ? 'translate-x-0' : '-translate-x-full'}
        overflow-hidden
      `}
    >
      <div className="flex flex-col gap-5 px-4">
        <div className="flex justify-between items-center">
          <Link to="/womens-fashion" className="hover:underline cursor-pointer">Women's Fashion</Link>
          <FaChevronRight className="ml-2 w-4 h-4" />
        </div>
        <div className="flex justify-between items-center">
          <Link to="/mens-fashion" className="hover:underline cursor-pointer">Men's Fashion</Link>
          <FaChevronRight className="ml-2 w-4 h-4" />
        </div>
        <Link to="/electronics" className="hover:underline cursor-pointer">Electronics</Link>
        <Link to="/home-lifestyle" className="hover:underline cursor-pointer">Home & Lifestyle</Link>
        <Link to="/medicine" className="hover:underline cursor-pointer">Medicine</Link>
        <Link to="/sports-outdoor" className="hover:underline cursor-pointer">Sports & Outdoor</Link>
        <Link to="/babys-toys" className="hover:underline cursor-pointer">Baby’s & Toys</Link>
        <Link to="/groceries" className="hover:underline cursor-pointer">Groceries</Link>
        <Link to="/health-beauty" className="hover:underline cursor-pointer">Health & Beauty</Link>
      </div>
    </div>
  );
};

export default Sidebar;
