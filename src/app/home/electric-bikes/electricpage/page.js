"use client";
import CompareElectric2 from "@/component/ElectricBikes-s/CompareElectric2";
import ElectricCard2 from "@/component/ElectricBikes-s/ElectricCard2";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function Page() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="px-6 md:px-12 lg:px-44">
      <h1 className="text-black text-2xl font-extrabold mt-12">
        Electric Bike
      </h1>
      <p className="text-black mt-6">
        Planning to buy an electric bike or electric scooter? Well, we know that
        fuel type is one of the most crucial things while buying a two wheeler
        and with so many options available out there, it gets really difficult
        to find a good option which suits your requirement. Hence, we have put
        together a complete list of best electric bikes in India. These are all
        practical runabouts whose performance isn't quite on par with their
        fossil-fuel-powered counterparts, but they are ideal for someone with a
        short commute or a run to the market. View the complete list of electric
        bike with information regarding price, images, colours, reviews, driving
        range, charging time, other specifications and features and much more
        for each of these EVs so that you get to choose the best electric bike
        of your choice.
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
        Best Electric Bikes Price in India 2025
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
        <h1 className="text-2xl font-bold text-black mb-6">Electric Bikes</h1>

      <ElectricCard2/>
        <div className="flex items-center gap-2 font-bold text-[#0979B6] cursor-pointer">
          <button>Load More</button>
          <FaChevronRight />
        </div>
        <h1 className="text-2xl font-bold text-black mt-6">
          Compare Electric Bikes
        </h1>
        <div className="mb-20">
          <CompareElectric2 />
        </div>
      </div>
    </div>
  );
}

export default Page;
