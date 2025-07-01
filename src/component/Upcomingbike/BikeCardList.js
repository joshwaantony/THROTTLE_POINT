
"use client"



import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const BikeCardList = () => {
  const bikes = [
    {
      name: "VIDA VX2",
      price: "₹ 1,20,000 - ₹ 1,30,000",
      launchDate: "1st July 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Hero Zoom X",
      price: "₹ 98,000 - ₹ 1,05,000",
      launchDate: "15th June 2025",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Honda Flexor",
      price: "₹ 1,10,000 - ₹ 1,25,000",
      launchDate: "28th August 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "TVS Electra",
      price: "₹ 95,000 - ₹ 1,10,000",
      launchDate: "5th September 2025",
      confidence: "Low",
      image: "/f111.webp",
    },
    {
      name: "Yamaha Bolt",
      price: "₹ 1,50,000 - ₹ 1,70,000",
      launchDate: "10th October 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Suzuki Neo",
      price: "₹ 1,25,000 - ₹ 1,35,000",
      launchDate: "22nd July 2025",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Bajaj Thunder",
      price: "₹ 1,40,000 - ₹ 1,55,000",
      launchDate: "3rd November 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Ather Glide",
      price: "₹ 1,10,000 - ₹ 1,25,000",
      launchDate: "9th August 2025",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Revolt RSX",
      price: "₹ 1,20,000 - ₹ 1,30,000",
      launchDate: "12th July 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Ultraviolette S1",
      price: "₹ 1,70,000 - ₹ 1,85,000",
      launchDate: "17th September 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Ola Flash",
      price: "₹ 99,000 - ₹ 1,10,000",
      launchDate: "19th October 2025",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Simple Dot",
      price: "₹ 1,30,000 - ₹ 1,45,000",
      launchDate: "25th August 2025",
      confidence: "Low",
      image: "/f111.webp",
    },
    {
      name: "Bounce X1",
      price: "₹ 90,000 - ₹ 1,05,000",
      launchDate: "1st December 2025",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Tork Magnet",
      price: "₹ 1,60,000 - ₹ 1,75,000",
      launchDate: "11th November 2025",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Ampere Max",
      price: "₹ 85,000 - ₹ 1,00,000",
      launchDate: "13th December 2025",
      confidence: "Low",
      image: "/f111.webp",
    },
    {
      name: "Pure EV F1",
      price: "₹ 92,000 - ₹ 1,05,000",
      launchDate: "5th January 2026",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "Okaya Evoqis",
      price: "₹ 1,45,000 - ₹ 1,60,000",
      launchDate: "21st January 2026",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Kabira A1",
      price: "₹ 1,20,000 - ₹ 1,35,000",
      launchDate: "15th February 2026",
      confidence: "High",
      image: "/f111.webp",
    },
    {
      name: "Oben Rorr",
      price: "₹ 1,10,000 - ₹ 1,25,000",
      launchDate: "8th March 2026",
      confidence: "Medium",
      image: "/f111.webp",
    },
    {
      name: "LML Orion",
      price: "₹ 1,50,000 - ₹ 1,65,000",
      launchDate: "18th March 2026",
      confidence: "High",
      image: "/f111.webp",
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bikes.length / itemsPerPage);

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    start = Math.max(1, end - 4);

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const paginatedBikes = bikes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginatedBikes.map((bike, index) => (
          <div key={index} className="border bg-white rounded shadow p-3">
            <div className="flex gap-4">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-[133px] h-[75px]"
              />
              <div>
                <h1 className="text-black font-bold">{bike.name}</h1>
                <h2 className="text-black font-bold mt-2">{bike.price}</h2>
                <h3 className="text-black text-[12px]">Estimated Price</h3>
                <h4 className="text-black font-bold">{bike.launchDate}</h4>
                <h5 className="text-[#6F6F6F]">Expected launch</h5>
                <h6 className="text-[#6F6F6F] mt-2">
                  Launch confidence:{" "}
                  <span className="text-black font-bold">{bike.confidence}</span>
                </h6>
              </div>
            </div>
            <div className="bg-gray-300 h-[40px] mt-4 flex items-center gap-2 px-3">
              <FaWhatsapp className="text-[#0979B6]" />
              <p className="text-[#0979B6] text-sm">Notify Me on Launch</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-[#E03013] text-white"
          }`}
        >
          Back
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-[#E03013] text-white" : "bg-gray-200 text-black"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-[#E03013] text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BikeCardList;
