import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaCheckCircle } from "react-icons/fa"; // Confirmation icon

const OrderPlacedPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        {/* Breadcrumb + Content Wrapper */}
        <div className="flex-grow p-8 flex flex-col">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            Home / <span className="text-black">Order Confirmation</span>
          </nav>

          {/* Centered Content */}
          <main className="flex flex-col items-center justify-center text-center flex-grow gap-6">
            <FaCheckCircle className="text-green-500 text-7xl mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Thank you! Your order has been placed.
            </h2>
            <p className="text-gray-600 max-w-md">
              You will receive an order confirmation email shortly. You can
              track your order status in your account.
            </p>
            <button
              className="px-6 py-3 mt-4 bg-[#DB4444] text-white rounded hover:bg-[#c03b3b] transition"
              onClick={() => (window.location.href = "/")}
            >
              Continue Shopping
            </button>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default OrderPlacedPage;
