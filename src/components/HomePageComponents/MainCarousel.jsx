import React from 'react';
import Carousel from './Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselList = [
  {
    title: "iphone 14 Series",
    subTitle: "Up to 10% off Voucher",
    imageLink: "MainCarouselPhotos/iphone.png",
    logoLink:"CompanyLogos/appleLogo.png"
  },
  {
    title: "Apple Headphones",
    subTitle: "Minimum 20% off",
    imageLink: "MainCarouselPhotos/headphone.jpg",
    logoLink:"CompanyLogos/appleLogo.png"
  },
  {
    title: "Dell Isnpiron Series",
    subTitle: "Best Dell Laptops",
    imageLink: "MainCarouselPhotos/laptop.jpg",
    logoLink:"CompanyLogos/dell.png"
  },
  {
    title: "H&M Cloths",
    subTitle: "Min 30% Discount",
    imageLink: "MainCarouselPhotos/cloths.jpg",
    logoLink:"CompanyLogos/HM.png"
  },  
]

const MainCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: ""
  };

  return (
    <div className='w-[90%] overflow-hidden mt-auto' >
      <Slider {...settings}>
        {
          carouselList.map((item) => {
            return <Carousel title={item.title} subTitle={item.subTitle} imageLink={item.imageLink} logoLink={item.logoLink} />
          })
        }
      </Slider>
    </div>
  )
}

export default MainCarousel;