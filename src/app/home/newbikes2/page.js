import Section2 from "@/component/Home/Section2";
import Section4 from "@/component/Home/Section4";
import Section6 from "@/component/Home/Section6";
import Section7 from "@/component/Home/Section7";
import Section8 from "@/component/Home/Section8";
import Section9 from "@/component/Home/Section9";
import React from "react";

function page() {
  return (
    <div className="px-8 md:px-20 2xl:px-40 py-4 mt-10">
      <h1 className="text-black text-base md:text-3xl font-semibold">
        New Bikes in India
      </h1>
      <p className="text-black">
        Finding the right bike can be a complicated process for most of us.
        BikeWale helps you in making this process easier. You can search bikes
        based on brands, body styles, price, and displacement. Explore all the
        new bike models with their price in India. BikeWale brings you all the
        updates & expert reviews related to new bikes in India.
      </p>
      <div className="mt-20">
        <Section4 />
      </div>
      <div className="mt-10">
        <Section2 />
      </div>
      <div className="mt-10">
        <Section6 />
      </div>
      <div className="mt-10">
        <Section9 />
      </div>
      <div className="mt-10">
        <Section7 />
      </div>
      <div className="mt-10">
        <Section8 />
      </div>
    </div>
  );
}

export default page;
