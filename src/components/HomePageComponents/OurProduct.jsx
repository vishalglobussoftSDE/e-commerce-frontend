import React from 'react';
import iconsArrowLeft from '../../assets/iconsArrowLeft.png';
import iconsArrowRight from '../../assets/iconsArrowRight.png';
import ProductCard from '../ProductCard';

const OurProduct = () => {
  return (
    <div className="ourProduct-container flex flex-col gap-[60px]">
      <div className="uppperSection">
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
            <div className="text-[#DB4444]">Our Products</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">Explore Our Products</div>
            <div className="flex gap-[10px]">
              <button className="rounded-full bg-gray-200 p-2">
                <img src={iconsArrowLeft} alt="slide-left-btn" />
              </button>
              <button className="rounded-full bg-gray-200 p-2">
                <img src={iconsArrowRight} alt="slide-right-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerSection flex gap-[30px] flex-wrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <button className="bg-[#DB4444] text-white rounded-[5px] py-[16px] px-[48px]">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
