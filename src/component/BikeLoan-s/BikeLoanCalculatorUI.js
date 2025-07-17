




"use client";
import React, { useState } from "react";

export default function BikeLoanCalculatorUI() {
  const [location, setLocation] = useState("Kolkata");
  const [bike, setBike] = useState("");
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(3);
  const [interestRate, setInterestRate] = useState(10);
  const [isYears, setIsYears] = useState(true);

  const loanAmount = 100000;
  const principal = loanAmount - downPayment;

  const totalInterest = isYears
    ? (principal * interestRate * tenure) / 100
    : (principal * interestRate * (tenure / 12)) / 100;

  const totalAmount = principal + totalInterest;
  const emi = totalAmount / (isYears ? tenure * 12 : tenure);

  return (
    <div className="max-w-[970px] mx-auto mt-10 p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-gray-700 text-sm">
            Choose deals from Top Banks in India - IDFC First Bank, Tata Capital, AU Small Finance and Bajaj Finance at attractive EMI.
          </h2>

          {/* Location & Bike Selectors */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="flex-1 border border-gray-300 px-4 py-2 rounded placeholder:text-black text-black"
            />
            <input
              value={bike}
              onChange={(e) => setBike(e.target.value)}
              placeholder="Select Your Bike"
              className="flex-1 border border-gray-300 px-4 py-2 rounded placeholder:text-black text-black"
            />
          </div>

          {/* Down Payment */}
          <div>
            <label className="text-black font-semibold block mb-1">Down Payment</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={0}
                max={loanAmount}
                value={downPayment}
                onChange={(e) => setDownPayment(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="w-[90px] text-black text-right shrink-0">
                ₹ {downPayment.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <label className="text-black font-semibold block mb-1">Loan Tenure</label>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-medium text-black">Years</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!isYears}
                  onChange={() => setIsYears(!isYears)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer"></div>
              </label>
              <span className="text-sm font-medium text-black">Months</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={isYears ? 1 : 12}
                max={isYears ? 7 : 84}
                value={tenure}
                onChange={(e) => setTenure(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="w-[90px] text-right text-black">
                {tenure} {isYears ? "Years" : "Months"}
              </span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="text-black font-semibold block mb-1">Flat Rate of Interest</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={7}
                max={12}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="w-[90px] text-right text-black">{interestRate}%</span>
            </div>
          </div>
        </div>

        {/* Right Section (EMI Display) */}
        <div className="border rounded-lg p-6 bg-[#F9FAFB] flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-gray-600 text-sm mb-1">Loan amount</h3>
            <h2 className="text-2xl font-bold text-[#053968]">
              ₹ {loanAmount.toLocaleString()}
            </h2>

            <h1 className="text-[#053968] text-4xl font-bold mt-6">
              ₹ {emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </h1>
            <p className="text-[#053968] text-md mt-1">
              EMI for {tenure} {isYears ? "Years" : "Months"}
            </p>
          </div>

          <button className="w-full mt-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50 transition-all">
            Get EMI Offers
          </button>
        </div>
      </div>
    </div>
  );
}
