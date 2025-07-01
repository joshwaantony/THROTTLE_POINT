"use client"
import React, { useState } from "react";

import { BikeBrand } from "../Section4/BikeBrand.js"

function ComingBrand() {
  const [viewMore, setViewMore] = useState(false);
  console.log(viewMore);
  return (
    <div className="rounded-2xl border border-gray-300 overflow-hidden ">
      <div className={`grid grid-cols-2 sm:grid-cols-3   xl:grid-cols-5 ${viewMore ? "h-auto" : "h-56"}`}>
        {/* {Array.from({ length: 15 }, (_, index) => (
          <div className="h-28 border border-gray-300 flex justify-center items-center ">
            {index + 1}
          </div>
        ))} */}
        {BikeBrand.map((bike) => (
           <div key={bike.id} className="h-28 border border-gray-300 flex  flex-col justify-center items-center gap-2 ">
          <img className="w-1/3 hover:scale-125 " src={`/${bike?.logo}`} alt={`${bike.name} logo`} />
          <span className="text-black text-sm sm:text-base  hover:text-green-700 cursor-pointer ">{bike.name}</span>
        </div>
        ))}
       
       
      </div>
      <div className="flex items-center justify-center p-4 bg-white sticky bottom-0 left-0">
        <button
          type="button"
          onClick={() => {
            setViewMore((prevValue) => !prevValue);
          }}
          className="text-[#0979b6] font-semibold flex items-center "
        >
          View More Brands
        </button>
      </div>
    </div>
  );
}

export default ComingBrand;
