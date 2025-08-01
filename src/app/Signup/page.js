"use client";

import { signUp } from "@/api/auth";
import useAuthStore from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuEye, LuEyeOff, LuCheck } from "react-icons/lu";

function Page() {
  const [form, setForm] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  // Email validation
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { Firstname, Lastname, Email, Password, ConfirmPassword } = form;

    if (!Firstname || !Lastname || !Email || !Password || !ConfirmPassword) {
      return setError("All fields are required");
    }

    if (!isValidEmail(Email)) {
      return setError("Please enter a valid email");
    }

    if (Password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (Password !== ConfirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await signUp({
        Firstname,
        Lastname,
        Email,
        Password,
      });

      setAuth({ token: res.data.token, user: res.data.user });
      router.push("/home");
    } catch (err) {
      const apiError = err?.response?.data;
      setError(apiError?.message || apiError?.error || "Sign up failed");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/1233.jpg')" }}
    >
      <div className="bg-[#ffffff86] shadow-md rounded-lg p-6 w-full max-w-md backdrop-blur-sm bg opacity-90">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Create Your Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Firstname"
            placeholder="First Name"
            value={form.Firstname}
            onChange={handleChange}
            className="border text-black placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />
          <input
            type="text"
            name="Lastname"
            placeholder="Last Name"
            value={form.Lastname}
            onChange={handleChange}
            className="border text-black placeholder:text-black border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-green-500 text-center"
          />

          {/* Email with checkmark icon if valid */}
          <div className="relative">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={form.Email}
              onChange={handleChange}
              className="w-full border text-black placeholder:text-black border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500 text-center"
            />
            {isValidEmail(form.Email) && (
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-green-600">
                <LuCheck size={20} />
              </span>
            )}
          </div>

          {/* Password with eye icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              placeholder="Password"
              value={form.Password}
              onChange={handleChange}
              className="w-full border text-black placeholder:text-black border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500 text-center"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-700"
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>

          {/* Confirm Password with eye icon */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={form.ConfirmPassword}
              onChange={handleChange}
              className="w-full border text-black placeholder:text-black border-gray-300 rounded-md p-2 pr-10 outline-none focus:ring-2 focus:ring-green-500 text-center"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-700"
            >
              {showConfirmPassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>

          {error && (
            <p className="text-red-600 text-center text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-green-700 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
