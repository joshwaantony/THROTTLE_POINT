// import React from "react";

// function page() {
//   return (
//     <div className="ml-36">
//       <h1 className="text-black text-base md:text-3xl font-semibold mt-3 ml-2 ">
//         On Road Price Quote
//       </h1>
//       <div className="border pt-4 border-[#EAEAEA] w-2xl mt-4 ms-2 mb-10  ">
//         <div className="flex gap-28 ps-2 border-dotted border-b pb-10 mb-1">
//           <h1 className="text-black font-bold ">Select Bike</h1>
//           <div className="flex flex-col gap-10">
//             <select name="" id="" className="text-black border pe-24 ps-5 py-5">
//               <option value="" disabled selected>
//                 ---Select Make---
//               </option>
//               <option value="">Honda-cvghjk</option>
//             </select>
//             <select
//               name=""
//               id=""
//               className="text-black border pe-24 ps-5 py-5 "
//             >
//               <option value=""  disabled selected>
//                 ---Select Model---
//               </option>
//               <option value="">Honda</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex gap-20 ps-2 border-dotted  mb-1 pt-2 mt-7 ">
//           <h1 className="text-black font-bold ">Select Location</h1>
//           <div className="flex flex-col gap-10">
//             <select name="" id="" className="text-black border pe-28 ps-5 py-5">
//               <option value="" disabled selected>
//                 ---Select City---
//               </option>
//               <option value="">Honda-cvghjk</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex gap-3 justify-end pr-7 mt-6">
//             <input type="checkbox" name="" id="" />
//             <h1 className="text-black">I agree with BikeWale <span className="text-blue-500">visitor agreement</span> and <span className="text-blue-500">privacy policy</span>.

// </h1>
//         </div>
//         <div className="ps-[200px] mt-5 py-3">
//             <button className="bg-[#F04031] w-[242px] h-[40px] rounded-xs">Check On-Road Price</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default page;



import React from "react";

function page() {
  return (
    <div className="xl:ml-36 ml-4 sm:ml-10 py-6">
      <h1 className="text-black text-base md:text-2xl xl:text-3xl font-semibold mt-3 ml-2">
        On Road Price Quote
      </h1>

      <div className="border border-[#EAEAEA] mt-4 xl:ms-2 mb-10 p-4 sm:p-6 xl:w-[80%]">
        {/* Select Bike */}
        <div className="flex flex-col xl:flex-row xl:gap-28 gap-4 xl:ps-2 border-dotted border-b pb-6 mb-6">
          <h1 className="text-black font-bold">Select Bike</h1>
          <div className="flex flex-col gap-6">
            <select className="text-black border rounded pe-24 ps-5 py-4">
              <option disabled selected>---Select Make---</option>
              <option>Honda</option>
            </select>
            <select className="text-black border rounded pe-24 ps-5 py-4">
              <option disabled selected>---Select Model---</option>
              <option>Honda CB350</option>
            </select>
          </div>
        </div>

        {/* Select Location */}
        <div className="flex flex-col xl:flex-row xl:gap-20 gap-4 xl:ps-2   pb-6 mb-6">
          <h1 className="text-black font-bold">Select Location</h1>
          <div className="flex flex-col gap-6">
            <select className="text-black border rounded pe-28 ps-5 py-4">
              <option disabled selected>---Select City---</option>
              <option>Chennai</option>
              <option>Bangalore</option>
            </select>
          </div>
        </div>

        {/* Agreement */}
        <div className="flex items-start gap-2 justify-start xl:justify-center pr-0 xl:pr-44 mt-4 xl:items-center">
          <input type="checkbox" className="mt-1 size-5" />
          <p className="text-sm text-black leading-snug">
            I agree with BikeWale{" "}
            <span className="text-blue-500 underline cursor-pointer">
              visitor agreement
            </span>{" "}
            and{" "}
            <span className="text-blue-500 underline cursor-pointer">
              privacy policy
            </span>
            .
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 xl:ps-[200px] ml-2">
          <button className="bg-[#F04031] text-white w-full sm:w-[242px] h-[42px] rounded-sm hover:bg-[#d83b28] transition">
            Check On-Road Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
