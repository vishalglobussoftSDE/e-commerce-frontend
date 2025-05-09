import React, {  useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import CategoriesIcon from './CategoriesIcon';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

const categoriesList = [
        {
            icon: <MdOutlinePhoneAndroid/>,
            title: "Phones"
        },
        {
            icon: <RiComputerLine/>,
            title: "Computers"
        },
        {
            icon: <IoWatchOutline/>,
            title: "SmartWatch"
        },
        {
            icon: <CiCamera/>,
            title: "Camera"
        },
        {
            icon: <CiHeadphones/>,
            title: "HeadPhones"
        },
        {
            icon: <IoGameControllerOutline/>,
            title: "Gaming"
        }

    ]

const Categories1 = () => {

  let sliderRef = useRef();
  

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  return (

    <div className='mt-20 pb-15 border-b-1 border-gray-300'>
      <div className='h-[40px] flex items-center'>
        <div className='bg-[#DB4444] w-[20px] h-full rounded'></div> <p className='text-red-600 text-[16px] font-[600] ml-4'>Category</p>
      </div>
      <div className='flex items-center mt-2'>
        <h2 className='text-[36px] font-[600] mt-3 mr-21'>Browse By Category</h2>
       
        <div className='ml-auto mr-10'>
          <button className='p-5 bg-gray-100 rounded-full mr-3 cursor-pointer' onClick={previous}><FaArrowLeftLong /></button>
          <button className='p-5 bg-gray-100 rounded-full cursor-pointer' onClick={next} ><FaArrowRightLong /></button>
        </div>
      </div>

      <div className='mt-10' >
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            {categoriesList.map((item)=>{
            return <CategoriesIcon key={item.title} icon={item.icon} title={item.title}/>
        })}
        </Slider>
      </div>
    </div>
  )
}

export default Categories1;