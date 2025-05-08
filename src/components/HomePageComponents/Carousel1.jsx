import React from 'react'
import { Link } from 'react-router-dom';

const Carousel1 = () => {

  return (
    <div className='bg-black text-white flex w-[1200px] px-10 py-10 ml-auto mt-auto'>      
        <div className='ml-[150px] mt-[58px]'>
          <div className='flex items-center gap-5'><img src='/carouselimages/appleLogo.png'/><span>iphone 14 Series</span></div>
          <div className='w-[370px]'>
            <p className=' font-[600] text-[60px] leading-[75px] tracking-[5%]'>Up to 10% off Voucher</p>
            <Link>Shop Now</Link>
          </div>
        </div>      
      <img src='/carouselimages/iphone2.png'/>
    </div>
  )
}

export default Carousel1;