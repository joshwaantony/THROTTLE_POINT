



// "use client";
// import React, { useState } from "react";
// import { FiAlignJustify } from "react-icons/fi";
// import { CiSearch } from "react-icons/ci";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdLanguage } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import Link from "next/link";

// function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [language, setLanguage] = useState("English");

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setLanguageOpen(false);
//     // You can also store this in localStorage or context if needed
//   };

//   return (
//     <>
//       <div className="flex w-full fixed z-50 justify-between bg-white items-center px-4 sm:px-6 md:px-8 py-2 border-b-2 flex-wrap">
//         {/* Left Section: Logo + Toggle */}
//         <div className="flex items-center gap-2">
//           <button onClick={() => setIsSidebarOpen(true)} className="block">
//             <FiAlignJustify className="text-black text-2xl" />
//           </button>
//           <img
//             className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
//             src="/logo.png"
//             alt="logo"
//           />
//           <span className="text-black font-extrabold text-lg sm:text-xl">
//             Throttle Point
//           </span>
//         </div>

//         {/* Right Section */}
//         <div className="relative flex items-center gap-3 mt-2 md:mt-0 flex-wrap md:flex-nowrap">
//           {/* Search */}
//           <div className="flex items-center border border-black rounded-2xl px-4 py-1 sm:px-6 sm:py-2">
//             <input
//               type="search"
//               placeholder="Search"
//               className="placeholder:text-black text-sm sm:text-base outline-none text-black bg-transparent w-full"
//             />
//             <CiSearch className="text-black text-xl sm:text-2xl" />
//           </div>

//           {/* Location Icon */}
//           <IoLocationOutline className="text-black text-xl sm:text-2xl" />

//           {/* Language Icon */}
//           <div className="relative">
//             <button onClick={() => setLanguageOpen(!languageOpen)}>
//               <MdLanguage className="text-black text-xl sm:text-2xl" />
//             </button>

//             {languageOpen && (
//               <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm w-28 z-50">
//                 <div
//                   onClick={() => handleLanguageChange("English")}
//                   className="px-4 py-2 cursor-pointer text-black hover:bg-green-500"
//                 >
//                   🇬🇧 English
//                 </div>
//                 <div
//                   onClick={() => handleLanguageChange("Hindi")}
//                   className="px-4 py-2 cursor-pointer text-black hover:bg-green-500"
//                 >
//                   🇮🇳 Hindi
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Login Button */}
//           <Link
//             href="/Login"
//             className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-green-500 hover:text-white transition"
//           >
//             Login
//           </Link>
//         </div>
//       </div>

//       {/* Sidebar */}
//       {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
//     </>
//   );
// }

// export default Navbar;



// "use client";
// import React, { useState } from "react";
// import { FiAlignJustify } from "react-icons/fi";
// import { CiSearch } from "react-icons/ci";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdLanguage } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import Link from "next/link";

// function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [languageOpen, setLanguageOpen] = useState(false);
//   const [language, setLanguage] = useState("English");
//   const [location, setLocation] = useState("");
//   const [locationError, setLocationError] = useState("");

//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setLanguageOpen(false);
//   };

//   const handleLocationClick = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;

//           // Optional: Reverse geocode to get location name (can be replaced with an API)
//           try {
//             const response = await fetch(
//               `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//             );
//             const data = await response.json();
//             const city = data.address.city || data.address.town || data.address.village || "Unknown location";
//             setLocation(city);
//             setLocationError("");
//           } catch (error) {
//             setLocation("Lat: " + latitude.toFixed(2) + ", Lng: " + longitude.toFixed(2));
//             setLocationError("Could not fetch address name.");
//           }
//         },
//         (error) => {
//           setLocationError("Permission denied or location unavailable.");
//         }
//       );
//     } else {
//       setLocationError("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <>
//       <div className="flex w-full fixed z-50 justify-between bg-white items-center px-4 sm:px-6 md:px-8 py-2 border-b-2 flex-wrap">
//         {/* Left Section */}
//         <div className="flex items-center gap-2">
//           <button onClick={() => setIsSidebarOpen(true)}>
//             <FiAlignJustify className="text-black text-2xl" />
//           </button>
//           <img
//             src="/logo.png"
//             alt="logo"
//             className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
//           />
//           <span className="text-black font-extrabold text-lg sm:text-xl">
//             Throttle Point
//           </span>
//         </div>

