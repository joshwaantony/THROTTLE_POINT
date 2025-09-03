// "use client";
// import React, { useState } from "react";
// import Trending from "../Section2/Trending";
// import Popular from "../Section2/Popular";
// import Electric from "../Section2/Electric";

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import Upcoming from "../Section2/Upcoming";
// function Section2() {
//   const [activeTab, setActiveTab] = useState("TRENDING");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "TRENDING":
//         return <Trending />;
//       case "POPULAR":
//         return <Popular />;
//       case "ELECTRIC":
//         return <Electric />;
//       case "ADVENTURE":
//         return <Upcoming />;
//       default:
//         return <Trending />;
//     }
//   };

//   const tabs = ["TRENDING", "POPULAR", "ELECTRIC", "ADVENTURE"];

//   return (
//     <div>
//       <h1 className="text-black text-base sm:text-2xl font-semibold">
//         Featured Bikes
//       </h1>

//       {/* Tab Headers */}
//       <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
//         {tabs.map((tab) => (
//           <p
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`transition-colors  ${
//               activeTab === tab
//                 ? " text-[10px] sm:text-base text-green-700 border-b-2t border-green-700"
//                 : "text-gray-500 text-[10px] sm:text-base"
//             }`}
//           >
//             {tab}
//           </p>
//         ))}
//       </div>

//       {/* Render selected tab component */}
//       <div className="pt-4">{renderComponent()}</div>
//       <button className="text-[#0979b6] font-semibold flex items-center mt-4">
//         All Trending Bikes <MdOutlineKeyboardArrowRight className="text-2xl" />
//       </button>
//     </div>
//   );
// }

// export default Section2;



"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getProductsByCategory } from "@/api/product";

function Section2() {
  const [activeTab, setActiveTab] = useState("TRENDING");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const tabs = ["TRENDING", "POPULAR", "ELECTRIC", "ADVENTURE"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // API expects lowercase (trending, popular, electric, adventure)
        const data = await getProductsByCategory(activeTab.toLowerCase());
        setProducts(data);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [activeTab]);

  return (
    <div>
      <h1 className="text-black text-base sm:text-2xl font-semibold">
        Featured Bikes
      </h1>

      {/* Tabs */}
      <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors ${
              activeTab === tab
                ? "text-[10px] sm:text-base text-green-700 border-b-2 border-green-700"
                : "text-gray-500 text-[10px] sm:text-base"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Products */}
      <div className="pt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {products.map((p) => (
              <div
                key={p._id}
                className="border rounded-lg p-2 shadow hover:shadow-md transition"
              >
                <img
                  src={p.productImage}
                  alt={`${p.brand} ${p.model}`}
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => (e.currentTarget.src = "/fallback-bike.png")}
                />
                <h2 className="text-sm font-bold mt-2">
                  {p.brand} {p.model}
                </h2>
                <p className="text-gray-600 text-sm">₹{p.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button className="text-[#0979b6] font-semibold flex items-center mt-4">
        All {activeTab} Bikes{" "}
        <MdOutlineKeyboardArrowRight className="text-2xl" />
      </button>
    </div>
  );
}

export default Section2;




