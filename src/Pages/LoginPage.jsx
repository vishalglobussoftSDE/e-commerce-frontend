import React from "react";
import Header from "../components/Header";
import signupImg from "../assets/logSign-Img/log-sign.png";
import { Link } from "react-router-dom";
import googleIcon from "../assets/logSign-Img/googleIcon.png";
import Footer from "../components/Footer.jsx";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="my-16 flex justify-between items-center">
        <img className="h-[781px]" src={signupImg} alt="" />
        <div className="flex flex-col mr-60 gap-6">
          <h1 className="text-4xl">Log in to Exclusive</h1>
          <p className="text-xl">Enter your details below</p>
          <form className="flex flex-col gap-5.5">
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="password"
              placeholder="Password"
            />
            <div className="flex items-center justify-between w-full">
              <button className="bg-[#DB4444] text-white py-2 px-8 rounded-md hover:bg-[#c33c3c] transition-colors duration-200">
                Log in
              </button>
              <Link
                to="#"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
