

"use client";
import React, { useState, useRef, useEffect } from "react";
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
  const [locationOpen, setLocationOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  const languageRef = useRef(null);
  const locationRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  const handleLocationClick = () => {
    if (locationOpen) {
      setLocationOpen(false);
      return;
    }

    setLocationOpen(true);
    setLocation("");
    setLocationError("");

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
          } catch (error) {
            setLocationError("Could not fetch address.");
          }
        },
        () => {
          setLocationError("Permission denied or location unavailable.");
        }
      );
    } else {
      setLocationError("Geolocation not supported.");
    }
  };

  // 🔁 Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target)
      ) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Location Toggle */}
          <div className="relative" ref={locationRef}>
            <button onClick={handleLocationClick}>
              <IoLocationOutline className="text-black text-xl sm:text-2xl" />
            </button>

            {locationOpen && (
              <div className="absolute top-8 right-0 bg-white px-3 py-1 rounded shadow text-sm text-black z-50 animate-fadeIn mt-2">
                {location && `📍 ${location}`}
                {locationError && (
                  <span className="text-red-500">⚠️ {locationError}</span>
                )}
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative" ref={languageRef}>
            <button onClick={() => setLanguageOpen(!languageOpen)}>
              <MdLanguage className="text-black text-xl sm:text-2xl" />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm w-28 z-50">
                <div
                  onClick={() => handleLanguageChange("English")}
                  className="px-4 py-2 cursor-pointer text-black hover:bg-gray-300"
                >
                  🇬🇧 English
                </div>
                <div
                  onClick={() => handleLanguageChange("Hindi")}
                  className="px-4 py-2 cursor-pointer text-black hover:bg-gray-300"
                >
                  🇮🇳 Hindi
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <Link
            href="/Login"
            className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-gray-300 transition"
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
