import React from "react";
import AboutServices from "../components/AboutServices.jsx";
import AboutProfile from "../components/AboutProfile.jsx";
import aboutImg1 from "../assets/about-img/about-img1.png";
import servicesPng1 from "../assets/about-img/about-png1.png";
import servicesPng2 from "../assets/about-img/about-png2.png";
import servicesPng3 from "../assets/about-img/about-png3.png";
import servicesPng4 from "../assets/about-img/about-png4.png";
import profileImg1 from "../assets/about-img/about-img2.png";
import profileImg2 from "../assets/about-img/about-img3.png";
import profileImg3 from "../assets/about-img/about-img4.png";
import servicesPng5 from "../assets/about-img/about-png5.png";
import servicesPng6 from "../assets/about-img/about-png6.png";
import servicesPng7 from "../assets/about-img/about-png7.png";
import { Link } from "react-router-dom";
import Achievement from "../components/Achievement.jsx";

const AboutPage = () => {
  return (
    <div className="container">
      
      <div className="my-8 container">
        <p>
          <Link to="/">Home  </Link>/
          <Link>  About</Link>
        </p>

        <div className="flex my-14 justify-between items-center ">
          <div className="flex flex-col gap-14 w-[570px] h-[336px] justify-center">
            <h1 className="text-6xl font-semibold tracking-widest">
              Our Story
            </h1>
            <p className="text-xl leading-relaxed">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-xl leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img
              className="rounded-md w-[705px] h-[609px]"
              src={aboutImg1}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center gap-26 my-40">
          <Achievement
            img={servicesPng1}
            heading="10.5K"
            text="Sellers active on our site"
          />
          <Achievement
            img={servicesPng2}
            heading="33K"
            text="Monthly product sale"
          />
          <Achievement
            img={servicesPng3}
            heading="45.5K"
            text="Customer active in our site"
          />
          <Achievement
            img={servicesPng4}
            heading="25K"
            text="Annual gross sale in our site"
          />
        </div>

        <div className="flex justify-center gap-56">
          <AboutProfile
            img={profileImg1}
            name="Tom Cruise"
            position="Founder & Chairman"
          />
          <AboutProfile
            img={profileImg2}
            name="Emma Watson"
            position="Managing Director"
          />
          <AboutProfile
            img={profileImg3}
            name="Will Smith"
            position="Product Designer"
          />
        </div>

        <div className="flex justify-center gap-20 my-36">
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
      </div>
    </div>
  );
};

export default AboutPage;
