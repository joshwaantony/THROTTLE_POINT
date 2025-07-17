



import React from "react";

function Page() {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
        style={{ backgroundImage: "url('/my-listing.jpg')" }}
      >
        <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-md shadow-lg text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
            LOGIN TO SELL YOUR BIKE
          </h2>

          <input
            type="number"
            placeholder="+91  Enter mobile number"
            className="w-full border text-gray-500 border-gray-300 px-4 py-2 rounded mb-4 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <button className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition">
            Get OTP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
