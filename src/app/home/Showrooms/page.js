




// "use client";
// import Upcomingindia from "@/component/BestBikes/Upcomingindia";
// import BestBikes from "@/component/BestBikes/Upcomingindia";
// import Showroombrand from "@/component/Showroombrand/Showroombrand";
// import BikeOne from "@/component/upcomingbike2/bikeOne";
// import React, { useRef } from "react";
// import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

// const Page = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   const topBikes = [
//     {
//       id: 1,
//       title: "Top Bikes in India",
//       image: "/ktm1000.png",
//       description: "Hunter 350, Classic 350, MT 15 V2",
//     },
//     {
//       id: 2,
//       title: "Top Bikes in India",
//       image: "/ktm1000.png",
//       description: "Duke 250, Apache RTR 160, R15 V4",
//     },
//     {
//       id: 3,
//       title: "Top Bikes in India",
//       image: "/ktm1000.png",
//       description: "Bullet 350, Xtreme 160R, Gixxer SF",
//     },
//     {
//       id: 4,
//       title: "Top Bikes in India",
//       image: "/ktm1000.png",
//       description: "Pulsar NS200, MT-03, Hness CB350",
//     },
//     {
//       id: 5,
//       title: "Top Bikes in India",
//       image: "/ktm1000.png",
//       description: "FZ-X, CB300F, Avenger 220",
//     },
//   ];

//   return (
//     <div className="px-6 md:px-12 lg:px-44">
//       {/* Heading */}
//       <div className="mt-4">
//         <h1 className="text-black text-2xl font-extrabold">Showroom Locator</h1>
//         <p className="text-black mt-3">
//           Looking to buy a new bike? You have come to the right place. BikeWale's dealer locator helps you find authorized dealers for more than 25 motorcycle and scooter brands in India.
//         </p>
//       </div>

//       {/* Find Dealer Form */}
//       <div className="mt-10">
//         <h1 className="text-[#484848] text-xl font-extrabold">Find Bike Dealers in your City</h1>
//         <div className="flex flex-wrap gap-6 py-4">
//           <div>
//             <h1 className="text-[12px] font-bold text-[#484848] mb-2">BRAND</h1>
//             <div className="border rounded-lg w-[300px] h-[50px] flex justify-between px-2 items-center">
//               <button className="text-black text-[15px]">Select Your Brand</button>
//               <FaChevronRight />
//             </div>
//           </div>
//           <div>
//             <h1 className="text-[12px] font-bold text-[#484848] mb-2">CITY</h1>
//             <div className="border rounded-lg w-[200px] h-[50px] flex justify-between px-2 items-center">
//               <button className="text-black text-[15px]">Alappuzha</button>
//               <FaChevronRight />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Explore by Brand */}
//       <div className="mt-8">
//         <h1 className="text-black text-2xl font-extrabold mb-2">Explore Showroom by Brand</h1>
//         <Showroombrand />
//       </div>

//       {/* Best Bikes of July */}
//       <div className="mt-10">
//         <h1 className="text-black text-2xl font-extrabold mb-4">Best Bikes of July 2025</h1>

//         <div className="relative">
//           {/* Scroll Buttons */}
//           <button
//             onClick={scrollLeft}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//           >
//             <FaChevronLeft className="text-black" />
//           </button>

//           <button
//             onClick={scrollRight}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
//           >
//             <FaChevronRight className="text-black" />
//           </button>

//           {/* Scrollable Card Row */}
//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-8"
//           >
//             {topBikes.map((bike) => (
//               <div
//                 key={bike.id}
//                 className="border rounded-2xl min-w-[300px] max-w-[300px] shadow bg-white"
//               >
//                 <img
//                   src={bike.image}
//                   alt={bike.title}
//                   className="rounded-t-2xl w-full h-[180px] object-cover"
//                 />
//                 <div className="rounded-b-2xl bg-[#F9F9F9] px-2 py-3">
//                   <h1 className="text-black font-bold">{bike.title}</h1>
//                   <p className="text-[#484848] text-sm">{bike.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="mt-8">
//        <h1 className="text-black text-2xl font-extrabold">New Bike Launches in India</h1>
//         <BikeOne/>
//       </div>
//       <div>
//         <Upcomingindia/>
//       </div>
//     </div>
//   );
// };

