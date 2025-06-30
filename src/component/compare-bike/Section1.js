"use client";
import React, { useState } from "react";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Bike from "./Bike";
import Scooters from "./Scooters";
import Cruisers from "./Cruisers";
import Sports from "./Sports";



function Section1() {
  const [activeTab, setActiveTab] = useState("BIKES");

  const renderComponent = () => {
    switch (activeTab) {
      case "BIKES":
        return <Bike/>
      case "POPULAR":
        return <Scooters/>;
      case "ELECTRIC":
        return <Cruisers />;
      case "ADVENTURE":
        return <Sports/>;
      default:
        return < Bike/>;
    }
  };

  const tabs = ["BIKES", "SCOOTERS", "CRUISERS", "SPORTS"];

  return (
    <div>
      <h1 className="text-black text-base sm:text-2xl font-semibold">
      Popular Comparisons
      </h1>

      {/* Tab Headers */}
      <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors  ${
              activeTab === tab
                ? " text-[10px] sm:text-base text-green-700 border-b-2t border-green-700"
                : "text-gray-500 text-[10px] sm:text-base"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Render selected tab component */}
      <div className="pt-4">{renderComponent()}</div>
     
    </div>
  );
}

export default Section1;
