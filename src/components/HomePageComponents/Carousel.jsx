import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Carousel = (item) => {

  return (
    <div className='bg-black text-white flex w-[1200px] px-10 py-10 ml-auto mt-auto'>      
        <div className='ml-[100px] mt-[58px]'>
          <div className='flex items-center gap-5'><img className='h-15' src={item.logoLink}/><span>{item.title}</span></div>
          <div className='w-[400px]'>
            <p className=' font-[600] text-[60px] leading-[75px] tracking-[5%]'>{item.subTitle}</p>
            <div className='w-[120px]'><Link className='flex justify-center items-center gap-3 underline'>Shop Now <FaArrowRightLong/></Link></div>
          </div>
        </div>      
      <img src={item.imageLink}/>
    </div>
  )
}

export default Carousel;