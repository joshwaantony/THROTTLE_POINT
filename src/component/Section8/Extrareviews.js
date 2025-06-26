


"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Extrareviews() {
  const scrollRef = useRef(null);

  // Define the bikes/news data
  const bikes = [
     {
    id: 1,
    image: "/duke-200.png",
    title: "KTM Duke 200 2025 Edition Launched",
    author: "By Rahul Sharma",
    time: "2 hours ago",
    description:
      "KTM has unveiled the 2025 Duke 200 with a brand-new color scheme and improved suspension.",
  },
  {
    id: 2,
    image: "/Hornet-2.0.png",
    title: "Honda Hornet 2.0 Gets Cosmetic Upgrade",
    author: "By Sneha Verma",
    time: "4 hours ago",
    description:
      "The 2025 Honda Hornet 2.0 now features new graphics, LED headlamp and a fully digital console.",
  },
  {
    id: 3,
    image: "/SP125.png",
    title: "Honda SP125: BS6 Phase 2 Model Arrives",
    author: "By Karthik Iyer",
    time: "8 hours ago",
    description:
      "Honda has launched the BS6 Phase 2 compliant SP125, promising better efficiency and performance.",
  },
  {
    id: 4,
    image: "/Xtreme-160R.png",
    title: "Hero Xtreme 160R Stealth Edition Unveiled",
    author: "By Priya Menon",
    time: "11 hours ago",
    description:
      "Hero MotoCorp introduces the Xtreme 160R Stealth Edition with matte black finish and Bluetooth console.",
  },
    // Add more articles as needed
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
    <div className="relative mt-6">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Scrollable News Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth px-10"
      >
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="border border-gray-300 rounded-2xl min-w-[250px] sm:min-w-[300px] xl:min-w-[350px]  p-2 bg-gray-100"
          >
            <img
              src={bike.image}
              className=" drop-shadow-slate-950 rounded-2xl w-full h-[150px] sm:h-[200px] object-cover hover:scale-125"
              alt={bike.title}
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-black font-semibold text-[15px] sm:text-xl  ">{bike.title}</h1>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <span className="text-black font-medium">{bike.author}</span>
                </p>
                <p>{bike.time}</p>
              </div>
              <p className="text-gray-600 text-[12px] sm:text-sm">{bike.description}</p>
              <div className="flex justify-end">
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  Read More
                </button>
              </div>
            </div>
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
    </div>
  );
}

export default Extrareviews ;


