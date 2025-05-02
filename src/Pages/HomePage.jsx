import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="mx-8 px-8">
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
