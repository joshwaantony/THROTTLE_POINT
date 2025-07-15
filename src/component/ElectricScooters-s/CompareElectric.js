    "use client";
    
    import React, { useRef } from "react";
    import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
    import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function CompareElectric() {

    
    

    
    const compareData = [
     {
    left: { brand: "TVS", model: "Jupiter 125", price: "₹ 85,000", image: "/jupiter.png" },
    right: { brand: "Honda", model: "Activa 125", price: "₹ 88,000", image: "/activa.png" },
    label: "Jupiter 125 Vs Activa 125"
  },
  {
    left: { brand: "Suzuki", model: "Access 125", price: "₹ 83,000", image: "/acces.png" },
    right: { brand: "Yamaha", model: "Fascino 125", price: "₹ 81,500", image: "/fascino125.png" },
    label: "Access 125 Vs Fascino 125"
  },
  {
    left: { brand: "TVS", model: "NTorq 125", price: "₹ 89,000", image: "/ntroq.png" },
    right: { brand: "Hero", model: "Maestro Edge 125", price: "₹ 86,000", image: "/maestro125.png" },
    label: "NTorq 125 Vs Maestro Edge 125"
  },
  {
    left: { brand: "Ather", model: "450X", price: "₹ 1,35,000", image: "/ather450x.png" },
    right: { brand: "Ola", model: "S1 Air", price: "₹ 1,20,000", image: "/ola-s1-air.png" },
    label: "Ather 450X Vs Ola S1 Air"
  },
  {
    left: { brand: "Bajaj", model: "Chetak Electric", price: "₹ 1,30,000", image: "/chetak.png" },
    right: { brand: "TVS", model: "iQube Electric", price: "₹ 1,25,000", image: "/iqube.png" },
    label: "Chetak Vs iQube"
  },
  {
    left: { brand: "Yamaha", model: "Ray ZR 125", price: "₹ 84,000", image: "/rayzr.png" },
    right: { brand: "Honda", model: "Dio", price: "₹ 78,000", image: "/dio.png" },
    label: "Ray ZR 125 Vs Dio"
  },
  {
    left: { brand: "Hero", model: "Pleasure+", price: "₹ 76,000", image: "/pleasure.png" },
    right: { brand: "TVS", model: "Scooty Zest 110", price: "₹ 75,000", image: "/zest110.png" },
    label: "Pleasure+ Vs Zest 110"
  },
  {
    left: { brand: "Suzuki", model: "Burgman Street", price: "₹ 95,000", image: "/burgman.png" },
    right: { brand: "Aprilia", model: "SR 125", price: "₹ 1,00,000", image: "/sr125.png" },
    label: "Burgman Street Vs SR 125"
  },
  {
    left: { brand: "Honda", model: "Grazia 125", price: "₹ 87,000", image: "/grazia.png" },
    right: { brand: "TVS", model: "Jupiter ZX", price: "₹ 90,000", image: "/jupiterzx.png" },
    label: "Grazia 125 Vs Jupiter ZX"
  },
  {
    left: { brand: "Okinawa", model: "PraisePro", price: "₹ 99,000", image: "/praisepro.png" },
    right: { brand: "Ampere", model: "Magnus EX", price: "₹ 98,000", image: "/Ampere.png" },
    label: "PraisePro Vs Magnus EX"
  }
    ];
    
   
      const scrollRef = useRef(null);
    
      const scroll = (scrollOffset) => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
        }
      };
  return    <div className="mt-3  relative ">
       
  
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-400)}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
        >
          <FaChevronLeft className="text-black" />
        </button>
  
        <button
          onClick={() => scroll(400)}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border shadow-md rounded-full p-2"
        >
          <FaChevronRight className="text-black" />
        </button>
  
        {/* Scrollable card container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4  pb-4 scroll-smooth scrollbar-hide pe-10 px-1"
        >
          {compareData.map((item, index) => (
           <div className="mt-5"  key={index}>

             <div
             
              className="flex-shrink-0 border justify-between bg-white border-gray-300 rounded-2xl  w-[250px] sm:w-[400px] "
            >
              <div className="flex mb-">
                <div className="w-[200px] relative text-black">
                  <div className="border-r border-r-gray-300">
                    <img src={item.left.image} alt="" className="hover:scale-125" />
                  </div>
                  <h1 className="text-[10px] sm:text-[12px] text-black px-4">{item.left.brand}</h1>
                  <p className="font-semibold text-[12px] sm:text-[14px] px-4">{item.left.model}</p>
                  <p className="px-4 text-[10px] sm:text-[12px] font-semibold">{item.left.price}</p>
                  <p className="text-gray-400 px-4 text-[12px] sm:text-[14px]">Onwards</p>
                  <div className="absolute border border-black bg-white text-red-500 p-1 text-[6px] sm:text-xs size-4 sm:size-6 rounded-full -right-2 sm:-right-3 top-6 sm:top-12 flex justify-center items-center">
                    VS
                  </div>
                </div>
                <div className="w-[200px] text-black">
                  <img src={item.right.image} alt="" className="hover:scale-125"  />
                  <h1 className="text-[10px] sm:text-[12px] text-black px-4">{item.right.brand}</h1>
                  <p className="font-semibold text-[12px] sm:text-[14px] px-4">{item.right.model}</p>
                  <p className="px-4 text-[10px] sm:text-[12px] font-semibold">{item.right.price}</p>
                  <p className="text-gray-400 px-4 text-[12px] sm:text-[14px]">Onwards</p>
                </div>
              </div>
              <button className="text-xs sm:text-base  text-blue-500 border border-blue-400 rounded-xl p-1 sm:p-2 font-semibold w-full mt-2">
                {item.label}
              </button>
              
            </div>
           </div>
            
          ))}
        </div>
        
      </div>
}

export default CompareElectric;
