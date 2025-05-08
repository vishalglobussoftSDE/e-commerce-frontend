import React, { useEffect, useState } from "react";
import IconsPhone from "../assets/Iconsphone.png";
import Iconsmail from "../assets/Iconsmail.png";
import axios from "axios";
import {  toast } from 'react-toastify';

const ContactPage = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/v1/form/contact", contact, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setContact((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, []);

  return (
    <div>
      <div className="pt-8 pb-8 px-[10%] bg-white min-h-screen flex flex-col gap-30">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          Home / <span className="text-black">Contact</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Left Card */}
          <div className="bg-white rounded shadow p-6 w-full max-w-sm ">
            <div className="flex flex-col gap-6">
              {/* Call Section */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img src={IconsPhone} alt="Phone Icon" className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Call To Us</h3>
                </div>
                <p className="text-sm text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm text-black">Phone: +8801611112222</p>
              </div>
              <hr className="border-red-300" />
              {/* Email Section */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <img src={Iconsmail} alt="Mail Icon" className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Write To US</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm text-black">
                  Emails: customer@exclusive.com
                </p>
                <p className="text-sm text-black">
                  Emails: support@exclusive.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded shadow p-6 w-full ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="p-3 rounded bg-gray-100 text-sm"
                  onChange={handleInput}
                  value={contact.name}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="p-3 rounded bg-gray-100 text-sm"
                  onChange={handleInput}
                  value={contact.email}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone *"
                  className="p-3 rounded bg-gray-100 text-sm"
                  onChange={handleInput}
                  value={contact.phone}
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows="6"
                name="message"
                className="p-3 rounded bg-gray-100 text-sm resize-none"
                onChange={handleInput}
                value={contact.message}
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white px-6 py-3 rounded hover:bg-red-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
