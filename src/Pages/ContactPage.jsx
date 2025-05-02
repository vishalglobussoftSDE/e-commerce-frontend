import React from 'react';
import IconsPhone from '../assets/Iconsphone.png';
import Iconsmail from '../assets/Iconsmail.png';

const ContactPage = () => {
    return (
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
                            <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
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
                            <p className="text-sm text-black">Emails: customer@exclusive.com</p>
                            <p className="text-sm text-black">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-white rounded shadow p-6 w-full ">
                    <form className="flex flex-col gap-4">
                        {/* Input Fields Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="p-3  rounded bg-gray-100 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="p-3  rounded bg-gray-100 text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone *"
                                className="p-3  rounded bg-gray-100 text-sm"
                            />
                        </div>
                        {/* Message Textarea */}
                        <textarea
                            placeholder="Your Message"
                            rows="6"
                            className="p-3  rounded bg-gray-100 text-sm resize-none"
                        ></textarea>

                        {/* Submit Button */}
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
    );
};

export default ContactPage;
