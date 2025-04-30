import React from 'react'
import { Link } from 'react-router-dom';
import dropdown from '../assets/DropDown.png'
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-main" style={{ width: '217px', height: '244px', position: 'absolute', top: '182px', left: '135px' }}>
        <div className="wrapper flex flex-col " style={{ gap: '16px' }}>
          <div className='flex justify-between'>
            <Link to="/womens-fashion" className=" hover:underline">Women's Fashion </Link>
            <img src={dropdown} alt="" />
          </div>
          <div className='flex justify-between'>
            <Link to="/mens-fashion" className=" hover:underline">Men's Fashion</Link>
            <img src={dropdown} alt="" />
          </div>
          <Link to="/electronics" className=" hover:underline">Electronics</Link>
          <Link to="/home-lifestyle" className=" hover:underline">Home & Lifestyle</Link>
          <Link to="/medicine" className=" hover:underline">Medicine</Link>
          <Link to="/sports-outdoor" className=" hover:underline">Sports & Outdoor</Link>
          <Link to="/babys-toys" className=" hover:underline">Baby’s & Toys</Link>
          <Link to="/groceries" className=" hover:underline">Groceries</Link>
          <Link to="/health-beauty" className=" hover:underline">Health & Beauty</Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar