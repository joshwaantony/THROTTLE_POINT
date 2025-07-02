import ComingBrand from "@/component/ComingBrand/ComingBrand";
import Moreabout from "@/component/MoreAbout/Moreabout";
import BikeCardList from "@/component/Upcomingbike/BikeCardList";
import BikeOne from "@/component/upcomingbike2/bikeOne";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function page() {
  return (
    <div className="px-8 md:px-20 2xl:px-40">
      <div className=" mt-10">
        <h1 className="text-black text-2xl font-extrabold  ">Upcoming Bikes</h1>
        <h2 className="text-black  font-bold text-xl mt-5">
          Expected Launches in 2025
        </h2>
        <p className="text-black mt-3">
          India is the world’s largest two-wheeler market, and it can get a
          little confusing for the buyer who is waiting for their dream bike to
          launch. In this section, we give you all the information about that
          bike you’ve been waiting for, so you can take an educated decision on
          whether to put off your purchase for a while and be ready to purchase
          that bike you’ve always wanted the instant it is launched! All the new
          upcoming bikes are listed with their expected launch date and
          estimated launch price and most of these bikes will launch within the
          next two years.
        </p>
      </div>
      <div>
        <h1 className="text-black text-2xl font-extrabold mt-10">
          Upcoming Bikes in India
        </h1>
        <div className="flex justify-between py-2">
          <div>
            <h1 className=" text-[12px] font-bold text-[#484848] mt-4">
              BRAND
            </h1>
         <div className=" border rounded-lg w-[120px] sm:w-[200px] h-[34px] sm:h-[50px] flex justify-between px-2 items-center mt-2 ">
            <button className=" text-black  text-[10px] sm:text-[15px]  ">
                All Brands
            </button>
              <FaChevronRight />
            </div>
          </div>

          <div>
            <h1 className=" text-[12px] font-bold text-[#484848] mt-4">
              LAUNCH YEAR
            </h1>
            <div className=" border rounded-lg  w-[120px] sm:w-[200px] h-[34px] sm:h-[50px] flex justify-between px-2 items-center mt-2 ">
            <button className=" text-black  text-[10px] sm:text-[15px]  ">
                All years
            </button>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    
    
   <div className="mt-4">
    <BikeCardList/>
   </div>
   <div className="mt-20">
    <h1 className="text-black text-xl sm:text-2xl font-extrabold">New Bike Launches in India</h1>
    <BikeOne/>
   </div>
   <div className="mt-20">
    <h1 className=" text-black text-xl sm:text-2xl font-extrabold mb-4">Upcoming Bikes by Brands</h1>
    <ComingBrand/>
   </div>
   <div>
    <Moreabout/>
   </div>
    
    </div>
  );
}

export default page;
