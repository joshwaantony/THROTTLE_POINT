
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";

const scooters = [
  {
    name: "TVS Jupiter",
    rating: 4.5,
    reviews: 132,
    specs: ["113.3 cc", "53.84 kmpl", "7.91 bhp", "106 kg"],
    price: "₹ 1,20,000",
    location: "Kolkata",
    image: "/TVS Jupiter.webp",
  },
  {
    name: "Honda Activa 6G",
    rating: 4.7,
    reviews: 215,
    specs: ["109.5 cc", "50 kmpl", "7.68 bhp", "105 kg"],
    price: "₹ 1,15,000",
    location: "Delhi",
    image: "/Honda Activa 6G.webp",
  },
  {
    name: "Suzuki Access 125",
    rating: 4.6,
    reviews: 184,
    specs: ["124 cc", "52 kmpl", "8.7 bhp", "104 kg"],
    price: "₹ 1,22,000",
    location: "Mumbai",
    image: "/Suzuki Access 125.webp",
  },
  {
    name: "Yamaha Ray ZR 125",
    rating: 4.3,
    reviews: 98,
    specs: ["125 cc", "58 kmpl", "8.2 bhp", "99 kg"],
    price: "₹ 1,10,000",
    location: "Chennai",
    image: "/Yamaha Ray ZR 125.avif",
  },
  {
    name: "Hero Maestro Edge",
    rating: 4.2,
    reviews: 75,
    specs: ["110.9 cc", "45 kmpl", "8 bhp", "112 kg"],
    price: "₹ 1,05,000",
    location: "Hyderabad",
    image: "/Hero Maestro Edge.avif",
  },
  {
    name: "TVS Ntorq 125",
    rating: 4.8,
    reviews: 310,
    specs: ["124.8 cc", "48 kmpl", "9.4 bhp", "116 kg"],
    price: "₹ 1,25,000",
    location: "Bangalore",
    image: "/TVS Ntorq 125.avif",
  },
  {
    name: "Aprilia SR 160",
    rating: 4.1,
    reviews: 55,
    specs: ["160.03 cc", "40 kmpl", "10.8 bhp", "122 kg"],
    price: "₹ 1,35,000",
    location: "Pune",
    image: "/Aprilia SR 160.webp",
  },
  {
    name: "Ola S1 Air",
    rating: 4.6,
    reviews: 223,
    specs: ["Electric", "151 km/charge", "4.5 kW", "99 kg"],
    price: "₹ 1,20,000",
    location: "Delhi",
    image: "/Ola S1 Air.avif",
  },
  {
    name: "Ather 450X",
    rating: 4.9,
    reviews: 275,
    specs: ["Electric", "146 km/charge", "6.2 kW", "111 kg"],
    price: "₹ 1,40,000",
    location: "Bangalore",
    image: "/Ather 450X.webp",
  },
  {
    name: "Bajaj Chetak",
    rating: 4.4,
    reviews: 160,
    specs: ["Electric", "108 km/charge", "4.08 kW", "132 kg"],
    price: "₹ 1,30,000",
    location: "Mumbai",
    image: "/Bajaj Chetak.jpg",
  },
];

function ElectricCard() {
  return (
    <div className="px-4 md:px-12 lg:px-20 py-8 w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {scooters.map((scooter, index) => (
          <div
            key={index}
            className="border bg-white rounded-xl shadow p-4 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={scooter.image}
                alt={scooter.name}
                className="w-full sm:w-[130px] h-[80px] object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h1 className="text-black text-sm font-semibold">
                      {scooter.name}
                    </h1>
                    <FaChevronRight className="text-black text-xs" />
                  </div>
                  <img
                    src="/electric_icon.png"
                    alt="electric icon"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>

                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center text-xs">
                    <IoMdStar className="text-[#00857A] text-lg" />
                    <span className="text-[#00857A] font-bold ml-1">
                      {scooter.rating}
                    </span>
                    <span className="text-[#6F6F6F] ml-1">/5</span>
                  </div>
                  <p className="text-[#6F6F6F] text-xs">
                    {scooter.reviews} Ratings
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[12px] text-gray-800 mt-2">
                  {scooter.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="border-r border-[#dad6d6] pr-2 last:border-none"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <h2 className="text-black font-semibold mt-2 text-sm">
                  {scooter.price}
                </h2>
                <p className="text-[#6F6F6F] text-xs mt-1">
                  On-Road Price, {scooter.location}
                </p>

                <button className="mt-3 w-full sm:w-[180px] border border-green-700 text-green-700 font-semibold text-xs py-2 rounded-md hover:bg-green-50 transition">
                  View Price Breakup
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectricCard;
