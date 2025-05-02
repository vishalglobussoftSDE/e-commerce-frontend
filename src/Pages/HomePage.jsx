import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header stays at top */}
      <Header />

      {/* Main content grows to fill space */}
      <main className="flex-grow mx-8 px-8">
        <Sidebar />
      </main>

      {/* Footer sticks to bottom */}
      <Footer />
    </div>
  );
};

export default HomePage;
