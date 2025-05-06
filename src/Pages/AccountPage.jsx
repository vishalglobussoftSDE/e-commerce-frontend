import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import { useState } from "react";

const AccountPage = () => {

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    currentPassword:"",
    newPassword:"",
    confirmPassword:""
  })

  const handleInput = (e)=>{
    let name = e.target.name 
    let value = e.target.value 

    setUser[{
      ...user,
      [name] :value
    }]
    
  }

  return (
    <div>
      <Header />
      <div className="my-4 mx-14">
        <div className="flex justify-between">
          <div>
            <span className="text-gray-700">Home / </span>
            <span> My Acoount</span>
          </div>
          <div>
            <span>Welcome! </span>
            <span className="text-red-500">Md Rime!</span>
          </div>
        </div>

        <div className="my-20 max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Edit Your Profile
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Md"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Rimel"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="rimel111@gmail.com"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                name="address"
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">Password Changes</h3>
              <div className="space-y-4">
                <input
                name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                name="newPassword"
                  type="password"
                  placeholder="New Password"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                name="confirmPassword"
                  type="password"
                  placeholder="Confirm New Password"
                  onChange={handleInput}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
            </div>

            <div className="flex justify-end items-center gap-4 mt-6">
              <button type="button" className="text-gray-600 hover:text-black">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default AccountPage;
