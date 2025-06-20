

// import React, { useEffect, useRef, useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { RiMotorbikeLine } from "react-icons/ri";
// import { GiScooter, GiElectric, GiWallet } from "react-icons/gi";
// import { GrCompare } from "react-icons/gr";
// import { MdBikeScooter, MdOutlineSell, MdOutlineReviews } from "react-icons/md";
// import { TbNews } from "react-icons/tb";
// import { SlCalculator } from "react-icons/sl";
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

// const Sidebar = ({ onClose }) => {
//   const sidebarRef = useRef();
//   const [expandedItem, setExpandedItem] = useState(null);

//   const toggleItem = (itemName) => {
//     setExpandedItem(expandedItem === itemName ? null : itemName);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

//   return (
//     <div
//       ref={sidebarRef}
//       className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-300"
//     >
//       {/* Close Button */}
//       <button
//         className="text-[#06060638] font-semibold mb-4 pl-56 pt-2 hover:scale-110 transition-transform duration-300"
//         onClick={onClose}
//       >
//         ✖
//       </button>

//       <div className="flex flex-col gap-4 px-4">
//         <NavItem icon={<IoHomeOutline />} text="Home" />

//         {/* Expandable Items */}
//         <ExpandableNavItem
//           icon={<RiMotorbikeLine />}
//           title="New Bikes"
//           isOpen={expandedItem === "NewBikes"}
//           toggle={() => toggleItem("NewBikes")}
//           options={["Find New Bikes", "Upcoming Bikes", "Popular Bikes"]}
//         />
//         <ExpandableNavItem
//           icon={<GiScooter />}
//           title="New Scooters"
//           isOpen={expandedItem === "NewScooters"}
//           toggle={() => toggleItem("NewScooters")}
//           options={["Find New Scooters", "Upcoming Scooters", "Best Scooters"]}
//         />
//         <ExpandableNavItem
//           icon={<GiElectric />}
//           title="Electric Bikes"
//           isOpen={expandedItem === "ElectricBikes"}
//           toggle={() => toggleItem("ElectricBikes")}
//           options={["Top Electric Bikes", "Upcoming EVs", "Compare EVs"]}
//         />
//         <NavItem icon={<GrCompare />} text="Compare Bikes" />
//         <NavItem icon={<GiWallet />} text="Bike Loan" />

//         <ExpandableNavItem
//           icon={<MdBikeScooter />}
//           title="Used Bikes"
//           isOpen={expandedItem === "UsedBikes"}
//           toggle={() => toggleItem("UsedBikes")}
//           options={["Find Used Bikes", "Sell Your Bike", "Certified Bikes"]}
//         />
//         <ExpandableNavItem
//           icon={<MdOutlineSell />}
//           title="Sell Bikes"
//           isOpen={expandedItem === "SellBikes"}
//           toggle={() => toggleItem("SellBikes")}
//           options={["Sell Now", "Get Quote", "How It Works"]}
//         />

//         <NavItem icon={<MdOutlineReviews />} text="Reviews" />
//         <NavItem icon={<TbNews />} text="News, Videos" />
//         <NavItem icon={<SlCalculator />} text="EMI Calculator" />
//         <NavItem icon={<CgProfile />} text="Profile" />
//       </div>

//       <div className="w-full bg-[#F9F9F9] mt-4 py-4">
//         <h1 className="text-[#514e4e] ps-4 pb-3">Download Mobile App</h1>
//         <div className="w-[100px] flex gap-3 ps-4">
//           <img src="/app-store.svg" alt="App Store" />
//           <img src="/play-store.svg" alt="Play Store" />
//         </div>
//       </div>
//     </div>
//   );
// };

// // Base Nav Item
// const NavItem = ({ icon, text }) => (
//   <div className="flex items-center gap-4 text-black font-semibold cursor-pointer">
//     <div className="text-xl font-light">{icon}</div>
//     <span>{text}</span>
//   </div>
// );

