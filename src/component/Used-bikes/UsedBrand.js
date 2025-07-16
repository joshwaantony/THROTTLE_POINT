




"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BikeBrand } from "../Section4/BikeBrand";

function UsedBrand() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <div className="w-full max-w-[970px] mx-auto bg-white border border-gray-300 rounded-xl overflow-hidden">
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 transition-all duration-300 ${
          viewMore ? "max-h-[2000px]" : "max-h-[260px] overflow-hidden"
        }`}
      >
        {BikeBrand.map((bike) => (
          <div
            key={bike.id}
            className="flex flex-col items-center justify-center p-2 sm:p-3 border border-gray-100 hover:bg-gray-50 transition rounded"
          >
            <img
              src={`/${bike.logo}`}
              alt={`${bike.name} logo`}
              className="w-16 h-auto object-contain hover:scale-110 transition"
            />
            <span className="mt-2 text-gray-700 text-sm sm:text-base font-medium hover:text-green-700 cursor-pointer text-center">
              {bike.name}
            </span>
          </div>
        ))}
      </div>

      {/* View More / Less Button */}
      <div className="flex justify-center p-4 border-t border-gray-300 bg-white">
        <button
          onClick={() => setViewMore(!viewMore)}
          className="px-4 py-2 border border-[#0979b6] text-[#0979b6] rounded-md flex items-center gap-2 hover:bg-[#f0f9ff] transition"
        >
          {viewMore ? "View Less Brands" : "View More Brands"}
          {viewMore ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
        </button>
      </div>
    </div>
  );
}

export default UsedBrand;
