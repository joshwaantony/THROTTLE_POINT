

"use client"
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Scooters from "../Section6/Scooters";
import Bestbikes from "../Section6/Bestbikes";
import Sports from "../Section6/Sports";
import Cruiser from "../Section6/Cruiser";
import News from "../Section8/News";
import Extrareviews from "../Section8/Extrareviews";
import Videos from "../Section8/Videos";
function Section8() {
  const [activeTab, setActiveTab] = useState("TRENDING");

  const renderComponent = () => {
    switch (activeTab) {
      case "NEWS":
        return <News/>;
      case "EXPERT REVIEWS":
        return <Extrareviews />;
      case "VIDEOS":
        return <Videos />;
      
      default:
        return <News />;
    }
  };

  const tabs = ["NEWS", "EXPERT REVIEWS", "VIDEOS", ];

  return (
    <div className="pt-3" >
      <h1 className="text-black text-base sm:text-2xl font-semibold">Latest Updates</h1>

      {/* Tab Headers */}
      <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors ${
              activeTab === tab ? "text-[10px] sm:text-base text-green-700 border-b-2t border-green-700" : "text-gray-500 text-[10px] sm:text-base"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Render selected tab component */}
      <div className="pt-4">{renderComponent()}</div>
      <button className="text-[#0979b6] font-semibold flex items-center mt-4">All News <MdOutlineKeyboardArrowRight className="text-2xl"/></button>
    </div>
  );
}

export default Section8;
