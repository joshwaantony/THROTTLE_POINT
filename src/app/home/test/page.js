import React from "react";

function page() {
  return <div>
 
<div
  className="w-full h-screen ps-[450px] "
  style={{
    background: 'linear-gradient(33deg, rgba(16, 21, 25, 1) 50%, rgba(123, 69, 247, 1) 100%)',
  }}
>
  <form className="bg-white  p-10 rounded-2xl shadow-lg w-full max-w-md space-y-6 ">
    <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

    <div>
      <label htmlFor="firstName" className="block text-gray-600 font-medium mb-1">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        placeholder="Enter your first name"
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div>
      <label htmlFor="secondName" className="block text-gray-600 font-medium mb-1">
        Second Name
      </label>
      <input
        type="text"
        id="secondName"
        placeholder="Enter your second name"
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="example@mail.com"
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <div>
      <label htmlFor="password" className="block text-gray-600 font-medium mb-1">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="••••••••"
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-200"
    >
      Submit
    </button>
  </form>
</div>



  </div>;
}

export default page;
