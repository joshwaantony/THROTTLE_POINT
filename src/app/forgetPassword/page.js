import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed px-4"
      style={{ backgroundImage: "url('/forget.jpg')" }}
    >
      <div className="bg-[#ffffff37] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Reset Your Password
        </h2>

        <form className="flex flex-col gap-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Enter Registered Email"
            className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {/* New Password */}
          <input
            type="password"
            placeholder="New Password"
            className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm New Password"
            className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Back to{" "}
          <Link href="/Login" className="text-green-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
