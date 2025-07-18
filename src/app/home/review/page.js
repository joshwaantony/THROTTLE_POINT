

"use client"

import TopRatedBikes from "@/component/Review-s/TopRatedBikes";
import React, { useState } from "react";

function Page() {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <div className=" bg-[#F5F5F5]">
      <div
        className="min-h-[40vh] bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-white px-4 text-center"
        style={{
          backgroundImage: "url('/review.jpg')", // Replace with actual image path
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">BIKE REVIEWS</h1>


        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl">
          <input
            type="text"
            placeholder="Search your bike here, e.g. Bullet 350"
            className="w-full sm:flex-1 px-4 py-3 rounded-l-md border-none outline-none text-black bg-white"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-r-md w-full sm:w-auto mt-2 sm:mt-0 hover:bg-red-700 transition">
            Search
          </button>
        </div>
      </div>
      <div className="">
         <TopRatedBikes />
      </div>
     
    </div>
  );
}

export default Page;
