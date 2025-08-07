



// "use client";

// import React, { useState } from "react";
// import { FaSave } from "react-icons/fa";
// import Image from "next/image";

// export default function EditProfilePage() {
//   const [formData, setFormData] = useState({
//     name: "Sebastian Andrews",
//     email: "seb@example.com",
//     phone: "+91 9876543210",
//     city: "Bangalore",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated Data:", formData);
//     // send to backend or API
//   };

//   return (
//     <div className="min-h-screen bg-cover bg-fixed bg-center  bg-no-repeat bg-[url('/editprofile.avif')] flex items-center justify-center px-4">
//       <div className="w-full max-w-3xl bg-[#ffffffd2] backdrop-blur-md rounded-2xl shadow-2xl p-8">
//         <div className="flex flex-col items-center">
//           <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-green-500 mb-4">
//             <Image
//               src="/seb.jpg"
//               alt="Profile"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-1">
//             Edit Profile
//           </h2>
//           <p className="text-gray-500 mb-6">{formData.email}</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
//               />
//             </div>
//           </div>

//           <div className="text-right">
//             <button
//               type="submit"
//               className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//             >
//               <FaSave />
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

import useAuthStore from "@/store/authStore";
import { putProfileUpdate } from "@/api/user";
import toast from "react-hot-toast";

export default function EditProfilePage() {
  const { user } = useAuthStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  // Populate form with user data from Zustand
  useEffect(() => {
    if (user) {
      setFormData({
        name: `${user.Firstname || ""} ${user.Lastname || ""}`,
        email: user.Email || "",
        phone: user.Phonenumber || "",
        city: user.City || "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit updated profile to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [Firstname, Lastname = ""] = formData.name.split(" ");

      const updatedData = {
        Firstname,
        Lastname,
        Email: formData.email,
        Phonenumber: formData.phone,
        City: formData.city,
        ProfilePic: user.ProfilePic, // retain existing profile pic
      };

      await putProfileUpdate(updatedData);

      toast.success("Profile updated successfully!");
      // router.push("/profile"); // redirect to profile page
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat bg-[url('/editprofile.avif')] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-[#ffffffd2] backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-green-500 mb-4">
            <Image
              src={user?.ProfilePic || "/default-profile.jpg"}
              alt="Profile"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Edit Profile
          </h2>
          <p className="text-gray-500 mb-6">{formData.email}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <FaSave />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
