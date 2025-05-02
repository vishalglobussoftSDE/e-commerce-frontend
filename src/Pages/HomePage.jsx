import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
