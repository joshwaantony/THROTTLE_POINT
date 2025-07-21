"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmiCalculator = () => {
  const [loan, setLoan] = useState(100000);
  const [interest, setInterest] = useState(10);
  const [type, setType] = useState("advance");

  const emiData = [
    { months: 12, emi: 8719 },
    { months: 24, emi: 4576 },
    { months: 36, emi: 3200 },
    { months: 48, emi: 2515 },
    { months: 60, emi: 2107 },
    { months: 72, emi: 1837 },
    { months: 84, emi: 1646 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
<p className="text-sm text-black mb-2">
  You are here:{" "}
  <span className="font-medium text-blue-500">
    <Link href="/home" className="hover:underline">
      Home
    </Link>{" "}
    › EMI Calculator
  </span>
</p>      
      <h2 className="text-2xl font-bold text-black mb-2">
        EMI Calculator - Calculate Your Bike Loan EMI
      </h2>

      <p className="text-gray-600 mb-6">
        Bike loan EMI calculation was never this easy. Just select the bike you
        wish to avail a loan for and the city. Options to change loan amount,
        interest rate, tenure and much more.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Form Section */}
        <div className="flex-1 space-y-4">
          <div>
            <label className="text-black block font-semibold">Loan Amount (₹)</label>
            <input
              type="number"
              value={loan}
              onChange={(e) => setLoan(e.target.value)}
              className="w-full border border-gray-400 rounded px-3 py-2 mt-1 "
            />
          </div>

          <div>
            <label className="text-black block font-semibold">
              Rate Of Interest (%)
            </label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full border border-gray-400 rounded px-3 py-2 mt-1"
            />
          </div>

          <div className="space-y-2">
            <label className="text-black block font-semibold">Payment Type</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="advance"
                  checked={type === "advance"}
                  onChange={() => setType("advance")}
                />
                <span className="text-black">EMI in Advance</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="arrears"
                  checked={type === "arrears"}
                  onChange={() => setType("arrears")}
                />
                <span className="text-black">EMI in Arrears</span>
              </label>
            </div>
          </div>

          <button className="bg-red-600 text-white font-bold w-full py-2 rounded mt-4 hover:bg-red-700 transition">
            Calculate EMI
          </button>
        </div>

        {/* EMI Table Section */}
        <div className="flex-1 bg-gray-100 rounded-lg p-4">
          <table className="w-full text-left text-black">
            <thead>
              <tr className="text-sm border-b border-gray-400">
                <th className="pb-2">Months</th>
                <th className="pb-2">EMI</th>
                <th className="pb-2">Chart</th>
              </tr>
            </thead>
            <tbody>
              {emiData.map(({ months, emi }) => (
                <tr key={months} className="border-b border-gray-300 text-sm">
                  <td className="py-2">{months}</td>
                  <td className="py-2">₹ {emi}/-</td>
                  <td className="py-2 text-blue-600 hover:underline cursor-pointer">
                    View Chart
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-6 leading-5">
        Disclaimer: The calculation performed by EMI Calculator is based on the
        information you entered and is for illustrative purposes only. This
        calculation reflects amounts in Indian Rupee rounded to the nearest
        whole figure. Estimated monthly payments DO NOT include any processing
        or other possible fees. All loan figures are subject to approval from an
        independent lending source.
      </p>
    </div>
  );
};

export default EmiCalculator;
