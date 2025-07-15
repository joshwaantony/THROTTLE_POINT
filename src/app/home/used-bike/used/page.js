import React from "react";

function Page() {
  return (
    <div>
      <div
        className="flex items-start justify-center h-[250px] bg-cover bg-center bg-fixed px-4 pt-8 "
        style={{ backgroundImage: "url('/used.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-white text-3xl font-bold pt-1">USED BIKE </h1>
        <p className="text-white text-2xl font-bold">Thousands of used bikes for sale</p>
        </div>
      </div>



     {/* <div className=" w-[970px] h-[235px]  bg-amber-400">
        <h2 className="text-black text-xl font-semibold text-center ">
          Explore the best used bikes in your city.
        </h2>

      </div> */}
      <div className="mx-auto w-[970px] h-[235px] bg-amber-400 flex items-center justify-center">
  <h1>Search second hand bikes</h1>
</div>


     

     
    </div>
  );
}

export default Page;
