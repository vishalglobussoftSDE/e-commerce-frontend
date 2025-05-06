import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconsArrowLeft from '../../assets/iconsArrowLeft.png';
import iconsArrowRight from '../../assets/iconsArrowRight.png';
import ProductCard from '../ProductCard';

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const productsPerPage = 8;
  const cardWidth = 270 + 30; // Card width + gap
  const totalSlides = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/product/all')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleNext = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  const translateX = -slideIndex * (productsPerPage * cardWidth);

  return (
    <div className="ourProduct-container flex flex-col gap-[60px]">
      {/* Header Section */}
      <div className="uppperSection">
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[20px] items-center">
            <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
            <div className="text-[#DB4444]">Our Products</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold">Explore Our Products</div>
            <div className="flex gap-[10px]">
              <button onClick={handlePrev} className="rounded-full bg-gray-200 p-2">
                <img src={iconsArrowLeft} alt="slide-left-btn" />
              </button>
              <button onClick={handleNext} className="rounded-full bg-gray-200 p-2">
                <img src={iconsArrowRight} alt="slide-right-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="overflow-x-hidden w-full">
        <div
          className="flex gap-[30px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-[60px]">
        <button
          onClick={() => navigate('/products')}
          className="bg-[#DB4444] text-white rounded-[5px] py-[16px] px-[48px]"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProduct;
