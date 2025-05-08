import React, { useState, useRef, useEffect } from 'react';
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';

const Header1 = ({products = []}) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleInput = (e) => {
        const value = e.target.value.toLowerCase();
        const matches = products.filter((p) =>
          p.name.toLowerCase().includes(value)
        );
        console.log("Matching products:", matches); 
      };

    return (
        <div className='sticky top-0 z-50 bg-white shadow h-[140px] border-b border-gray-300'>
            <div className='bg-black'>
                <div className='container grid grid-cols-3 h-[48px] content-center text-white text-[14px]'>
                    <div className='col-span-2 text-right'>
                        <p>
                            Summer sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;
                            <a href='#' className='underline'>ShopNow</a>
                        </p>
                    </div>
                    <select className='ml-auto pr-[4px] outline-none cursor-pointer bg-black text-white'>
                        <option value="english">English</option>
                    </select>
                </div>
            </div>

            <div className='container'>
                <div className='h-[38px] mt-[30px] flex items-center justify-between'>
                    <h1 className='font-bold text-2xl tracking-wide'>Exclusive</h1>

                    <ul className='flex gap-6 text-[16px]'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/about'><li>About</li></Link>
                        <Link to='/signup'><li>Sign Up</li></Link>
                    </ul>

                    <div className='flex items-center gap-4'>
                        <div className='bg-gray-100 flex items-center h-[38px] px-4'>
                            <input onChange={handleInput} name='search' type='text' placeholder='What are you looking for?' className='text-[12px] px-2 h-[18px] bg-gray-100 outline-none' />
                            <CiSearch className='text-xl cursor-pointer' />
                        </div>
                        <CiHeart className='text-xl cursor-pointer' />
                        <Link to="/cart"><BsCart3 className='text-xl cursor-pointer' /></Link>

                        {/* User Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <FaUserCircle
                                className="text-red-500 text-2xl cursor-pointer"
                                onClick={() => setOpen(!open)}
                            />
                            {open && <Dropdown />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header1;
