import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'iPhone 14 Pro',
    subtitle: 'Up to 10% Off - Apple Deals',
    cta: 'Shop Now',
    image: '/carouselimages/iphone.jpg',
    logo: '/carouselimages/appleLogo.png',
  },
  {
    title: 'Galaxy S23 Ultra',
    subtitle: 'Epic Camera. Epic Display.',
    cta: 'Shop Now',
    image: '/carouselimages/Samsung.png',
    logo: '/carouselimages/samsung-logo.png',
  },
  {
    title: 'Sony WH-1000XM5',
    subtitle: 'Industry-Leading Noise Cancellation',
    cta: 'Shop Now',
    image: '/carouselimages/sonyheadphn.jpg',
    logo: '/carouselimages/sony-logo.png',
  },
  {
    title: 'Dell XPS 13',
    subtitle: 'Ultra-Slim, High Performance',
    cta: 'Shop Now',
    image: '/carouselimages/dell-xps.png',
    logo: '/carouselimages/dell-logo.png',
  },
  {
    title: 'Nintendo Switch OLED',
    subtitle: 'Play Anywhere, Anytime',
    cta: 'Shop Now',
    image: '/carouselimages/nintendo-switch.png',
    logo: '/carouselimages/nintendo-logo.png',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const { title, subtitle, cta, image, logo } = slides[current];

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl bg-black text-white">
      <div className="flex">
        <div className="w-1/2 p-10 flex flex-col justify-center gap-4">
          <img src={logo} alt="Brand Logo" className="w-6" />
          <p className="text-sm">{title}</p>
          <h2 className="text-4xl font-bold">{subtitle}</h2>
          <Link to="/products" className="text-white border-b border-white w-fit">
            {cta} →
          </Link>
        </div>
        <div className="w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}