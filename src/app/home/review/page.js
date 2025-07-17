// import React from "react";

// function page() {
//   return <div>
//         <div
//       className="min-h-[60vh] bg-cover bg-center flex flex-col items-center justify-center text-white px-4 text-center"
//       style={{
//         backgroundImage: "url('/your-bike-bg.jpg')", // Replace with actual image path
//         backgroundColor: "rgba(0, 0, 0, 0.6)",
//         backgroundBlendMode: "overlay",
//       }}
//     >
//       <h1 className="text-3xl sm:text-4xl font-bold mb-6">BIKE REVIEWS</h1>

//       {/* Tabs */}
//       <div className="flex gap-2 bg-white p-1 rounded-md mb-6 text-sm sm:text-base">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === "user"
//               ? "bg-sky-100 text-sky-600 font-semibold"
//               : "text-gray-800"
//           }`}
//           onClick={() => setActiveTab("user")}
//         >
//           User Reviews
//         </button>
//         <button
//           className={`px-4 py-2 rounded border border-gray-300 ${
//             activeTab === "expert"
//               ? "bg-sky-100 text-sky-600 font-semibold"
//               : "text-gray-800"
//           }`}
//           onClick={() => setActiveTab("expert")}
//         >
//           Expert Reviews
//         </button>
//       </div>

//       {/* Search Bar */}
//       <div className="flex flex-col sm:flex-row items-center w-full max-w-xl">
//         <input
//           type="text"
//           placeholder="Search your bike here, e.g. Bullet 350"
//           className="w-full sm:flex-1 px-4 py-3 rounded-l-md border-none outline-none text-black"
//         />
//         <button className="bg-red-600 text-white px-6 py-3 rounded-r-md w-full sm:w-auto mt-2 sm:mt-0 hover:bg-red-700 transition">
//           Search
//         </button>
//       </div>
//     </div>
//   </div>;
// }

// export default page;

"use client"

import React, { useState } from "react";

function Page() {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <div>
      <div
        className="min-h-[40vh] bg-cover bg-center flex flex-col items-center justify-center text-white px-4 text-center"
        style={{
          backgroundImage: "url('/review.jpg')", // Replace with actual image path
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">BIKE REVIEWS</h1>


        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center w-full max-w-xl">
          <input
            type="text"
            placeholder="Search your bike here, e.g. Bullet 350"
            className="w-full sm:flex-1 px-4 py-3 rounded-l-md border-none outline-none text-black bg-white"
          />
          <button className="bg-red-600 text-white px-6 py-3 rounded-r-md w-full sm:w-auto mt-2 sm:mt-0 hover:bg-red-700 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
