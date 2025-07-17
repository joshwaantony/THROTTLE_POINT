"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SellUsedBikeForm() {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Form Section */}
      <div className="md:col-span-2 space-y-6">
        <h2 className="text-2xl md:text-xl font-semibold text-black">
          Sell Your Used Bike 
        </h2>

        {/* Step 1 */}
        <div className="flex items-center gap-3">
          <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center text-sm font-semibold rounded-full">
            1
          </span>
          <h3 className="text-black font-semibold">Bike details</h3>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <select
            className="border border-gray-300 px-4 py-2 rounded text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Brand
            </option>
            <option>Honda</option>
            <option>Yamaha</option>
          </select>

          <select
            className="border border-gray-300 px-4 py-2 rounded text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Model
            </option>
            <option>Activa</option>
            <option>R15</option>
          </select>

          <select
            className="border border-gray-300 px-4 py-2 rounded text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              Version
            </option>
            <option>Standard</option>
            <option>Deluxe</option>
          </select>

          <input
            type="text"
            placeholder="Year of manufacturing"
            className="border border-gray-300 px-4 py-2 rounded placeholder:text-gray-500 "
          />

          <input
            type="number"
            placeholder="Kms ridden"
            className="border text-gray-500 border-gray-300 px-4 py-2 rounded  placeholder:text-gray-500 "
          />

          <select className="border border-gray-300 px-4 py-2 rounded text-gray-500">
            <option>Kolkata</option>
            <option>Delhi</option>
            <option>Chennai</option>
          </select>

          <input
            type="number"
            placeholder="Expected price"
            className="border text-gray-500  border-gray-300 px-4 py-2 rounded  placeholder:text-gray-500"
          />

          <select className="border border-gray-300 px-4 py-2 rounded text-gray-500">
            <option>1st Owner</option>
            <option>2nd Owner</option>
          </select>

          <select className="border border-gray-300 px-4 py-2 rounded text-gray-500">
            <option>West Bengal</option>
            <option>Maharashtra</option>
          </select>

          <select className="border border-gray-300 px-4 py-2 rounded text-gray-500">
            <option>Black</option>
            <option>Red</option>
          </select>
        </div>

        <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded hover:bg-red-700 transition">
          Save and Continue
        </button>

        {/* Steps */}
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">
              2
            </span>
            <span>Personal details</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-xs">
              3
            </span>
            <span>More details</span>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}

      <div className="bg-[url('/sell_used.jpg')] bg-cover bg-center rounded-lg p-6 text-white flex flex-col justify-between min-h-[500px] relative overflow-hidden bg-black ">
        <div className="absolute inset-0  rounded-lg " />
        <div className="relative z-10 space-y-6 ">
          <div className="flex flex-col items-center justify-center space-y-2">
            {/* <img src="/logo.png" alt="Bike Icon" className="w-12 h-12   " /> */}
            <Image
              src="/logo.png"
              alt="Bike Icon"
              width={48}
              height={48}
              className="w-12 h-12"
            />

            <span className="bg-white  text-black px-3 py-1 rounded-full text-sm font-bold">
              SELL WITH THROTTLE POINT
            </span>
          </div>

          <ul className="space-y-4 mt-6 text-sm">
            <li className="flex items-start gap-2">
              <span>✅</span>
              <div>
                <strong className="text-white font-bold">Genuine buyers</strong>
                <p className="text-white">
                  Over 3.5 million users on BikeWale are looking for a used bike
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span>💰</span>
              <div>
                <strong>Free of cost</strong>
                <p>You can upload your bike ad absolutely free</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span>📋</span>
              <div>
                <strong>Unlimited listing duration</strong>
                {/* <p>Your bike ad will be visible until it's sold</p> */}
                <p>Your bike ad will be visible until it&apos;s sold</p>

              </div>
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span>
              <div>
                <strong>Get contact details of buyers</strong>
                <p>We send buyer details via SMS and mail</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Buttons */}

      <div className="flex items-center text-sm text-gray-600 space-x-1 ">
        <Link href="/home" className="text-blue-600 hover:underline">
          Home
        </Link>
        <svg
          className="w-3 h-3 text-gray-400 mx-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <Link
          href="/home/used-bike/used"
          className="text-blue-600 hover:underline"
        >
          Used Bikes
        </Link>
        <svg
          className="w-3 h-3 text-gray-400 mx-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-gray-600 font-medium">Sell Your Bike</span>
      </div>
    </div>
  );
}
