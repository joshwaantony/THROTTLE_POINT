// import React from "react";

// const Section7 = () => {
//   return <div className="mt-3">
//     <h1 className="text-black text-2xl font-semibold mb-2">Compare Bikes</h1>
//     <div className="border bg-white border-gray-300 rounded-2xl pt-4 w-[400px] ">
    
// <div className="flex">
//     <div className="w-[200px]   relative text-black ">
//    <div className="border-r-1 border-r-gray-300"> <img src="/NS200.png" alt="" /></div>
//    <h1 className="text-[12px] text-black px-4">Royal Enfield</h1>
//    <p  className="font-semibold text-[14px] px-4">Hunder 350</p>
//    <p className="px-4 text-[12px] font-semibold">₹ 1,80,460</p>
//    <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
    

// <div className="absolute border border-black bg-white text-red-500 p-1 text-xs size-6 rounded-full -right-3 top-12">VS</div>

// </div>
// <div className="w-[200px]  text-black  ">
//     <img src="/r15-v4.png" alt="" />
//     <h1 className="text-[12px] text-black px-4">Royal Enfield</h1>
//    <p  className="font-semibold text-[14px] px-4">Hunder 350</p>
//    <p className="px-4 text-[12px] font-semibold">₹ 1,80,460</p>
//    <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
    
// </div>
// </div>
//  <button className="text-blue-500 border border-blue-400 rounded-xl p-2  font-semibold w-full">
//                Hunter 350 Vs Bullet 350
//               </button>

//     </div>
//   </div>;
// };

// export default Section7;


"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const compareData = [
  {
    left: { brand: "Royal Enfield", model: "Hunter 350", price: "₹ 1,80,460", image: "/rc200.png" },
    right: { brand: "Yamaha", model: "R15 V4", price: "₹ 1,80,000", image: "/r15-v4.png" },
    label: "Hunter 350 Vs R15 V4"
  },
  {
    left: { brand: "Bajaj", model: "Pulsar NS200", price: "₹ 1,49,000", image: "/NS200.png" },
    right: { brand: "TVS", model: "Apache RTR 200", price: "₹ 1,42,000", image: "/RR310.png" },
    label: "NS200 Vs Apache 200"
  },
  {
    left: { brand: "Royal Enfield", model: "Classic 350", price: "₹ 1,93,000", image: "/rc200.png" },
    right: { brand: "Honda", model: "CB350", price: "₹ 2,00,000", image: "/rc200.png" },
    label: "Classic 350 Vs CB350"
  },
  {
    left: { brand: "KTM", model: "Duke 200", price: "₹ 1,96,000", image: "/rc200.png" },
    right: { brand: "Yamaha", model: "MT-15", price: "₹ 1,68,000", image: "/rc200.png" },
    label: "Duke 200 Vs MT-15"
  },
  {
    left: { brand: "Suzuki", model: "Gixxer SF", price: "₹ 1,35,000", image: "/rc200.png" },
    right: { brand: "Yamaha", model: "FZ-S FI", price: "₹ 1,30,000", image: "/rc200.png" },
    label: "Gixxer SF Vs FZ-S"
  },
  {
    left: { brand: "Hero", model: "Xtreme 160R", price: "₹ 1,27,000", image: "/rc200.png" },
    right: { brand: "Honda", model: "Hornet 2.0", price: "₹ 1,36,000", image: "/rc200.png" },
    label: "Xtreme 160R Vs Hornet 2.0"
  },
  {
    left: { brand: "TVS", model: "Raider 125", price: "₹ 93,000", image: "/rc200.png" },
    right: { brand: "Honda", model: "SP125", price: "₹ 87,000", image: "/rc200.png" },
    label: "Raider 125 Vs SP125"
  }
];

const Section7 = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-3 px-4 relative">
      <h1 className="text-black text-2xl font-semibold mb-4">Compare Bikes</h1>

      {/* Scroll buttons */}
      <button
        onClick={() => scroll(-400)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
      >
        <FaChevronLeft className="text-black" />
      </button>

      <button
        onClick={() => scroll(400)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
      >
        <FaChevronRight className="text-black" />
      </button>

      {/* Scrollable card container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 pb-4 scroll-smooth scrollbar-hide px-10"
      >
        {compareData.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 border bg-white border-gray-300 rounded-2xl pt-4 w-[400px]"
          >
            <div className="flex">
              <div className="w-[200px] relative text-black">
                <div className="border-r border-r-gray-300">
                  <img src={item.left.image} alt="" className="hover:scale-125" />
                </div>
                <h1 className="text-[12px] text-black px-4">{item.left.brand}</h1>
                <p className="font-semibold text-[14px] px-4">{item.left.model}</p>
                <p className="px-4 text-[12px] font-semibold">{item.left.price}</p>
                <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
                <div className="absolute border border-black bg-white text-red-500 p-1 text-xs size-6 rounded-full -right-3 top-12">
                  VS
                </div>
              </div>
              <div className="w-[200px] text-black">
                <img src={item.right.image} alt="" className="hover:scale-125"  />
                <h1 className="text-[12px] text-black px-4">{item.right.brand}</h1>
                <p className="font-semibold text-[14px] px-4">{item.right.model}</p>
                <p className="px-4 text-[12px] font-semibold">{item.right.price}</p>
                <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
              </div>
            </div>
            <button className="text-blue-500 border border-blue-400 rounded-xl p-2 font-semibold w-full mt-2">
              {item.label}
            </button>
            
          </div>
          
        ))}
      </div>
            <button className="text-[#0979b6] font-semibold flex items-center mt-4">Compare Bikes of Your Choice <MdOutlineKeyboardArrowRight className="text-2xl"/></button>
      
    </div>
  );
};

export default Section7;

