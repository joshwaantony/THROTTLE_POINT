// import React from "react";
// import { CiSearch } from 'react-icons/ci';


// function Section1() {
//   return <div>
//     {/* <img src="ride.jpg" alt="" className="relative  w-full h-[550px]" /> */}
//     <div className=" banner1">
//     <div className=" flex flex-col justify-center items-center h-[550px] bg-[#0d0d0d32]  text-white  gap-2">

//     <h1 className="font-extrabold text-2xl mt-40 ">"Gear Up with Confidence – Explore the Right Bike Today!"</h1>
//     <h2 className="text-center ">Get Comprehensive Information on Bikes!</h2>
  
//      <div className="flex justify-between w-[700px] items-center border border-gray-200 px-4 py-1 sm:px-6 sm:py-2 bg-[#ffffff37]  rounded-xl">
//        <div className="flex w-[350px] gap-2 "> 
//                <CiSearch className="text-black text-xl sm:text-2xl" />

//               <input
//                 type="search"
//                 placeholder="Search your bike here,e.g.KTM RC 200 "
//                 className=" text-sm sm:text-base outline-none text-black  w-full placeholder:text-black"
//               />
//        </div>
//         <button className="bg-[#962525] border border-gray-600 text-white px-8 py-2 rounded-2xl cursor-pointer">Search</button>

//             </div>
//             </div>
    

//     </div>
   
//   </div>;
// }

// export default Section1;




// "use client";

// import React from "react";
// import { CiSearch } from 'react-icons/ci';

// function Section1() {
//   return (
//     <div className="relative">
//       {/* Background image section */}
//       <div className="banner1">
//         <div className="flex flex-col justify-center items-center h-[550px] bg-[#0d0d0d32] text-white gap-4 px-4 text-center">
          
//           {/* Headline */}
//           <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-24 max-w-[90%]">
//             "Gear Up with Confidence – Explore the Right Bike Today!"
//           </h1>

//           {/* Subheading */}
//           <h2 className="text-sm sm:text-base md:text-lg">
//             Get Comprehensive Information on Bikes!
//           </h2>

//           {/* Search box */}
//           <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-[700px] bg-white/30 border border-gray-200 p-2 sm:p-3 rounded-xl backdrop-blur-sm">
            
//             {/* Input with icon */}
//             <div className="flex items-center w-full sm:w-[70%] bg-white/80 rounded-lg px-3 py-2 gap-2">
//               <CiSearch className="text-black text-xl sm:text-2xl" />
//               <input
//                 type="search"
//                 placeholder="Search your bike here, e.g. KTM RC 200"
//                 className="text-sm sm:text-base outline-none text-black bg-transparent w-full placeholder:text-black"
//               />
//             </div>

//             {/* Search Button */}
//             <button className="bg-[#962525] text-white font-semibold px-6 py-2 rounded-2xl w-full sm:w-auto">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section1;




"use client";

import React from "react";
import { CiSearch } from 'react-icons/ci';

function Section1() {
  return (
    <div className="relative">
      {/* Banner background */}
     <div className=" bg-[url('/ride12.png')] md:bg-[url('/ride.jpg')] bg-no-repeat bg-fixed bg-cover bg-[center_85px]">
  {/* content here */}


        <div className="flex flex-col justify-center items-center h-[550px] bg-[#0d0d0d32] text-white gap-4 px-4 text-center">
          
          <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-24 max-w-[90%]">
            "Gear Up with Confidence – Explore the Right Bike Today!"
          </h1>

          <h2 className="text-sm sm:text-base md:text-lg">
            Get Comprehensive Information on Bikes!
          </h2>

          {/* Straight-line search box */}
          <div className="w-full max-w-[700px] flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/30 border border-gray-300 p-3 rounded-xl backdrop-blur-sm">
            
            {/* Input field with icon */}
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
