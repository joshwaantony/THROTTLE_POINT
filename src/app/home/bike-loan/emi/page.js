import BikeLoanCalculatorUI from "@/component/BikeLoan-s/BikeLoanCalculatorUI";
import React from "react";

function page() {
  return (
    <div className="px-6 md:px-12 lg:px-44">
      <h1 className="text-black text-2xl font-extrabold mt-12">
        Two-wheeler loan
      </h1>
      <p className="text-black mt-2">
        BikeWale offers you the perfect combination of discovering motorcycles
        and owning them with two-wheeler finance solutions. Get the flexibility
        to compare and choose the best offer from a wide range of financiers.
      </p>
      <h2 className="text-black font-bold text-base sm:text-2xl mt-10">
        Bike EMI
      </h2>
      <BikeLoanCalculatorUI />
    </div>
  );
}

export default page;
