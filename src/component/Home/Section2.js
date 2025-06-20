

"use client"
import React, { useState } from "react";
import Trending from "../Section2/Trending";
import Popular from "../Section2/Popular";
import Electric from "../Section2/Electric";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Upcoming from "../Section2/Upcoming";
function Section2() {
  const [activeTab, setActiveTab] = useState("TRENDING");

  const renderComponent = () => {
    switch (activeTab) {
      case "TRENDING":
        return <Trending />;
      case "POPULAR":
        return <Popular />;
      case "ELECTRIC":
        return <Electric />;
      case "ADVENTURE":
        return <Upcoming />;
      default:
        return <Trending />;
    }
  };

  const tabs = ["TRENDING", "POPULAR", "ELECTRIC", "ADVENTURE"];

  return (
    <div >
      <h1 className="text-black text-2xl font-semibold">Featured Bikes</h1>

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
      <button className="text-[#0979b6] font-semibold flex items-center mt-4">All Trending Bikes <MdOutlineKeyboardArrowRight className="text-2xl"/></button>
    </div>
  );
}

export default Section2;
