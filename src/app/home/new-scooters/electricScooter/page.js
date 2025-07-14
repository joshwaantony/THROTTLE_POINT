"use client";
import CompareScooters from "@/component/new-scooters-s/CompareScooters";
import ScooterCard from "@/component/new-scooters-s/ScooterCard";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Page() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="px-6 md:px-12 lg:px-44">
      <h1 className="text-black text-2xl font-extrabold mt-12">
        Electric Scooter
      </h1>
      <p className="text-black mt-6">
        We have put together a complete list of the best electric scooters in
        India to suit your requirements. Bajaj Chetak, VIDA VX2 and TVS iQube
        are the 3 most popular Electric scooters at the moment. If interested,
        you can also explore electric bikes. Currently, the best electric scooty
        in India is BGauss BG RUV 350 based on our user reviews. The most
        affordable electric scooter in India is Gig by OLA which is priced at
        Rs. 39,999. The electric scooty which has the highest speed in India
        with a top speed of 125 kmph is Ultraviolette Tesseract. If you are
        looking for a scooter which has the least charging time, then you could
        go for Okinawa Praise which has a charging time of 3 Hrs.
      </p>

      {!showTable && (
        <div className="flex justify-end items-center mt-4">
          <button
            className="text-[#0979B6] text-[14px] font-bold cursor-pointer transition-all duration-300 hover:underline"
            onClick={() => setShowTable(true)}
          >
            Read More
          </button>
        </div>
      )}

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showTable ? "max-h-[1000px] opacity-100 mt-10" : "max-h-0 opacity-0"
        }`}
      >
        <h1 className="text-black text-2xl font-extrabold">
          Best Electric Scooter Price in India 2025
        </h1>
        <div className="p-4">
          <div className="rounded-xl border border-gray-400 overflow-hidden">
            <div className="h-[300px] overflow-y-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="sticky top-0 z-10 bg-gray-300 text-black">
                  <tr>
                    <th className="py-5 px-4 border-b border-gray-400 text-[#6F6F6F] text-xl border-r bg-gray-300">
                      MODEL
                    </th>
                    <th className="py-5 px-4 border-b border-gray-400 text-[#6F6F6F] text-xl bg-gray-300">
                      On-Road Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index} className="bg-white text-black">
                      <td className="py-4 px-4 border-b border-gray-300 text-xl border-r">
                        Bike Model {index + 1}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-xl">
                        ₹ {(1.5 + index * 0.1).toFixed(2)} Lakhs
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center mt-2">
          <button
            className="text-[#0979B6] text-[14px] font-bold cursor-pointer transition-all duration-300 hover:underline"
            onClick={() => setShowTable(false)}
          >
            Collapse
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-black mb-6">
          Top 10 Scooters in India
        </h1>

        <ScooterCard />
        <div className="flex items-center gap-2 font-bold text-[#0979B6] cursor-pointer">
          <button>Load More</button>
          <FaChevronRight />
        </div>
        <h1 className="text-2xl font-bold text-black mt-6">
          Best Scooters Comparison
        </h1>
        <div className="mb-20">
          <CompareScooters />
        </div>
      </div>
    </div>
  );
}

export default Page;
