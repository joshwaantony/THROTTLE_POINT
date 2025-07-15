import ComingBrand from "@/component/ComingBrand/ComingBrand";
import Moreabout from "@/component/MoreAbout/Moreabout";
import BikeCardList from "@/component/Upcomingbike/BikeCardList";
import BikeOne from "@/component/upcomingbike2/bikeOne";
import ElectricCardList from "@/component/UpcomingScooter-s/ElectricCardList";
import NewScooter from "@/component/UpcomingScooter-s/NewScooter";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function page() {
  return (
    <div className="px-6 md:px-12 lg:px-44">
      <div className=" mt-10">
        <h1 className="text-black text-2xl font-extrabold  ">
          Upcoming Scooters
        </h1>
        <h2 className="text-black  font-bold text-xl mt-5">
          Expected Launches in 2025
        </h2>
        <p className="text-black mt-3">
          Commuting on a scooter is becoming one of the popular ways of
          commuting irrespective of whether you are in a big city and want to
          avoid traffic or in a small town to reach your destination hassle
          free. The popularity of scooters is corroborated from the fact that
          scooter segment has been fastest growing for the past few years. It is
          only natural that when you consider purchasing a scooter for yourself,
          you may want to evaluate all the scooters available in the market
          including the upcoming ones that will get launched soon and take an
          informed call. We bring you all the available information about
          upcoming scooters including expected launch price and expected launch
          dates so that you can decide if you want to postpone your purchase and
          wait for your dream scooter to launch!
        </p>
      </div>
      <div>
        <h1 className="text-black text-2xl font-extrabold mt-10">
         Upcoming Scooters in India
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
       <ElectricCardList/>
      </div>
      <div className="mt-20">
        <h1 className="text-black text-xl sm:text-2xl font-extrabold">
      New Scooter Launches in India
        </h1>
        <NewScooter/>
      </div>
      {/* <div className="mt-20">
        <h1 className=" text-black text-xl sm:text-2xl font-extrabold mb-4">
          Upcoming Bikes by Brands
        </h1>
        <ComingBrand />
      </div> */}
      <div>
        <Moreabout />
      </div>
    </div>
  );
}

export default page;
