import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProduct from "../components/HomePageComponents/OurProduct";
import NewArrivals from "../components/HomePageComponents/NewArrivals";
import AboutServices1 from "../components/AboutServices1";
import servicesPng5 from "../assets/about-img/about-png5.png";
import servicesPng6 from "../assets/about-img/about-png6.png";
import servicesPng7 from "../assets/about-img/about-png7.png";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-8 px-8">
        <Sidebar />
      </main>
      <div className="mx-14">
        <OurProduct />
        <NewArrivals />

        <div className="flex justify-center gap-20 mb-34">
          <AboutServices1
            img={servicesPng5}
            heading="FREE AND FAST DELIVERY"
            text="Free delivery for all orders over $140"
          />

          <AboutServices1
            img={servicesPng6}
            heading="24/7 CUSTOMER SERVICE"
            text="Friendly 24/7 customer support"
          />
          <AboutServices1
            img={servicesPng7}
            heading="MONEY BACK GUARANTEE"
            text="We reurn money within 30 days"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