// export default Page;




"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Upcomingindia from "@/component/BestBikes/Upcomingindia";
import Showroombrand from "@/component/Showroombrand/Showroombrand";
import BikeOne from "@/component/upcomingbike2/bikeOne";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Page = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const topBikes = [
    {
      id: 1,
      title: "Top Bikes in India",
      image: "/ktm1000.png",
      description: "Hunter 350, Classic 350, MT 15 V2",
    },
    {
      id: 2,
      title: "Top Bikes in India",
      image: "/ktm1000.png",
      description: "Duke 250, Apache RTR 160, R15 V4",
    },
    {
      id: 3,
      title: "Top Bikes in India",
      image: "/ktm1000.png",
      description: "Bullet 350, Xtreme 160R, Gixxer SF",
    },
    {
      id: 4,
      title: "Top Bikes in India",
      image: "/ktm1000.png",
      description: "Pulsar NS200, MT-03, Hness CB350",
    },
    {
      id: 5,
      title: "Top Bikes in India",
      image: "/ktm1000.png",
      description: "FZ-X, CB300F, Avenger 220",
    },
  ];

  return (
    <div className="px-6 md:px-12 lg:px-44">
      {/* Heading */}
      <div className="mt-4">
        <h1 className="text-black text-2xl font-extrabold">Showroom Locator</h1>
        <p className="text-black mt-3">
          Looking to buy a new bike? You have come to the right place. BikeWale&apos;s dealer locator helps you find authorized dealers for more than 25 motorcycle and scooter brands in India.
        </p>
      </div>

      {/* Find Dealer Form */}
      <div className="mt-10">
        <h1 className="text-[#484848] text-xl font-extrabold">Find Bike Dealers in your City</h1>
        <div className="flex flex-wrap gap-6 py-4">
          <div>
            <h1 className="text-[12px] font-bold text-[#484848] mb-2">BRAND</h1>
            <div className="border rounded-lg w-[300px] h-[50px] flex justify-between px-2 items-center">
              <button className="text-black text-[15px]">Select Your Brand</button>
              <FaChevronRight />
            </div>
          </div>
          <div>
            <h1 className="text-[12px] font-bold text-[#484848] mb-2">CITY</h1>
            <div className="border rounded-lg w-[200px] h-[50px] flex justify-between px-2 items-center">
              <button className="text-black text-[15px]">Alappuzha</button>
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>

      {/* Explore by Brand */}
      <div className="mt-8">
        <h1 className="text-black text-2xl font-extrabold mb-2">Explore Showroom by Brand</h1>
        <Showroombrand />
      </div>

      {/* Best Bikes of July */}
      <div className="mt-10">
        <h1 className="text-black text-2xl font-extrabold mb-4">Best Bikes of July 2025</h1>
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          >
            <FaChevronLeft className="text-black" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          >
            <FaChevronRight className="text-black" />
          </button>

          {/* Scrollable Card Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-8"
          >
            {topBikes.map((bike) => (
              <div
                key={bike.id}
                className="border rounded-2xl min-w-[300px] max-w-[300px] shadow bg-white"
              >
                <Image
                  src={bike.image}
                  alt={bike.title}
                  width={300}
                  height={180}
                  className="rounded-t-2xl w-full h-[180px] object-cover"
                />
                <div className="rounded-b-2xl bg-[#F9F9F9] px-2 py-3">
                  <h1 className="text-black font-bold">{bike.title}</h1>
                  <p className="text-[#484848] text-sm">{bike.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Launches */}
      <div className="mt-8">
        <h1 className="text-black text-2xl font-extrabold">New Bike Launches in India</h1>
        <BikeOne />
      </div>

      {/* Upcoming Bikes Section */}
      <div>
        <Upcomingindia />
      </div>
    </div>
  );
};

export default Page;
