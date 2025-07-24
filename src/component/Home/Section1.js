

"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";

function Section1() {
  return (
    <div className="relative">
      {/* Banner background */}
      <div className="bg-[url('/ride12.png')] md:bg-[url('/ride.jpg')] bg-no-repeat bg-fixed bg-cover bg-[center_85px]">
        {/* content overlay */}
        <div className="flex flex-col justify-center items-center h-[550px] bg-[#0d0d0d32] text-white gap-4 px-4 text-center">
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-24 max-w-[90%]">
            &quot;Gear Up with Confidence – Explore the Right Bike Today!&quot;
          </h1>

          <h2 className="text-sm sm:text-base md:text-lg">
            Get Comprehensive Information on Bikes!
          </h2>

          {/* Search Box */}
          <div className="w-full max-w-[700px] flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/30 border border-gray-300 p-3 rounded-xl backdrop-blur-sm">
            {/* Input Field */}
            <div className="flex items-center w-full bg-white/80 rounded-lg px-3 py-2 gap-2">
              <CiSearch className="text-black text-xl" />
              <input
                type="search"
                placeholder="Search your bike here, e.g. KTM RC 200"
                className="text-sm sm:text-base outline-none text-black bg-transparent w-full placeholder:text-black"
              />
            </div>

            {/* Search Button */}
            <button className="bg-[#962525] text-white font-semibold px-6 py-2 rounded-xl w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
