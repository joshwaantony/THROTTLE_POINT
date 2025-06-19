



"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function News() {
  const scrollRef = useRef(null);

  // Define the bikes/news data
  const bikes = [
    {
      id: 1,
      image: "/rc200.png", // make sure this image exists in /public/news/
      title: "Honda Transalp XL750 Launched: Top 5 Highlights",
      author: " By Ajinkya Lad",
      time: "17 hours ago",
      description:
        "Honda has launched the 2025 Transalp XL750 in India at a price of Rs. 11 lakh (ex-showroom).",
    },
    {
      id: 2,
      image: "/NS200.png",
      title: "Honda Transalp XL750 Launched: Top 5 Highlights",
      author: " By Ajinkya Lad",
      time: "17 hours ago",
      description:
        "The Honda Transalp XL750 gets updated styling, new features and a reworked suspension.",
    },
     {
      id: 3,
      image: "r15-v4.png", // make sure this image exists in /public/news/
      title: "Honda Transalp XL750 Launched: Top 5 Highlights",
      author: " By Ajinkya Lad",
      time: "17 hours ago",
      description:
        "Honda has launched the 2025 Transalp XL750 in India at a price of Rs. 11 lakh (ex-showroom).",
    },
    {
      id: 4,
      image: "/RR310.png",
      title: "Honda Transalp XL750 Launched: Top 5 Highlights",
      author: " By Ajinkya Lad",
      time: "17 hours ago",
      description:
        "The Honda Transalp XL750 gets updated styling, new features and a reworked suspension.",
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
            className="border border-gray-300 rounded-2xl min-w-[350px] p-3 bg-white shadow-sm"
          >
            <img
              src={bike.image}
              className="rounded-2xl w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
              alt={bike.title}
            />
            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-black font-semibold text-lg">{bike.title}</h1>
              <div className="flex justify-between text-sm text-gray-500">
                <p>
                  <span className="text-black font-medium">{bike.author}</span>
                </p>
                <p>{bike.time}</p>
              </div>
              <p className="text-gray-600 text-sm">{bike.description}</p>
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

