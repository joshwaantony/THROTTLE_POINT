

"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation"; // 👈 Import useRouter
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Upcomingindia() {
  const scrollRef = useRef(null);
  const router = useRouter(); // 👈 Initialize router

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
      title: "Upcoming KTM X200",
      price: "₹ 1,00,000",
      image: "/ktm1000.png",
      description: "Jul 2025 (Tentative)",
    },
    {
      id: 2,
      title: "Yamaha R25",
      price: "₹ 3,10,000",
      image: "/Yamaha R25.jpg",
      description: "Aug 2025 (Tentative)",
    },
    {
      id: 3,
      title: "Royal Enfield Roadster 450",
      price: "₹ 2,80,000",
      image: "/Royal Enfield Roadster 450.jpg",
      description: "Sep 2025 (Tentative)",
    },
    {
      id: 4,
      title: "TVS Apache RTR 310",
      price: "₹ 2,45,000",
      image: "/TVS Apache RTR 310.jpg",
      description: "Oct 2025 (Tentative)",
    },
    {
      id: 5,
      title: "Honda CB350X",
      price: "₹ 2,20,000",
      image: "/Honda CB350X.jpg",
      description: "Nov 2025 (Tentative)",
    },
    {
      id: 6,
      title: "Bajaj Pulsar NS400",
      price: "₹ 1,90,000",
      image: "/Bajaj Pulsar NS400.avif",
      description: "Dec 2025 (Tentative)",
    },
    {
      id: 7,
      title: "Suzuki Gixxer 300",
      price: "₹ 2,10,000",
      image: "/Suzuki Gixxer 300.jpg",
      description: "Jan 2026 (Tentative)",
    },
  ];

  return (
    <div>
      <div className="mt-10 relative">
        <h1 className="text-black text-2xl font-extrabold mb-4">Best Bikes of July 2025</h1>

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

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 px-8"
        >
          {topBikes.map((bike) => (
            <div
              key={bike.id}
              className="border rounded-2xl min-w-[300px] max-w-[300px] shadow bg-white"
            >
              <img
                src={bike.image}
                alt={bike.title}
                className="rounded-t-2xl w-full h-[180px] object-cover"
              />
              <div className="rounded-b-2xl bg-[#F9F9F9] px-2 py-3">
                <h1 className="text-black font-bold">{bike.title}</h1>
                <p className="text-black font-bold mt-2">
                  {bike.price}{" "}
                  <span className="text-[#6F6F6F] font-light">Onwards</span>
                </p>
                <p className="text-[#6F6F6F]">Estimated Price</p>
                <p className="font-bold text-black mt-2">
                  {bike.description}{" "}
                  <span className="text-[#6F6F6F] font-light text-[12px]">
                    Expected Launch
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="text-[#0979B6] font-semibold flex items-center my-4">
        All Upcoming Bikes <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>

      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={() => router.push("/home")} // 👈 Navigates to homepage
          className="text-[13px] text-blue-500 cursor-pointer"
        >
          Home
        </button>
        <MdOutlineKeyboardArrowRight className="text-[#6F6F6F]" />
      </div>
    </div>
  );
}

export default Upcomingindia;
