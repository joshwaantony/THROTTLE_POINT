import Link from "next/link";
import React from "react";

function Page() {
  return <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/1233.jpg')" }} // ✅ Optional background
    >
      <div className="bg-[#ffffff86] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm bg opacity-90">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Create Your Account
        </h2>
        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="First Name"
            className="border text-black  placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
               <input
            type="text"
            placeholder="Last Name"
            className="border text-black  placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
          <input
            type="email"
            placeholder="Email"
            className="border text-black  placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
          <input
            type="password"
            placeholder="Password"
            className="border text-black  placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
            <input
            type="password"
            placeholder="Confirm Password"
            className="border text-black placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href={"/Login"}  className="text-green-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>;
}

export default Page;




