"use client";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
// import { Link } from "react-router-dom"; // ✅ Add this
import Sidebar from "./Sidebar"; // ✅ Import Sidebar
import Link from "next/link";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ state

  return (
    <>
      <div className="flex w-full fixed z-50 justify-between bg-white items-center px-4 sm:px-6 md:px-8 py-2 border-b-2 flex-wrap">
        {/* Left Section: Logo + Toggle */}
        <div className="flex items-center gap-2">
          <button onClick={() => setIsSidebarOpen(true)} className="block">
            <FiAlignJustify className="text-black text-2xl" />
          </button>
          <img
            className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
            src="/logo.png"
            alt="logo"
          />
          <span className="text-black font-extrabold text-lg sm:text-xl">
            Throttle Point
          </span>
        </div>

        {/* Right Section: Search, Icons, Login */}
        <div className="flex items-center gap-3 mt-2 md:mt-0 flex-wrap md:flex-nowrap">
          {/* Search Box */}
          <div className="flex items-center border border-black rounded-2xl px-4 py-1 sm:px-6 sm:py-2">
            <input
              type="search"
              placeholder="Search"
              className="placeholder:text-black text-sm sm:text-base outline-none text-black bg-transparent w-full"
            />
            <CiSearch className="text-black text-xl sm:text-2xl" />
          </div>

          {/* Icons */}
          <IoLocationOutline className="text-black text-xl sm:text-2xl" />
          <MdLanguage className="text-black text-xl sm:text-2xl" />

          {/* Login Button */}
          {/* <button className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            Login
          </button> */}

          <Link
            href="/Login"
            className="text-black text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 border border-black rounded-md hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Sidebar - Conditionally rendered */}
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
    </>
  );
}

export default Navbar;
