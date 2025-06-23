


import Link from "next/link";
import React from "react";


const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed px-4 "
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <div className="bg-[#ffffffa4] shadow-md rounded-lg p-6 w-full max-w-md bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Login to Your Account
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border  text-black  placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
          />
                 {/* Forgot Password Link */}
          <div className="text-right text-sm">
            <Link href="/forgetPassword" className="text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          {/* <span className="text-green-600 cursor-pointer">Sign up</span> */}
          <Link
           href="/Signup">
  <button className="text-sm text-green-600 underline">Sign Up</button>
</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


