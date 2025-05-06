import React from 'react'
import ThreeStar from '../assets/ThreeStar.png';

 const Product = () => {
  return (
    <div className='w-[270px] h-[320px] '>
     <div className='w-[270px] h-[250px] flex justify-center items-center bg-[#F5F5F5] rounded-md'>
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

export default Product;