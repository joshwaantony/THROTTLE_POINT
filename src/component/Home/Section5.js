import React from "react";
import { CiSearch } from "react-icons/ci";

function Section5() {
  return (
    <section className="bg-[url(/bg2.jpg)] py-40 pe-5 sm:pe-10  object-center bg-cover flex justify-end ">
      <div className="bg-[#09080884] sm:bg-[#09080854] p-5 rounded-2xl">
        <h1 className="text-white font-semibold text-sm sm:text-xl my-2">
          {" "}
          Check On-Road Price
        </h1>
        <div className="flex justify-between w-[280px] sm:w-[400px] items-center border border-gray-200 px-4 py-1 sm:px-6 sm:py-2 bg-[#ffffff37]  rounded-xl">
          <div className="flex w-[350px] gap-2 ">
            <CiSearch className="text-white text-xl sm:text-2xl" />

            <input
              type="search"
              placeholder="Search your bike here,e.g.KTM RC 200 "
              className=" text-sm sm:text-base outline-none text-white  w-full placeholder:text-white"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base text-white my-2">
          Check the on road price in your city
        </p>
      </div>
    </section>
  );
}

export default Section5;
