import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProduct from "../components/HomePageComponents/OurProduct";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-8 py-4">
        <div className="flex gap-6">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4 mt-[50px]">
            <Carousel />
          </div>
        </div>
      </main>
      <OurProduct />
      <Footer />
    </div>
  );
};

export default HomePage;
