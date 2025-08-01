// import Link from "next/link";
// import React from "react";

// const ForgotPassword = () => {
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed px-4"
//       style={{ backgroundImage: "url('/forget.jpg')" }}
//     >
//       <div className="bg-[#ffffff37] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm">
//         <h2 className="text-2xl font-bold text-center text-black mb-6">
//           Reset Your Password
//         </h2>

//         <form className="flex flex-col gap-4">
//           {/* Email */}
//           <input
//             type="email"
//             placeholder="Enter Registered Email"
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {/* New Password */}
//           <input
//             type="password"
//             placeholder="New Password"
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {/* Confirm Password */}
//           <input
//             type="password"
//             placeholder="Confirm New Password"
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Reset Password
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Back to{" "}
//           <Link href="/Login" className="text-green-700 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;




// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { resetPassword } from "@/api/auth"; // your API call
// import { useRouter } from "next/navigation";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!email || !password || !confirm) {
//       return setError("All fields are required");
//     }

//     if (password !== confirm) {
//       return setError("Passwords do not match");
//     }

//     if (password.length < 6) {
//       return setError("Password must be at least 6 characters");
//     }

//     try {
//       await resetPassword({ Email: email, Password: password });
//       setSuccess("Password reset successfully!");
//       setTimeout(() => router.push("/Login"), 2000);
//     } catch (err) {
//       setError(
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         "Reset failed"
//       );
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed px-4"
//       style={{ backgroundImage: "url('/forget.jpg')" }}
//     >
//       <div className="bg-[#ffffff37] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm">
//         <h2 className="text-2xl font-bold text-center text-black mb-6">
//           Reset Your Password
//         </h2>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter Registered Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <input
//             type="password"
//             placeholder="New Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Confirm New Password"
//             value={confirm}
//             onChange={(e) => setConfirm(e.target.value)}
//             className="border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />

//           {error && <p className="text-red-600 text-center">{error}</p>}
//           {success && <p className="text-green-600 text-center">{success}</p>}

//           <button
//             type="submit"
//             className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Reset Password
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Back to{" "}
//           <Link href="/Login" className="text-green-700 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;



"use client";

import Link from "next/link";
import React, { useState } from "react";
import { resetPassword } from "@/api/auth";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password || !confirm) {
      return setError("All fields are required");
    }

    if (password !== confirm) {
      return setError("Passwords do not match");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      await resetPassword({ Email: email, Password: password });
      setSuccess("Password reset successfully!");
      setTimeout(() => router.push("/Login"), 2000);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Reset failed"
      );
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed px-4"
      style={{ backgroundImage: "url('/forget.jpg')" }}
    >
      <div className="bg-[#ffffff37] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Reset Your Password
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Registered Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {isValidEmail(email) && (
              <FaCheckCircle className="absolute right-3 top-3 text-green-600" />
            )}
          </div>

          {/* New Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

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
