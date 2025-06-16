

"use client"
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Scooters from "../Section6/Scooters";
import Bestbikes from "../Section6/Bestbikes";
import Sports from "../Section6/Sports";
import Cruiser from "../Section6/Cruiser";
function Section6() {
  const [activeTab, setActiveTab] = useState("TRENDING");

  const renderComponent = () => {
    switch (activeTab) {
      case "SCOOTERS":
        return <Scooters/>;
      case "BEST MILEAGE BIKES":
        return <Bestbikes />;
      case "SPORTS":
        return <Sports />;
      case "CRUISER":
        return <Cruiser />;
      default:
        return <Scooters />;
    }
  };

  const tabs = ["SCOOTERS", "BEST MILEAGE BIKES", "SPORTS", "CRUISER"];

  return (
    <div >
      <h1 className="text-black text-2xl font-semibold">Trending Bikes of June 2025</h1>

      {/* Tab Headers */}
      <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors ${
              activeTab === tab ? "text-green-700 border-b-2 border-green-700" : "text-gray-500"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Render selected tab component */}
      <div className="pt-4">{renderComponent()}</div>
      <button className="text-[#0979b6] font-semibold flex items-center mt-4">All Cruiser Bikes <MdOutlineKeyboardArrowRight className="text-2xl"/></button>
    </div>
  );
}

export default Section6;