// // Expandable Nav Item Component
// const ExpandableNavItem = ({ icon, title, isOpen, toggle, options }) => {
//   return (
//     <div className="flex flex-col">
//       <button
//         onClick={toggle}
//         className="flex justify-between items-center text-black font-semibold gap-4"
//       >
//         <div className="flex items-center gap-4">
//           <div className="text-xl">{icon}</div>
//           <span>{title}</span>
//         </div>
//         {isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
//       </button>
//       <div
//         className={`ml-8 overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
//         }`}
//       >
//         {options.map((option, idx) => (
//           <div key={idx} className="text-sm text-gray-600 hover:text-black py-1 cursor-pointer">
//             {option}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useEffect, useRef, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiMotorbikeLine } from "react-icons/ri";
import { GiScooter, GiElectric, GiWallet } from "react-icons/gi";
import { GrCompare } from "react-icons/gr";
import {
  MdBikeScooter,
  MdOutlineSell,
  MdOutlineReviews,
} from "react-icons/md";
import { TbNews } from "react-icons/tb";
import { SlCalculator } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Sidebar = ({ onClose }) => {
  const sidebarRef = useRef();
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemName) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-300 translate-x-0"
    >
      {/* Close Button with animation */}
      <button
        className="text-[#060606] font-bold mb-4 pl-56 pt-2 hover:scale-110 transition-transform duration-300"
        onClick={onClose}
      >
        ✖
      </button>

      <div className="flex flex-col gap-7 px-4">
        <NavItem icon={<IoHomeOutline />} text="Home" />

        <ExpandableNavItem
          icon={<RiMotorbikeLine />}
          title="New Bikes"
          isOpen={expandedItem === "NewBikes"}
          toggle={() => toggleItem("NewBikes")}
          options={["Find New Bikes", "Upcoming Bikes", "Popular Bikes"]}
        />

        <ExpandableNavItem
          icon={<GiScooter />}
          title="New Scooters"
          isOpen={expandedItem === "NewScooters"}
          toggle={() => toggleItem("NewScooters")}
          options={["Find New Scooters", "Upcoming Scooters", "Best Scooters"]}
        />

        {/* Changed to normal NavItems (no dropdown) */}
        <NavItem icon={<GiElectric />} text="Electric Bikes" />
        <NavItem icon={<GrCompare />} text="Compare Bikes" />
        <NavItem icon={<GiWallet />} text="Bike Loan" />
        <NavItem icon={<MdBikeScooter />} text="Used Bikes" />

        <ExpandableNavItem
          icon={<MdOutlineSell />}
          title="Sell Bikes"
          isOpen={expandedItem === "SellBikes"}
          toggle={() => toggleItem("SellBikes")}
          options={["Sell Now", "Get Quote", "How It Works"]}
        />

        <NavItem icon={<MdOutlineReviews />} text="Reviews" />
        <NavItem icon={<TbNews />} text="News, Videos" />
        <NavItem icon={<SlCalculator />} text="EMI Calculator" />
        <NavItem icon={<CgProfile />} text="Profile" />
      </div>

      <div className="w-full bg-[#F9F9F9] mt-4 py-4">
        <h1 className="text-[#514e4e] ps-4 pb-3">Download Mobile App</h1>
        <div className="w-[100px] flex gap-3 ps-4">
          <img src="/app-store.svg" alt="App Store" />
          <img src="/play-store.svg" alt="Play Store" />
        </div>
      </div>
    </div>
  );
};

// Basic NavItem
const NavItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-black font-semibold cursor-pointer hover:text-green-700 transition">
    <div className="text-xl font-light">{icon}</div>
    <span>{text}</span>
  </div>
);

// Expandable NavItem
const ExpandableNavItem = ({ icon, title, isOpen, toggle, options }) => {
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
        className={`ml-8 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((option, idx) => (
          <div
            key={idx}
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
