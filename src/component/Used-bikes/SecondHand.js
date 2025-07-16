



// "use client";
// import React, { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// function SecondHand() {
//   const scrollRef = useRef(null);

//   // Define the bikes/news data
//   const bikes = [
//     {
//     id: 1,
//     image: "rc200.png",
//     title: "Used  KTM RC 200 ",
//     price: "₹ 1,50,000",
  
//     description:
//       "86 Used bikes available",
//   },
//   {
//     id: 2,
//     image: "NS200.png",
//     title: "Used Bajaj NS200 ",
//      price: "₹ 1,50,000",
   
//     description:
//       "86 Used bikes available",
      
//   },
//   {
//     id: 3,
//     image: "r15-v4.png",
//     title: " Used Yamaha R15 V4 ",
//      price: "₹ 1,50,000",
   
//     description:
//       "86 Used bikes available",
//   },
//   {
//     id: 4,
//     image: "RR310.png",
//     title: "Used TVS Apache RR310 ",
//      price: "₹ 1,50,000",
   
//     description:
//       "86 Used bikes available",
//   },
//     // Add more articles as needed
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -400 : 400,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative mt-6">
//       {/* Left Arrow */}
//       <button
//         onClick={() => scroll("left")}
//         className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
//       >
//         <FaChevronLeft className="text-gray-700" />
//       </button>

//       {/* Scrollable News Cards */}
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-auto gap-4 scroll-smooth px-10"
//       >
//         {bikes.map((bike) => (
//           <div
//             key={bike.id}
//             className="border border-gray-300 rounded-2xl min-w-[250px] sm:min-w-[300px] xl:min-w-[350px]  p-2 bg-gray-100"
//           >
//             <img
//               src={`/${bike?.image}`}
//               className=" drop-shadow-slate-950 rounded-2xl w-full h-[150px] sm:h-[200px] object-cover hover:scale-125"
//               alt={bike.title}
//             />
//             <div className="flex flex-col gap-2 mt-3 ps-2">
//               <h1 className="text-black font-semibold text-[15px] sm:text-xl">{bike.title}</h1>
//               <p className="text-[#82888B]">{bike.description}</p>
//               <p className="text-black font-semibold text-[15px] sm:text-xl">{bike.price}</p>
             
          
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={() => scroll("right")}
//         className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
//       >
//         <FaChevronRight className="text-gray-700" />
//       </button>
//     </div>
//   );
// }

// export default SecondHand;




"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SecondHand() {
  const scrollRef = useRef(null);

  const bikes = [
    {
      id: 1,
      image: "NS200.png",
      title: "Used Bajaj Pulsar",
      price: "₹ 20,000",
      description: "86 Used bikes available",
    },
    {
      id: 2,
      image: "350.png",
      title: "Used Royal Enfield Classic",
      price: "₹ 60,000",
      description: "26 Used bikes available",
    },
    {
      id: 3,
      image: "RR310.png",
      title: "Used TVS Apache",
      price: "₹ 35,000",
      description: "24 Used bikes available",
    },
    {
      id: 4,
      image: "r15-v4.png",
      title: "Used Yamaha R15",
      price: "₹ 55,000",
      description: "40 Used bikes available",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[970px] mx-auto mt-10">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-8 scroll-smooth"
      >
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="min-w-[260px] sm:min-w-[300px] bg-white border border-gray-300 rounded-xl shadow-sm p-4 flex flex-col items-center"
          >
            <img
              src={`/${bike.image}`}
              alt={bike.title}
              className="h-40 sm:h-44 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">{bike.title}</h3>
            <p className="text-gray-500 text-sm mb-1">{bike.description}</p>
            <p className="text-lg font-bold text-gray-900">{bike.price} <span className="text-sm font-medium">onwards</span></p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="border border-[#0979b6] text-[#0979b6] px-5 py-2 rounded-md hover:bg-blue-50 transition">
          View all used bikes
        </button>
      </div>
    </div>
  );
}

export default SecondHand;
