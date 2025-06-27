



"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function News() {
  const scrollRef = useRef(null);

  // Define the bikes/news data
  const bikes = [
    {
    id: 1,
    image: "rc200.png",
    title: "KTM RC 200 New Gen Launch: What's New?",
    author: "By Rohan Mehta",
    time: "3 hours ago",
    description:
      "KTM has launched the latest RC 200 with upgraded design, enhanced aerodynamics, and new features for 2025.",
  },
  {
    id: 2,
    image: "NS200.png",
    title: "Bajaj NS200 2025 Edition Revealed",
    author: "By Sneha Kapoor",
    time: "6 hours ago",
    description:
      "The NS200 now comes with LED lighting, dual-channel ABS, and updated color variants to compete in the 200cc segment.",
  },
  {
    id: 3,
    image: "r15-v4.png",
    title: "Yamaha R15 V4 Updated With Smart Features",
    author: "By Manav Desai",
    time: "9 hours ago",
    description:
      "Yamaha brings in smartphone connectivity, traction control, and a quick shifter in the latest R15 V4 lineup.",
  },
  {
    id: 4,
    image: "RR310.png",
    title: "TVS Apache RR310 Race Kit Now Available",
    author: "By Ananya Iyer",
    time: "1 day ago",
    description:
      "TVS launches the Race Kit for RR310, offering adjustable suspension and new color schemes for track lovers.",
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
              src={`/${bike?.image}`}
              className=" drop-shadow-slate-950 rounded-2xl w-full h-[150px] sm:h-[200px] object-cover hover:scale-125"
              alt={bike.title}
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-black font-semibold text-[15px] sm:text-xl">{bike.title}</h1>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <span className="text-black  font-medium">{bike.author}</span>
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

export default News;

