// "use client";
// import React, { useState } from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// import News from "../Section8/News";
// import Extrareviews from "../Section8/Extrareviews";
// import Videos from "../Section8/Videos";
// import NewVideo from "./NewVideo";
// import SpecialReport from "./SpecialReport";
// import Review from "./Review";
// function FinalVideos() {
//   const [activeTab, setActiveTab] = useState("NEWS");

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "NEWS":
//         return <NewVideo/>;
     
     
//         case "SPECIAL REPORTS":
//         return <Review/>;
//          case "VIDEOS":
//         return <Review />;
//          case "REVIEW":
//         return <Review/>;

//       default:
//         return <News />;
//     }
//   };

//   const tabs = ["NEWS", " REVIEW","SPECIAL REPORTS" ,"VIDEOS"];

//   return (
//     <div className="pt-3">
   

//       {/* Tab Headers */}
//       <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3">
//         {tabs.map((tab) => (
//           <p
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`transition-colors ${
//               activeTab === tab
//                 ? "text-[10px] sm:text-base text-green-700 border-b-2t border-green-700"
//                 : "text-gray-500 text-[10px] sm:text-base"
//             }`}
//           >
//             {tab}
//           </p>
//         ))}
//       </div>

//       {/* Render selected tab component */}
//       <div className="pt-4">{renderComponent()}</div>
     
//     </div>
//   );
// }

// export default FinalVideos;

"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import News from "../Section8/News";
import NewVideo from "./NewVideo";
import SpecialReport from "./SpecialReport";
import Review from "./Review";
import Videos from "./Videos";

function FinalVideos() {
  const [activeTab, setActiveTab] = useState("NEWS");

  const renderComponent = () => {
    switch (activeTab) {
      case "NEWS":
        return <NewVideo />;
      case "REVIEW":
        return <Review />;
      case "SPECIAL REPORTS":
        return <SpecialReport />;
      case "VIDEOS":
        return <Videos />;
      default:
        return <News />;
    }
  };

  const tabs = ["NEWS", "REVIEW", "SPECIAL REPORTS", "VIDEOS"];

  return (
    <div className="pt-3">
      {/* Tab Headers */}
      <div className="text-black font-semibold text-[13px] flex gap-5 cursor-pointer pt-3 flex-wrap">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`transition-colors pb-1 border-b-2 ${
              activeTab === tab
                ? "text-green-700 border-green-700"
                : "text-gray-500 border-transparent"
            } text-[10px] sm:text-base`}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Render selected tab component */}
      <div className="pt-4">{renderComponent()}</div>
    </div>
  );
}

export default FinalVideos;
