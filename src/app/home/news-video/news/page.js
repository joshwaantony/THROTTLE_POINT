import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function page() {
  return <div>
      <div className="px-6 md:px-12 lg:px-44 ">
      <div className="mt-12">
        <h1 className="text-black text-2xl font-extrabold ">Bike News</h1>
        <p className="text-black mt-3">
          Read bike news of all models in India. All latest bikes have a number
          of news about its launch, updates, specs, comparisons and more.
        </p>
      </div>

      <div className="mt-10">
        
        <div className="flex flex-wrap gap-6 -mt-4 mb-10 ">
          <div>
      
            <div className="border border-gray-500 rounded-lg w-[300px] h-[50px] flex justify-between  gap-2 px-2 items-center">
             
               <IoSearchOutline className="text-black"/>
                <input type="text"
                placeholder="Type to select bike name " 
                className="w-full outline-none  placeholder:text-gray-500 text-black" 
                 />
             
             
            </div>
          </div>
        
        </div>
      </div>



    </div>
  </div>;
}

export default page;
