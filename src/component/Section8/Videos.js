




"use client";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { GrLike } from "react-icons/gr";

function Videos() {
  const scrollRef = useRef(null);

  // Replace 'image' with YouTube embed URLs
  const bikes = [
    {
      id: 1,
     videoUrl: "https://www.youtube.com/embed/MSGm8tizmXA",
      title: "Honda Transalp XL750 Launched: Top 5 Highlights",
      author: "Ajinkya Lad",
      time: "17 hours ago",
      description:
        "Honda has launched the 2025 Transalp XL750 in India at a price of Rs. 11 lakh (ex-showroom).",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/ulQktwurCG4",
      title: "TVS Apache RR310 Review: Still Worth It?",
      author: "Ajinkya Lad",
      time: "15 hours ago",
      description:
        "We break down what's new with the RR310 in 2025 and whether it's worth your money.",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/0v0N9IE3J2A",
      title: "Royal Enfield 350 Walkaround",
      author: "Ajinkya Lad",
      time: "18 hours ago",
      description:
        "Check out the new Royal Enfield 350 with its latest design and tech upgrades.",
    },
    {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/g7-omet1UYA",
    title: "Yamaha R15 V4 Real Road Test!",
    author: "Ajinkya Lad",
    time: "20 hours ago",
    description:
      "We put the Yamaha R15 V4 through its paces on Indian roads. Full review here!",
  },
   {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/hgsMZcg9JdM",
    title: "Hero Karizma XMR 210 - Full Review",
    author: "Ajinkya Lad",
    time: "22 hours ago",
    description:
      "All you need to know about the Hero Karizma XMR 210, including top speed and features.",
  },
    // Add more entries as needed...
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

      {/* Scrollable Video Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth px-10"
      >
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="border border-gray-300 rounded-2xl min-w-[350px] p-3 bg-white shadow-sm"
          >
            {/* ✅ Embedded YouTube iframe */}
            <iframe
              className="rounded-2xl w-full h-[200px]"
              src={bike.videoUrl}
              title={bike.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="flex flex-col gap-2 mt-3">
              <h1 className="text-black font-semibold text-lg h-16">{bike.title}</h1>
              <div className="flex justify-between text-sm text-gray-500 border-b border-gray-100">
                <p>
                  <span className="text-black font-medium">{bike.author}</span>
                </p>
                <p>{bike.time}</p>
              </div>
              <p className="text-gray-600 text-sm">{bike.description}</p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2 text-black items-center">
                  <MdOutlineRemoveRedEye />
                  <span>196 views</span>
                </div>
                <div className="flex gap-2 text-black items-center">
                  <GrLike />
                  <span>196 Likes</span>
                </div>
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

export default Videos;
