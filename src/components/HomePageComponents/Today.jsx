import React, { useEffect, useRef, useState } from 'react';
import Product from '../ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Timer from './Timer';

const Today = () => {

  let sliderRef = useRef();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/product/all')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err));
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
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (

    <div className='mt-20 pb-15 border-b-1 border-gray-300'>
      <div className='h-[40px] flex items-center'>
        <div className='bg-[#DB4444] w-[20px] h-full rounded'></div> <p className='text-red-600 text-[16px] font-[600] ml-4'>Today's</p>
      </div>
      <div className='flex items-center mt-2'>
        <h2 className='text-[36px] font-[600] mt-3 mr-21'>Flash Sales</h2>
        <Timer day="10" month="05" year="2025" hours="12" minutes="20" />
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
            return <Product product={item} />
          })}
        </Slider>
      </div>

      <div className='flex w-full justify-center mt-15'>
        <button className='buttons'>View All products</button>
      </div>
    </div>
  )
}

export default Today;