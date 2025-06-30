

"use client"
import React, { useState } from "react";

function Section2() {
  

    const bikes = [
     {
    id: 1,
    image: "/1200.webp",
    title: "KTM Duke 200 2025 Edition Launched",
    author: "By Rahul Sharma",
    time: "2 hours ago",
    description:
      "KTM has unveiled the 2025 Duke 200 with a brand-new color scheme and improved suspension.",
  },
  {
    id: 2,
    image: "/1200.webp",
    title: "Honda Hornet 2.0 Gets Cosmetic Upgrade",
    author: "By Sneha Verma",
    time: "4 hours ago",
    description:
      "The 2025 Honda Hornet 2.0 now features new graphics, LED headlamp and a fully digital console.",
  },
  {
    id: 3,
    image: "/1200.webp",
    title: "Honda SP125: BS6 Phase 2 Model Arrives",
    author: "By Karthik Iyer",
    time: "8 hours ago",
    description:
      "Honda has launched the BS6 Phase 2 compliant SP125, promising better efficiency and performance.",
  },
  
    // Add more articles as needed
  ]

 
  return (
    <div className=" my-6">
         
        <h1 className="text-black text-base md:text-3xl font-semibold my-5 " >Bike Comparisons by Our Experts</h1>
         <div
          
           className="flex  gap-4  "
         >
           {bikes.map((bike) => (
             <div
               key={bike.id}
               className="border border-gray-300 rounded-2xl min-w-[250px] sm:min-w-[300px] xl:min-w-[350px]  p-2 bg-gray-100"
             >
               <img
                 src={bike.image}
                 className=" drop-shadow-slate-950 rounded-2xl w-full h-[150px] sm:h-[200px] object-cover "
                 alt={bike.title}
               />
               <div className="flex flex-col gap-2 mt-3">
                 <h1 className="text-black font-semibold text-[15px] sm:text-xl  ">{bike.title}</h1>
                 <div className="flex justify-between text-sm text-gray-500">
                   <p>
                     <span className="text-black font-medium">{bike.author}</span>
                   </p>
                   <p>{bike.time}</p>
                 </div>
                 <p className="text-gray-600 text-[12px] sm:text-sm">{bike.description}</p>
                 <div className="flex justify-end">
                   <button className="text-blue-600 font-semibold text-sm hover:underline">
                     Read More
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
   
      
       </div>
  );
}

export default Section2;
