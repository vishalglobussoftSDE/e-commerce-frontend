import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProduct from "../components/HomePageComponents/OurProduct";
import NewArrivals from "../components/HomePageComponents/NewArrivals";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mx-8 px-8">
        <Sidebar />
      </main>
      <NewArrivals/>
      <Footer />
    </div>
  );
};

export default HomePage;
