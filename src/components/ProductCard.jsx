import React from 'react'
import product1 from '../assets/productImg/product1.png';
import ThreeStar from '../assets/ThreeStar.png';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
 const Product = () => {

  const[liked, setLiked] = useState(false)

  return (
    <div className='w-[270px] h-[320px] '>
     <div className='w-[270px] h-[250px] flex justify-center items-center bg-[#F5F5F5] relative rounded-md'>
     <div className="absolute top-5 right-3 cursor-pointer" onClick={() => setLiked(!liked)}>
    {liked ? (
      <FaHeart className="text-red-500 text-xl" />
    ) : (
      <FaRegHeart className="text-gray-950 text-xl" />
    )}
  </div>
     <img src={product1} alt="" />
     </div>
      <div >
        <p className='text-xl py-4'>Breed Dry Dog Food</p>
        <div className='flex gap-3.5'>
          <p className='text-red-700'>$100</p>
          <div className='flex'>
            <img className='w-[100px] h-[20px]' src={ThreeStar} alt="" />
            </div>
          <p className='color'>(35)</p>
        </div>
      </div>
    </div>
  )
}

export default Product