import React from 'react'
import Sidebar from './Sidebar'
import MainCarousel from './MainCarousel'
import Carousel1 from './Carousel1'

const HomeComp1 = () => {

  const title= "iphone 14 Series";
  const subTitle= "Up to 10% off Voucher";
  const imageLink= "MainCarouselPhotos/iphone.png";

  return (

    <div className='flex'>
        <Sidebar/>
        <Carousel1 title={title} subTitle={subTitle} imageLink={imageLink}/>
        {/* <MainCarousel/> */}
    </div>
  )
}

export default HomeComp1;