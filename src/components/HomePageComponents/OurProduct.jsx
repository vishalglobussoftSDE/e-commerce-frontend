import React, { useEffect, useRef, useState } from 'react';
import Product from '../ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
import ProductCard1 from './ThisMonthCard1';

const OurProduct = () => {

  let sliderRef = useRef();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    rows: 2,    
    slidesToShow: 4,    
    slidesPerRow: 1
  };

  return (

    <div className='mt-20'>
      <div className='h-[40px] flex items-center'>
        <div className='bg-[#DB4444] w-[20px] h-full rounded'></div> <p className='text-red-600 text-[16px] font-[600] ml-4'>Our Products</p>
      </div>
      <div className='flex items-center mt-2'>
        <h2 className='text-[36px] font-[600] mt-3 mr-21'>Explore Our Products</h2>
        <div className='ml-auto mr-10'>
          <button className='p-5 bg-gray-100 rounded-full mr-3 cursor-pointer' onClick={previous}><FaArrowLeftLong /></button>
          <button className='p-5 bg-gray-100 rounded-full cursor-pointer' onClick={next} ><FaArrowRightLong /></button>
        </div>        
      </div>

      <div className='mt-10' >
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
          {products.map((item) => {
            return <div className='my-5'><ProductCard1 product={item} /></div>
          })}         
        
        </Slider>
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-center mt-[60px]">
        <button
          onClick={() => navigate('/allProducts')}
          className="buttons"
        >
          View All Products
        </button>
      </div>
    </div>
  )
}

export default OurProduct;