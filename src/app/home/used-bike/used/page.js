import React from "react";
import { CgProfile } from "react-icons/cg";
import { SiInfracost } from "react-icons/si";
import { GiDuration } from "react-icons/gi";
import { TbListDetails } from "react-icons/tb";
import UsedBrand from "@/component/Used-bikes/UsedBrand";
import SecondHand from "@/component/Used-bikes/SecondHand";



function Page() {
  return (
    <div className="bg-[#F5F5F5] pb-10 ">
      <div
        className="flex items-start justify-center h-[250px] bg-cover bg-center bg-fixed px-4 pt-8 "
        style={{ backgroundImage: "url('/used.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-white text-3xl font-bold pt-1">USED BIKE </h1>
          <p className="text-white text-2xl font-bold">
            Thousands of used bikes for sale
          </p>
        </div>
      </div>

      <div className="h-[300px] bg-[#F5F5F5] ">
        <div className="flex flex-col items-center justify-center w-full max-w-[970px] bg-white px-4 py-10 mx-auto  relative -top-8">
          <h1 className="text-xl md:text-2xl font-semibold text-center text-black mb-6">
            Search second hand bikes
          </h1>

          <div className="flex flex-col sm:flex-row w-full max-w-2xl border border-gray-300 rounded overflow-hidden bg-white">
            <div className="w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r pr-2 border-gray-300">
              <select className="w-full h-16 px-4 text-lg text-gray-600 focus:outline-none">
                <option>Kolkata</option>
                <option>Delhi</option>
                <option>Chennai</option>
                <option>Bangalore</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 pr-2">
              <select className="w-full h-16 px-4 text-lg text-gray-600 focus:outline-none">
                <option>Select budget</option>
                <option>Below ₹50,000</option>
                <option>₹50,000 - ₹1,00,000</option>
                <option>Above ₹1,00,000</option>
              </select>
            </div>
          </div>

          <button className="bg-red-500 text-white text-xl mt-6 w-44 h-[45px] rounded hover:bg-red-600 transition">
            Search
          </button>
        </div>
      </div>
      <h1 className="text-xl md:text-2xl font-semibold text-center text-black mb-6">
        Best way to sell your bike
      </h1>

      <div className="flex flex-col items-center justify-center w-full max-w-[970px] bg-white px-4 py-10 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <div className="flex flex-col items-center gap-2 text-center">
            <SiInfracost className="text-black size-7" />
            <h1 className="text-black font-bold">Free of cost</h1>
            <p className="text-black">
              We let only verified buyers get in touch with you
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <CgProfile className="text-black size-7" />
            <h1 className="text-black font-bold">Genuine buyers</h1>
            <p className="text-black">
              You can upload your bike ad absolutely free
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <GiDuration className="text-black size-7" />
            <h1 className="text-black font-bold">Unlimited listing duration</h1>
            <p className="text-black">
              Your bike listing will stay active until it is sold
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <TbListDetails className="text-black size-7" />
            <h1 className="text-black font-bold">Get buyer details</h1>
            <p className="text-black">
              We’ll send buyer details via SMS and email
            </p>
          </div>
        </div>

        <button className="bg-[#58BDCB] text-white text-xl mt-8 w-44 h-[45px] rounded hover:bg-[#6cc7d3] transition">
          Sell
        </button>
      </div>
      <h1 className="text-xl md:text-2xl font-semibold text-center text-black mb-6 mt-5">
        Search used bikes by brands
      </h1>
      <UsedBrand/>
      <h1 className="text-xl md:text-2xl font-semibold text-center text-black mb-6 mt-5">
        Popular second hand bikes
      </h1>
      <SecondHand/>
    </div>
  );
}

export default Page;
