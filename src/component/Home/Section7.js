import React from "react";

const Section7 = () => {
  return <div className="mt-3">
    <h1 className="text-black text-2xl font-semibold mb-2">Compare Bikes</h1>
    <div className="border bg-white border-gray-300 rounded-2xl pt-4 w-[400px] ">
    
<div className="flex">
    <div className="w-[200px]   relative text-black ">
   <div className="border-r-1 border-r-gray-300"> <img src="/NS200.png" alt="" /></div>
   <h1 className="text-[12px] text-black px-4">Royal Enfield</h1>
   <p  className="font-semibold text-[14px] px-4">Hunder 350</p>
   <p className="px-4 text-[12px] font-semibold">₹ 1,80,460</p>
   <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
    

<div className="absolute border border-black bg-white text-red-500 p-1 text-xs size-6 rounded-full -right-3 top-12">VS</div>

</div>
<div className="w-[200px]  text-black  ">
    <img src="/r15-v4.png" alt="" />
    <h1 className="text-[12px] text-black px-4">Royal Enfield</h1>
   <p  className="font-semibold text-[14px] px-4">Hunder 350</p>
   <p className="px-4 text-[12px] font-semibold">₹ 1,80,460</p>
   <p className="text-gray-400 px-4 text-[14px]">Onwards</p>
    
</div>
</div>
 <button className="text-green-700 border border-green-700 rounded-xl p-2  text-xs">
                Check On-Road Price
              </button>

    </div>
  </div>;
};

export default Section7;
