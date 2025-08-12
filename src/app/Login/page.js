// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "@/api/auth";
// import useAuthStore from "@/store/authStore";
// import { LuEye, LuEyeOff, LuCheck } from "react-icons/lu";

// function Page() {
//   const [form, setForm] = useState({ Email: "", Password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const router = useRouter();
//   const setAuth = useAuthStore((state) => state.setAuth);

//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     const payload = {
//       Username: username,
//       Password: password,
//     };
//     const res = await adminLogin(payload);

//     if (res?.success) {
//       router.push("/admin/dashboard");
//     } else {
//       alert("Login failed: " + (res?.message || "Invalid credentials"));
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     alert("Login error. Please try again.");
//   }
// };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
//       style={{ backgroundImage: "url('/login.jpg')" }}
//     >
//       <div className="bg-[#ffffffa4] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm bg-opacity-90">
//         <h2 className="text-2xl font-bold text-center text-black mb-6">
//           Login to Your Account
//         </h2>

//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           {/* Email input */}
//           <div className="relative">
//             <input
//               type="email"
//               name="Email"
//               placeholder="Enter Your Email"
//               value={form.Email}
//               onChange={handleChange}
//               className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
//             />
//             {isValidEmail(form.Email) && (
//               <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-600">
//                 <LuCheck size={20} />
//               </span>
//             )}
//           </div>

//           {/* Password input */}
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="Password"
//               placeholder="Password"
//               value={form.Password}
//               onChange={handleChange}
//               className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-700"
//             >
//               {showPassword ? <LuEyeOff /> : <LuEye />}
//             </span>
//           </div>

//           <div className="text-right text-sm">
//             <Link
//               href="/forgetPassword"
//               className="text-green-600 hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           {error && <p className="text-red-600 text-center text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           Don&apos;t have an account?{" "}
//           <Link href="/Signup" className="text-green-700 underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Page;


"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/api/auth"; // Make sure this is your actual API function
import useAuthStore from "@/store/authStore";
import { LuEye, LuEyeOff, LuCheck } from "react-icons/lu";

function Page() {
  const [form, setForm] = useState({ Email: "", Password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        Username: form.Email,
        Password: form.Password,
      };

      const res = await signIn(payload); // API call

      if (res?.success) {
        setAuth(res.data); // Store auth data in Zustand store
        router.push("/admin/dashboard");
      } else {
        setError(res?.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login error. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
      <div className="bg-[#ffffffa4] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Login to Your Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* Email input */}
          <div className="relative">
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              value={form.Email}
              onChange={handleChange}
              className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            {isValidEmail(form.Email) && (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-600">
                <LuCheck size={20} />
              </span>
            )}
          </div>

          {/* Password input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              value={form.Password}
              onChange={handleChange}
              className="w-full border text-black placeholder:text-black text-center border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-700"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>

          {/* Forgot password */}
          <div className="text-right text-sm">
            <Link
              href="/forgetPassword"
              className="text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Error message */}
          {error && <p className="text-red-600 text-center text-sm">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/Signup" className="text-green-700 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
