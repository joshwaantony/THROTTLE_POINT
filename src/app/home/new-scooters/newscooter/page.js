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
        Best Scooters
      </h1>
      <p className="text-black mt-6">
        Are you planning on buying a scooty? Well, we know that with more than
        10 brands and over 50 scooter options available out there, it gets
        really difficult to pick the best scooty which suits your requirement.
        Hence, we have put together a complete list of best scooters available
        in India to help you pick the really best one. TVS Jupiter, Suzuki
        Access 125 and Honda Activa are the 3 most popular scooters available in
        the two wheeler market. View the complete list of scooters with
        information regarding price, images, mileage, specifications, colors,
        reviews and much more for every scooty. Have a look at the list of best
        scooters in India to find the most suitable scooter for you
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
          Best Scooters in India 2025
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
        <h1 className="text-2xl font-bold text-black mt-6">Best Scooters Comparison</h1>
<div className="mb-20">
          <CompareScooters/>

</div>
      </div>
    </div>
  );
}

export default Page;