//         {/* Right Section */}
//         <div className="relative flex items-center gap-3 mt-2 md:mt-0 flex-wrap md:flex-nowrap">
//           {/* Search */}
//           <div className="flex items-center border border-black rounded-2xl px-4 py-1 sm:px-6 sm:py-2">
//             <input
//               type="search"
//               placeholder="Search"
//               className="placeholder:text-black text-sm sm:text-base outline-none text-black bg-transparent w-full"
//             />
//             <CiSearch className="text-black text-xl sm:text-2xl" />
//           </div>

//           {/* Location Icon */}
//           <div className="relative">
//             <button onClick={handleLocationClick}>
//               <IoLocationOutline className="text-black text-xl sm:text-2xl" />
//             </button>
//             {location && (
//               <div className="absolute top-8 right-0 bg-white border px-3 py-1 rounded shadow text-sm text-black z-50">
//                 📍 {location}
//               </div>
//             )}
//             {locationError && (
//               <div className="absolute top-8 right-0 bg-red-100 border border-red-400 text-red-700 px-3 py-1 rounded shadow text-sm z-50">
//                 {locationError}
//               </div>
//             )}
//           </div>

//           {/* Language Icon */}
//           <div className="relative">
//             <button onClick={() => setLanguageOpen(!languageOpen)}>
//               <MdLanguage className="text-black text-xl sm:text-2xl" />
//             </button>

//             {languageOpen && (
//               <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm w-28 z-50">
//                 <div
//                   onClick={() => handleLanguageChange("English")}
//                   className="px-4 py-2 cursor-pointer text-black hover:bg-green-500"
//                 >
//                   🇬🇧 English
//                 </div>
//                 <div
//                   onClick={() => handleLanguageChange("Hindi")}
//                   className="px-4 py-2 cursor-pointer text-black hover:bg-green-500"
//                 >
//                   🇮🇳 Hindi
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Login Button */}
//           <Link
//             href="/Login"
//             className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-green-500 hover:text-white transition"
//           >
//             Login
//           </Link>
//         </div>
//       </div>

//       {/* Sidebar */}
//       {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
//     </>
//   );
// }

// export default Navbar;



"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import Sidebar from "./Sidebar";
import Link from "next/link";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [location, setLocation] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [locationError, setLocationError] = useState("");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const handleLocationToggle = () => {
    if (locationOpen) {
      setLocationOpen(false); // Close if already open
    } else {
      // Open and fetch location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                "Unknown location";
              setLocation(city);
              setLocationError("");
            } catch (error) {
              setLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
              setLocationError("Could not fetch city name.");
            }
            setLocationOpen(true);
          },
          () => {
            setLocationError("Permission denied or location unavailable.");
            setLocationOpen(true);
          }
        );
      } else {
        setLocationError("Geolocation is not supported by this browser.");
        setLocationOpen(true);
      }
    }
  };

  return (
    <>
      <div className="flex w-full fixed z-50 justify-between bg-white items-center px-4 sm:px-6 md:px-8 py-2 border-b-2 flex-wrap">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(true)}>
            <FiAlignJustify className="text-black text-2xl" />
          </button>
          <img
            src="/logo.png"
            alt="logo"
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <span className="text-black font-extrabold text-lg sm:text-xl">
            Throttle Point
          </span>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center gap-3 mt-2 md:mt-0 flex-wrap md:flex-nowrap">
          {/* Search */}
          <div className="flex items-center border border-black rounded-2xl px-4 py-1 sm:px-6 sm:py-2">
            <input
              type="search"
              placeholder="Search"
              className="placeholder:text-black text-sm sm:text-base outline-none text-black bg-transparent w-full"
            />
            <CiSearch className="text-black text-xl sm:text-2xl" />
          </div>

          {/* Location Icon */}
          <div className="relative">
            <button onClick={handleLocationToggle}>
              <IoLocationOutline className="text-black text-xl sm:text-2xl" />
            </button>

            {locationOpen && (
              <div className="absolute top-10 right-0 bg-white  px-3 py-1 rounded shadow text-sm text-black  hover:bg-black hover:text-white  z-50">
                {location ? `📍 ${location}` : locationError}
              </div>
            )}
          </div>

          {/* Language Icon */}
          <div className="relative">
            <button onClick={() => setLanguageOpen(!languageOpen)}>
              <MdLanguage className="text-black text-xl sm:text-2xl" />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm w-28 z-50">
                <div
                  onClick={() => handleLanguageChange("English")}
                  className="px-4 py-2 cursor-pointer text-black hover:bg-black hover:text-white"
                >
                  🇬🇧 English
                </div>
                <div
                  onClick={() => handleLanguageChange("Hindi")}
                  className="px-4 py-2 cursor-pointer text-black hover:bg-black hover:text-white "
                >
                  🇮🇳 Hindi
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <Link
            href="/Login"
            className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-green-500 hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
}

export default Navbar;
