


import FinalVideos from "@/component/newVideos-s/FinalVideos";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Page() {
  return (
    <div className="bg-white text-black px-4 sm:px-6 md:px-12 lg:px-36 xl:px-48 py-10 bg-amber-100">
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Bike News</h1>
        <p className="text-sm sm:text-base text-gray-700">
          Read bike news of all models in India. All latest bikes have a number
          of news about their launch, updates, specs, comparisons and more.
        </p>
      </div>

      {/* Search Bar Section */}
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:max-w-md">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm">
              <IoSearchOutline className="text-gray-600 text-lg mr-2" />
              <input
                type="text"
                placeholder="Type to select bike name"
                className="w-full bg-transparent outline-none placeholder:text-gray-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      </div>

     <FinalVideos/>
    </div>
  );
}

export default Page;
