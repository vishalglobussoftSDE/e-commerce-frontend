import React, { useRef } from 'react';
import Product from './ProductCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const Today = () => {

    // const [rightMargin, setRightMargin]= useState(0);
    const currentDate=3;
    // const[currentHour, setCurrentHour]= useState(12);
    // const[currentMinutes, setCurrentMinutes]= useState(50);
    // const[currentSeconds, setCurrentSeconds]= useState(43);

    let sliderRef=useRef();

    const next = () => {
        sliderRef.slickNext();
      };
      const previous = () => {
        sliderRef.slickPrev();
      };
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };

    const productList = [
        "productImages/product1.png",
        "productImages/product2.png",
        "productImages/product3.png",
        "productImages/product4.png",
        "productImages/product5.png",
        "productImages/product6.png",
        "productImages/product7.png",
        "productImages/product8.png",
    ]


  return (

    <div className=''>
        <div className='h-[40px] flex items-center'>
            <div className='bg-[#DB4444] w-[20px] h-full rounded'></div> <p className='text-red-600 text-[16px] font-[600] ml-4'>Today's</p>            
        </div>
        <div className='flex items-center mt-5'>
            <h2 className='text-[36px] font-[600] mt-3 mr-21'>Flash Sales</h2>
            <div className='flex gap-[10px]'>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px]'>Days</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{currentDate}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px]'>Hours</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{currentDate}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px]'>Minutes</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{currentDate}</p>
                    </div>
                </div>
                <div className='mt-7 text-red-500 font-[800]'>:</div>
                <div className='flex flex-col items-center'>
                    <p className='text-[12px]'>Seconds</p>
                    <div>
                        <p className='font-[700] text-[32px]'>{currentDate}</p>
                    </div>
                </div>
            </div>
            <div className='ml-auto mr-10'>
                <button className='p-5 bg-gray-100 rounded-full mr-3 cursor-pointer' onClick={previous}><FaArrowLeftLong/></button>
                <button className='p-5 bg-gray-100 rounded-full cursor-pointer' onClick={next} ><FaArrowRightLong/></button>
            </div>
        </div>
        
        <div className='mt-10' >   
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>         
            {productList.map((item)=>{
                return <Product imgSrc={item} />
            })}       
        </Slider>      
        </div>
        
        <div className='flex w-full justify-center mt-15'>
            <button className='buttons'>View product</button>
        </div>
        
        
    </div>
  )
}

export default Today;