"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { IoHomeOutline } from "react-icons/io5";
import { RiMotorbikeLine } from "react-icons/ri";
import { GiScooter, GiElectric, GiWallet } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";
import { MdBikeScooter, MdOutlineSell, MdOutlineReviews } from "react-icons/md";
import { TbNews } from "react-icons/tb";
import { SlCalculator } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Sidebar = ({ onClose }) => {
  const sidebarRef = useRef();
  const [expandedItem, setExpandedItem] = useState(null);
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const toggleItem = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeWithAnimation();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeWithAnimation = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <div className="fixed inset-0 z-40 flex pt-[100px] sm:pt-20">
      <div className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm" />

      <div
        ref={sidebarRef}
        className={`relative z-50 h-full w-64 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-[#060606] font-bold mb-4 pl-56 pt-2 hover:scale-110 transition-transform duration-300"
          onClick={closeWithAnimation}
        >
          ✖
        </button>

        {/* Nav Items */}
        <div className="flex flex-col gap-7 px-4">
          <NavItem
            icon={<IoHomeOutline />}
            text="Home"
            path="/home"
            closeSidebar={closeWithAnimation}
          />

          <ExpandableNavItem
            icon={<RiMotorbikeLine />}
            title="New Bikes"
            itemKey="NewBikes"
            isOpen={expandedItem === "NewBikes"}
            toggle={() => toggleItem("NewBikes")}
            options={[
              "Find New Bikes",
              "Upcoming Bikes",
              "Locate Showrooms",
              "Check On-Road Price",
            ]}
            closeSidebar={closeWithAnimation}
          />

          <ExpandableNavItem
            icon={<GiScooter />}
            title="New Scooters"
            itemKey="NewScooters"
            isOpen={expandedItem === "NewScooters"}
            toggle={() => toggleItem("NewScooters")}
            options={[
              "Find New Scooters",
              "Electric Scooter",
              "Upcoming Scooters",
            ]}
            closeSidebar={closeWithAnimation}
          />

          <NavItem
            icon={<GiElectric />}
            text="Electric Bikes"
            path="/home/electric-bikes/electricpage"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<GrCompare />}
            text="Compare Bikes"
            path="/home/compare-bikes/compare"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<GiWallet />}
            text="Bike Loan"
            path="/home/bike-loan/emi"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<MdBikeScooter />}
            text="Used Bikes"
            path="/home/used-bike/used"
            closeSidebar={closeWithAnimation}
          />

          <ExpandableNavItem
            icon={<MdOutlineSell />}
            title="Sell Bikes"
            itemKey="SellBikes"
            isOpen={expandedItem === "SellBikes"}
            toggle={() => toggleItem("SellBikes")}
            options={["List Bike", "View My Listings",]}
            closeSidebar={closeWithAnimation}
          />

          <NavItem
            icon={<MdOutlineReviews />}
            text="Reviews"
            path="/home/review"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<TbNews />}
            text="News, Videos"
            path="/home/news"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<SlCalculator />}
            text="EMI Calculator"
            path="/home/emi"
            closeSidebar={closeWithAnimation}
          />
          <NavItem
            icon={<CgProfile />}
            text="Profile"
            path="/home/Login"
            closeSidebar={closeWithAnimation}
          />
        </div>

        {/* Footer App Links */}
        <div className="w-full bg-[#F9F9F9] mt-4 py-4">
          <h1 className="text-[#514e4e] ps-4 pb-3">Download Mobile App</h1>
          <div className="w-[100px] flex gap-3 ps-4">
            <img src="/app-store.svg" alt="App Store" />
            <img src="/play-store.svg" alt="Play Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Nav Item
const NavItem = ({ icon, text, path, closeSidebar }) => {
  const router = useRouter();

  const handleClick = () => {
    if (path) {
      router.push(path);
      closeSidebar();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-4 text-black font-semibold cursor-pointer hover:text-green-700 transition"
    >
      <div className="text-xl font-light">{icon}</div>
      <span>{text}</span>
    </div>
  );
};

// ✅ Expandable Item
const ExpandableNavItem = ({
  icon,
  title,
  itemKey,
  isOpen,
  toggle,
  options,
  closeSidebar,
}) => {
  const router = useRouter();

  const handleClick = (option) => {
    const routes = {
      "Find New Bikes": "/home/new-bikes/newbikes2",
      "Upcoming Bikes": "/home/new-bikes/Upcoming",
      "Locate Showrooms": "/home/new-bikes/Showrooms",
      "Check On-Road Price": "/home/new-bikes/OnroadPrice",
      "Find New Scooters": "home/new-scooters/newscooter",
      "Upcoming Scooters": "home/new-scooters/upcomingscooter",
      "Best Scooters": "/home/best-scooters",
      "List Bike": "/home/sell-bike/list-bike",
      "View My Listings": "/home/sell-bike/view-my-listing",
     
      "Electric Scooter": "home/new-scooters/electricScooter",
    };

    const route = routes[option];
    if (route) {
      router.push(route);
      closeSidebar();
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggle}
        className="flex justify-between items-center text-black font-semibold gap-4 hover:text-green-700 transition"
      >
        <div className="flex items-center gap-4">
          <div className="text-xl">{icon}</div>
          <span>{title}</span>
        </div>
        {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
      </button>
      <div
        className={`ml-8 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((option, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(option)}
            className="text-sm text-gray-600 hover:text-black py-1 cursor-pointer"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
