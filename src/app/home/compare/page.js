


import Comparebike from "@/component/compare-bike/Comparebike";
import React from "react";

function page() {
  return <div className="px-44">
    <div >
         <h1 className="text-black text-base md:text-3xl font-semibold mt-5">Compare Bike</h1>
         <p className="text-black mt-2">Are you confused between multiple bikes to choose from? Not sure what features should you compare? Don't worry, bike comparison was never so easy. BikeWale brings you an amazing tool 'Compare Bikes' for bike comparison based on prices, mileage, power, performance, and 100s of other features. Compare your favorite bikes to choose the one that suits your needs. Compare multiple bikes at once to find the best one.</p>
    </div>
    <div className="flex border-1 rounded-2xl border-gray-200 justify-between  my-3">
             
              <div className="w-full text-black flex justify-center items-center flex-col border-1 rounded-l-2xl border-gray-200 relative  ">
                <img src="/selectbike.svg" className="size-18" alt=""  />
                <h1 className="text-[15px] text-[#0979B6] px-4">Select Bike</h1>
                <div className=" size-6 -right-3  border-1 rounded-full border-[#002B51] text-[#E03013] bg-white z-50 text-xs flex justify-center items-center absolute">VS</div>
                
              </div>
               <div className="w-full text-black flex justify-center items-center flex-col border-1  border-gray-200 relative ">
                <img src="/selectbike.svg" className="size-18" alt=""  />
                <h1 className="text-[15px] text-[#0979B6] px-4">Select Bike</h1>
                                <div className=" size-6 -right-3  border-1 rounded-full border-[#002B51] text-[#E03013] bg-white z-50 text-xs flex justify-center items-center absolute">VS</div>

                
              </div>
                  <div className="w-full text-black flex justify-center items-center flex-col border-1  border-gray-200 relative  ">
                <img src="/selectbike.svg" className="size-18" alt=""  />
                <h1 className="text-[15px] text-[#0979B6] px-4">Select Bike</h1>
                                <div className=" size-6 -right-3  border-1 rounded-full border-[#002B51] text-[#E03013] bg-white z-50 text-xs flex justify-center items-center absolute">VS</div>

                
              </div>
                  <div className="w-full py-6 text-black flex justify-center items-center flex-col border-1 rounded-r-2xl border-gray-200  ">
                <img src="/selectbike.svg" className="size-18" alt=""  />
                <h1 className="text-[15px] text-[#0979B6] px-4">Select Bike</h1>
                
              </div>
              
            </div>

            <button className="bg-[#E03013] w-[315px] h-[48px] font-bold rounded-lg mb-10 text-white">Compare</button>
            <Comparebike/>
   
   
  </div>;
}

export default page;
