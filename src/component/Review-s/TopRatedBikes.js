




import React, { useRef } from "react";
import { Star, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

const bikes = [
  {
    name: "Kawasaki Z800",
    image: "/Kawasaki Z800.avif",
    price: "₹ 7,68,137",
    rating: 5.0,
    reviews: 8,
    location: "Avg. Ex-showroom price",
  },
  {
    name: "Mahindra Mojo",
    image: "/Mahindra Mojo.avif",
    price: "₹ 2,25,684",
    rating: 5.0,
    reviews: 15,
    location: "On road price in Kolkata",
  },
  {
    name: "Kawasaki Ninja ZX-6R",
    image: "/Kawasaki Ninja ZX-6R.avif",
    price: "₹ 13,55,031",
    rating: 4.9,
    reviews: 6,
    location: "On road price in Kolkata",
  },
  {
    name: "Royal Enfield Hunter 350",
    image: "/Royal Enfield Hunter 350.jpg",
    price: "₹ 1,49,900",
    rating: 4.7,
    reviews: 22,
    location: "Ex-showroom Delhi",
  },
  {
    name: "Yamaha R15 V4",
    image: "/Yamaha R15 V4.png",
    price: "₹ 1,82,000",
    rating: 4.8,
    reviews: 19,
    location: "On road price in Bangalore",
  },
  {
    name: "Bajaj Dominar 400",
    image: "/Bajaj Dominar 400.jpg",
    price: "₹ 2,29,781",
    rating: 4.6,
    reviews: 12,
    location: "On road price in Pune",
  },
  {
    name: "TVS Apache RTR 160 4V",
    image: "/TVS Apache RTR 160 4V.png",
    price: "₹ 1,24,870",
    rating: 4.5,
    reviews: 30,
    location: "Ex-showroom Chennai",
  },
  {
    name: "Suzuki Gixxer SF",
    image: "/Suzuki Gixxer SF.webp",
    price: "₹ 1,37,100",
    rating: 4.4,
    reviews: 18,
    location: "Avg. Ex-showroom price",
  },
  {
    name: "Honda CB300R",
    image: "/Honda CB300R.avif",
    price: "₹ 2,40,000",
    rating: 4.6,
    reviews: 10,
    location: "On road price in Mumbai",
  },
  {
    name: "Hero Xpulse 200 4V",
    image: "/Hero Xpulse 200 4V.webp",
    price: "₹ 1,45,776",
    rating: 4.3,
    reviews: 25,
    location: "Avg. Ex-showroom price",
  },
];

export default function TopRatedBikes() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 320; // Adjust width of one card
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10  ">
         <h2 className="text-2xl text-black font-bold text-center mb-8">Top rated bikes</h2>
         <div className="bg-white py-10 px-4 relative w-[1030px] mb-20">
     

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gray-600 shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-8 py-2"
        >
          {bikes.map((bike, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="relative p-4">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-44 object-contain mx-auto"
                />
                <div className="absolute top-4 right-4 flex items-center gap-1 text-green-600 font-semibold">
                  <Star size={16} fill="green" className="text-green-600" />
                  {bike.rating.toFixed(1)}
                </div>
              </div>

              <div className="border-t px-4 pb-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {bike.name}
                </h3>
                <p className="text-sm text-gray-500">{bike.location}</p>
                <p className="text-xl font-bold text-gray-800 mt-1">
                  {bike.price}
                </p>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} />
                    Read {bike.reviews} reviews
                  </div>
                  <span>›</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-gray-600 shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
    </div>
   
  );
}
