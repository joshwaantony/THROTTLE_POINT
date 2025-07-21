

"use client";
import React, { useState } from "react";

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
  {
    id: 5,
    image: "KTM-Duke-390.png",
    title: "KTM Duke 390 New Color Launched",
    author: "By Raj Sharma",
    time: "2 days ago",
    description:
      "The new color variant of the Duke 390 adds more style while retaining the aggressive performance.",
  },
  {
    id: 6,
    image: "Royal-Enfield-Meteor-350.png",
    title: "Royal Enfield Meteor 350 Gets Price Drop",
    author: "By Priya Das",
    time: "3 days ago",
    description:
      "Royal Enfield drops prices of Classic 350 to make it more competitive in the mid-segment cruiser market.",
  },
  {
    id: 7,
    image: "mt15.png",
    title: "Yamaha MT-15 V2: All You Need to Know",
    author: "By Arjun Mehta",
    time: "4 days ago",
    description:
      "MT-15 V2 offers aggressive looks and VVA technology with impressive fuel economy.",
  },
  {
    id: 8,
    image: "Suzuki-Gixxer-SF-250.png",
    title: "Suzuki Gixxer 250 Sporty Yet Efficient",
    author: "By Neha Joshi",
    time: "5 days ago",
    description:
      "Gixxer 250 delivers sporty looks and strong mileage with Suzuki reliability.",
  },
  {
    id: 9,
    image: "Interceptor-650.png",
    title: "Interceptor 650: Best Twin Under 4L?",
    author: "By Karan Malhotra",
    time: "1 week ago",
    description:
      "Royal Enfield’s Interceptor continues to impress with retro looks and parallel twin engine.",
  },
];

export default function SpecialReport() {
  const [currentPage, setCurrentPage] = useState(1);
  const bikesPerPage = 6;

  const totalPages = Math.ceil(bikes.length / bikesPerPage);
  const startIndex = (currentPage - 1) * bikesPerPage;
  const currentBikes = bikes.slice(startIndex, startIndex + bikesPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentBikes.map((bike) => (
          <div
            key={bike.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden"
          >
            <img
              src={`/${bike.image}`}
              alt={bike.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{bike.title}</h2>
              <div className="flex justify-between text-gray-500 text-sm mb-3">
                <span>{bike.author}</span>
                <span>{bike.time}</span>
              </div>
              <p className="text-gray-700 text-sm">{bike.description}</p>
              <div className="text-right mt-4">
                <button className="text-blue-600 hover:underline font-medium text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
         Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
