

"use client"
import React, { useState } from "react";
import Trending from "../Section2/Trending";
import Popular from "../Section2/Popular";
import Electric from "../Section2/Electric";
import Upcoming from "../Section2/Upcoming";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Brand from "../Section4/Brand";
import Budget from "../Section4/Budget";
import Displacement from "../Section4/Displacement";
import Bodystyle from "../Section4/Bodystyle";
function Section4() {
  const [activeTab, setActiveTab] = useState("TRENDING");

  const renderComponent = () => {
    switch (activeTab) {
      case "BRAND":
        return <Brand />;
      case "BUDGET":
        return <Budget />;
      case "DISPLACEMENT":
        return <Displacement />;
      case "BODYSTYLE":
        return <Bodystyle />;
      default:
        return <Brand />;
    }
  };

  const tabs = ["BRAND", "BUDGET", "DISPLACEMENT", "BODYSTYLE"];

  return (
    <div >
      <h1 className="text-black text-2xl font-semibold">Browse Bikes By</h1>

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
      <div className="pt-4 ps-10">{renderComponent()}</div>
    </div>
  );
}

export default Section4;
