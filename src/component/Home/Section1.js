import React from "react";
import { CiSearch } from 'react-icons/ci';


function Section1() {
  return <div>
    {/* <img src="ride.jpg" alt="" className="relative  w-full h-[550px]" /> */}
    <div className=" banner1">
    <div className=" flex flex-col justify-center items-center h-[550px] bg-[#0d0d0d32]  text-white  gap-2">

    <h1 className="font-extrabold text-2xl mt-40 ">"Gear Up with Confidence – Explore the Right Bike Today!"</h1>
    <h2 className="text-center ">Get Comprehensive Information on Bikes!</h2>
  
     <div className="flex justify-between w-[700px] items-center border border-gray-200 px-4 py-1 sm:px-6 sm:py-2 bg-[#ffffff37]  rounded-xl">
       <div className="flex w-[350px] gap-2 "> 
               <CiSearch className="text-black text-xl sm:text-2xl" />

              <input
                type="search"
                placeholder="Search your bike here,e.g.KTM RC 200 "
                className=" text-sm sm:text-base outline-none text-black  w-full placeholder:text-black"
              />
       </div>
        <button className="bg-[#962525] border border-gray-600 text-white px-8 py-2 rounded-2xl cursor-pointer">Search</button>

            </div>
            </div>
    

    </div>
   
  </div>;
}

export default Section1;
