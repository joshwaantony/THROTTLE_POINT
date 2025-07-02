// import React from "react";

// function Section9() {
//   return (
//    <div >
//     <h1 className="text-black text-base sm:text-2xl font-semibold">Popular Series</h1>
//      <div className="flex gap-4 mt-4 pl-8">
//       <div className="flex border border-gray-300 rounded-xl  p-16 gap-4 pt-2 pb-4 ">
//         <img className="w-[140px] h-[80px]" src="/NS200.png" alt="" />
//         <div>
//           <h1 className="font-semibold text-black text-lg">KTM 200</h1>
//           <p className="text-sm text-black font-bold">5 models available</p>
//           <div className="mt-1 flex items-center gap-3">
//             <span className="text-black font-bold">₹ 2,63,747</span>
//             <p className="text-gray-500 text-sm">Onwards</p>
//           </div>
//           <button className="mt-2  text-blue-600 font-bold ">
//             View All Bikes
//           </button>
//         </div>
//       </div>


//            <div className="flex border border-gray-300 rounded-xl  p-16 gap-4 pt-2 pb-4 ">
//         <img className="w-[140px] h-[80px]" src="/NS200.png" alt="" />
//         <div>
//           <h1 className="font-semibold text-black text-lg">KTM 200</h1>
//           <p className="text-sm text-black font-bold">5 models available</p>
//           <div className="mt-1 flex items-center gap-3">
//             <span className="text-black font-bold">₹ 2,63,747</span>
//             <p className="text-gray-500 text-sm">Onwards</p>
//           </div>
//           <button className="mt-2  text-blue-600 font-bold ">
//             View All Bikes
//           </button>
//         </div>
//       </div>




//            <div className="flex border border-gray-300 rounded-xl  p-16 gap-4 pt-2 pb-4 ">
//         <img className="w-[140px] h-[80px]" src="/NS200.png" alt="" />
//         <div>
//           <h1 className="font-semibold text-black text-lg">KTM 200</h1>
//           <p className="text-sm text-black font-bold">5 models available</p>
//           <div className="mt-1 flex items-center gap-3">
//             <span className="text-black font-bold">₹ 2,63,747</span>
//             <p className="text-gray-500 text-sm">Onwards</p>
//           </div>
//           <p className="mt-2  text-blue-600 font-bold ">
//             View All Bikes
//           </p>
//         </div>
//       </div>

      

     
//     </div>
//    </div>
//   );
// }

// export default Section9;
"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section9() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mt-6">
      <h1 className="text-black text-base sm:text-2xl font-semibold pl-4">
        Popular Series
      </h1>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronLeft className="text-black" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <FaChevronRight className="text-black" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pl-8 pr-8 mt-4 pb-4 scroll-smooth scrollbar-hide"
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row min-w-[250px] sm:min-w-[300px] border border-gray-300 rounded-xl py-2 gap-4 bg-white"
          >
            <img
              className="sm:w-[120px] sm:h-[80px] object-contain"
              src="/NS200.png"
              alt="bike"
            />
            <div className="ps-15 sm:ps-0" >
              <h1 className="font-semibold text-black text-sm sm:text-lg">KTM 200</h1>
              <p className="text-sm text-black font-bold">
                5 models available
              </p>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-black font-bold">₹ 2,63,747</span>
                <p className="text-gray-500 text-sm">Onwards</p>
              </div>
              <button className="mt-2 text-blue-600 font-bold hover:underline">
                View All Bikes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section9;
