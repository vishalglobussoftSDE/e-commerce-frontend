import React from 'react';
import Carousel1 from './Carousel1';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselList = [
  {
    title: "iphone 14 Series",
    subTitle: "Up to 10% off Voucher",
    imageLink: "MainCarouselPhotos/cloths.jpg"
  },
  {
    title: "iphone 14 Series",
    subTitle: "Up to 10% off Voucher",
    imageLink: "MainCarouselPhotos/headphone.jpg"
  },
  {
    title: "iphone 14 Series",
    subTitle: "Up to 10% off Voucher",
    imageLink: "MainCarouselPhotos/laptop.jpg"
  },
]

const MainCarousel = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <div>
      <Slider {...settings}>
        {
          carouselList.map((item) => {
            return <Carousel1 title={item.title} subTitle={item.subTitle} imageLink={item.imageLink} />
          })

        }
      </Slider>
    </div>
  )
}

export default MainCarousel;