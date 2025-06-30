    "use client";
    
    import React, { useRef } from "react";
    import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
    import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Cruisers() {

    
    

    
    const compareData = [
      {
        left: { brand: "Royal Enfield", model: "Hunter 350", price: "₹ 1,80,460", image: "/_hunter.png" },
        right: { brand: "Yamaha", model: "R15 V4", price: "₹ 1,80,000", image: "/r15-v4.png" },
        label: "Hunter 350 Vs R15 V4"
      },
      {
        left: { brand: "Bajaj", model: "Pulsar NS200", price: "₹ 1,49,000", image: "/NS200.png" },
        right: { brand: "TVS", model: "Apache RTR ", price: "₹ 1,42,000", image: "/RR310.png" },
        label: "NS200 Vs Apache 200"
      },
      {
        left: { brand: "Royal Enfield", model: "Classic 350", price: "₹ 1,93,000", image: "/350.png" },
        right: { brand: "Honda", model: "CB350", price: "₹ 2,00,000", image: "/CB350.png" },
        label: "Classic 350 Vs CB350"
      },
      {
        left: { brand: "KTM", model: "Duke 200", price: "₹ 1,96,000", image: "/duke-200.png" },
        right: { brand: "Yamaha", model: "MT-15", price: "₹ 1,68,000", image: "/mt15.png" },
        label: "Duke 200 Vs MT-15"
      },
      {
        left: { brand: "Suzuki", model: "Gixxer SF", price: "₹ 1,35,000", image: "/Suzuki-Gixxer-SF-250.png" },
        right: { brand: "Yamaha", model: "FZ-S FI", price: "₹ 1,30,000", image: "/FZ-S-FI.png" },
        label: "Gixxer SF Vs FZ-S"
      },
      {
        left: { brand: "Hero", model: "Xtreme 160R", price: "₹ 1,27,000", image: "/Xtreme-160R.png" },
        right: { brand: "Honda", model: "Hornet 2.0", price: "₹ 1,36,000", image: "/Hornet-2.0.png" },
        label: "Xtreme 160R Vs Hornet 2.0"
      },
      {
        left: { brand: "TVS", model: "Raider 125", price: "₹ 93,000", image: "/rider.png" },
        right: { brand: "Honda", model: "SP125", price: "₹ 87,000", image: "/SP125.png" },
        label: "Raider 125 Vs SP125"
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
           <div className="mt-5">
             <div
              key={index}
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

export default Cruisers;
