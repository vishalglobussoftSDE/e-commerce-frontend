import React from "react";
import newArrivalImg1 from "../../assets/newArrival-img/new arrival img1.png";
import newArrivalImg2 from "../../assets/newArrival-img/new arrival img2.png";
import newArrivalImg3 from "../../assets/newArrival-img/new arrival img3.png";
import newArrivalImg4 from "../../assets/newArrival-img/new arrival img4.png";

const NewArrivals = () => {
  return (
    <div className="px-4">
      {/* Heading */}
      <div className="flex items-center gap-4 my-12">
        <div className="h-10 w-5 bg-[#DB4444] rounded-sm"></div>
        <p className="text-[#DB4444] text-xl">Featured</p>
      </div>
      <h2 className="text-4xl font-semibold mb-14">New Arrival</h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:h-[600px] mb-40">
        {/* Left Large Card */}
        <div className="relative bg-black rounded-md overflow-hidden h-[300px] lg:h-full flex justify-center items-center">
          <img
            src={newArrivalImg1}
            alt="PlayStation 5"
            className="w-[550px] h-[450px] object-contain"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-xl font-semibold mb-1">PlayStation 5</h3>
            <p className="text-sm mb-2">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline">Shop Now</button>
          </div>
        </div>

        {/* Right stacked cards */}
        <div className="grid grid-rows-2 gap-4 h-[600px]">
          {/* Top Right - Women's Collection */}
          <div className="relative bg-[#0D0D0D] rounded-md overflow-hidden row-span-1 flex justify-end items-center">
            <img
              src={newArrivalImg2}
              alt="Women's Collections"
              className="w-[550px] h-[311px] object-contain"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h3 className="text-xl font-semibold mb-1">
                Women’s Collections
              </h3>
              <p className="text-sm mb-2">
                Featured woman collections that give you another vibe.
              </p>
              <button className="underline">Shop Now</button>
            </div>
          </div>

          {/* Bottom right grid with 2 small cards */}
          <div className="grid grid-cols-2 gap-4 row-span-1">
            <div className="relative bg-black rounded-md overflow-hidden flex justify-center  items-center">
              <img
                src={newArrivalImg3}
                alt="Speakers"
                className="w-[211px] h-[211px]  object-contain"
              />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-semibold mb-1">Speakers</h3>
                <p className="text-sm mb-2">Amazon wireless speakers</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>

            <div className="relative bg-black rounded-md overflow-hidden flex justify-center  items-center">
              <img
                src={newArrivalImg4}
                alt="Perfume"
                className="w-[211px] h-[211px]  object-contain"
              />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-semibold mb-1">Perfume</h3>
                <p className="text-sm mb-2">GUCCI INTENSE OUD EDP</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
