import { useState } from "react";
import signupImg from "../assets/logSign-Img/log-sign.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';

const LoginPage = () => {

  const [user,setUser] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate();

  const handleInput = (e) =>{
    let name = e.target.name 
    let value = e.target.value 

    setUser({
      ...user ,
      [name] : value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting user:", user);
  
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Login successful:", response.data);
  
     
      const { token, user: userInfo } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userInfo));
  
      
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error("Login failed:", error.response.data);
        toast.error(error.response.data.message || "Login failed. Please try again.");
      } else {
        console.error("Network or server error:", error.message);
        toast.error("Network or server error: " + error.message);
      }
    }
  };
  
  
  return (
    <div>
      
      <div className="my-16 flex justify-between items-center">
        <img className="h-[581px] "  src={signupImg} alt="" />
        <div className="flex flex-col mr-60 gap-6">
          <h1 className="text-4xl">Log in to Exclusive</h1>
          <p className="text-xl">Enter your details below</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleInput}
            />
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
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
      
    </div>
  );
};

export default LoginPage;
