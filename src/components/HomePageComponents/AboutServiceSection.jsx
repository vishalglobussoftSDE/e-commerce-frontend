import React from 'react';
import servicesPng5 from "../../assets/about-img/about-png5.png";
import servicesPng6 from "../../assets/about-img/about-png6.png";
import servicesPng7 from "../../assets/about-img/about-png7.png";
import AboutServices from '../AboutServices';

const AboutServiceSection = () => {
  return (
    <div className="flex justify-center gap-20 mt-40">
          <AboutServices
            img={servicesPng5}
            heading="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
          />

          <AboutServices
            img={servicesPng6}
            heading="24/7 CUSTOMER SERVICE"
            text="Friendly 24/7 customer support"
          />
          <AboutServices
            img={servicesPng7}
            heading="MONEY BACK GUARANTEE"
            text="We reurn money within 30 days"
          />
        </div>
  )
}

export default AboutServiceSection;