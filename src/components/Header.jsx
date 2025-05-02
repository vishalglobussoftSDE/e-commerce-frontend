import React from 'react';
import { CiSearch } from "react-icons/ci";

const Header = () => {

  return (

    <div className='h-[140px] border-b-1 border-gray-300'>
        <div className='bg-black'>
            <div className='container grid grid-cols-3 h-[48px] content-center text-white text-[14px] font'>
                <div className='col-span-2 align-text-right'><p className='float-right'>Summer sale For All Swim Suits And Free Express Delivery - OFF 50% ShopNow</p></div>
                <div ><p className='float-right'>English</p></div>
            </div>
        </div>
        <div className='h-[92px] flex justify-center items-center'>
            <div className='h-[38px] w-[1170px] flex items-center justify-between'>
                <div className=''><h2 className='float-left'>Exclusive</h2></div>
                <div className='col-span-3 flex' >
                    <ul className='list-none mx-auto text-[16px]'>
                        <a href='#'><li className='inline-block mx-4'>Home</li></a>
                        <a href='#'><li className='inline-block mx-4'>Contact</li></a>
                        <a href='#'><li className='inline-block mx-4'>About</li></a>
                        <a href='#'><li className='inline-block mx-4'>Sign Up</li></a>
                    </ul>
                </div>
                <div className='bg-gray-100 flex items-center h-[38px] p-[4px]'>
                    <input type='text' placeholder='What are you looking for?' className='text-[12px]  h-[18px]'></input>
                    <a className='w-[16px] h-[16px] m-[4px]'><CiSearch/></a>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Header;