"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Scooters() {
  const scrollRef = useRef(null);

  const bikes = [
    {
      id: 1,
      name: "Honda Activa 6g",
      image: "/activa.png",
      price: "₹ ₹1,18,444",
      location: "On-Road Price, Washim",
    },
    {
      id: 2,
      name: " TVS Jupiter",
      image: "/jupiter.png",
      price: "₹  98,288",
      location: "On-Road Price, Pune",
    },
    {
      id: 3,
      name: "Yamaha Aerox 155",
      image: "/_Aerox-155.png",
      price: "₹ 1,54,193.",
      location: "On-Road Price, Mumbai",
    },
    {
      id: 4,
      name: "TVS NTORQ 125",
      image: "/ntroq.png",
      price: "₹ 1,18,605",
      location: "On-Road Price, Nagpur",
    },
    {
      id: 5,
      name: "Suzuki Access 125",
      image: "/acces.png",
      price: "₹  1,05,582",
      location: "On-Road Price, Nashik",
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
    <div className="relative mt-3">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-200"
      >
        <FaChevronLeft className="text-gray-700"/>
      </button>

      {/* Scrollable Items */}
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
              className="  drop-shadow-slate-950 rounded-2xl w-full h-[150px] sm:h-[200px] object-cover hover:scale-125"
              alt={bike.name}
            />
            <div className="flex flex-col gap-2 mt-2">
              <h1 className="text-black font-semibold text-lg sm:text-xl">{bike.name}</h1>
              <p className="text-gray-400">
                <span className="font-bold text-black">{bike.price}</span> Onwards
              </p>
              <p className="text-black text-sm">{bike.location}</p>
              <button className="text-green-700 border border-green-700 rounded-xl p-2 w-[160px] text-xs">
                Check On-Road Price
              </button>
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

export default Scooters;
