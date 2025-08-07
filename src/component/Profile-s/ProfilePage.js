



// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaUserEdit } from "react-icons/fa";
// import { useRouter } from "next/navigation"; // Import router

// function ProfilePage() {
//   const router = useRouter();

//   const handleEditClick = () => {
//     router.push("./edit-profile"); // Navigate to edit profile page
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
//       style={{ backgroundImage: "url('/profile bg.avif')" }}
//     >
//       <div className="absolute inset-0 bg-opacity-50 z-0" />

//       <div className="relative z-10 max-w-4xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-green-500">
//             <Image
//               src="/seb.jpg"
//               alt="Profile Picture"
//               fill
//               style={{ objectFit: "cover" }}
//             />
//           </div>

//           <div className="text-center md:text-left">
//             <h2 className="text-2xl font-bold text-gray-800">Sebastian Andrews</h2>
//             <p className="text-gray-600">seb@example.com</p>
//             <button
//               onClick={handleEditClick}
//               className="mt-3 flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               <FaUserEdit />
//               Edit Profile
//             </button>
//           </div>
//         </div>

//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="text-gray-700 font-semibold mb-2">Full Name</h4>
//             <p className="text-gray-600">Sebastian Andrews</p>
//           </div>
//           <div>
//             <h4 className="text-gray-700 font-semibold mb-2">Phone Number</h4>
//             <p className="text-gray-600">+91 9876543210</p>
//           </div>
//           <div>
//             <h4 className="text-gray-700 font-semibold mb-2">Email</h4>
//             <p className="text-gray-600">seb@example.com</p>
//           </div>
//           <div>
//             <h4 className="text-gray-700 font-semibold mb-2">City</h4>
//             <p className="text-gray-600">Bangalore</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;



// app/profile/page.js or wherever you route it
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaUserEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authStore";

function ProfilePage() {
  const router = useRouter();
  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    if (!user) fetchUser();
  }, [fetchUser, user]);

  const handleEditClick = () => {
    router.push("./edit-profile");
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">User not found</div>;
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/profile bg.avif')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      <div className="relative z-10 max-w-4xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-green-500">
            <Image
              src={user.ProfilePic || "/default-profile.png"}
              alt="Profile Picture"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.Firstname} {user.Lastname}
            </h2>
            <p className="text-gray-600">{user.Email}</p>
            <button
              onClick={handleEditClick}
              className="mt-3 flex items-center gap-2 text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              <FaUserEdit />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-gray-700 font-semibold mb-2">First Name</h4>
            <p className="text-gray-600">{user.Firstname}</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-semibold mb-2">Last Name</h4>
            <p className="text-gray-600">{user.Lastname}</p>
          </div>
          <div>
            <h4 className="text-gray-700 font-semibold mb-2">Email</h4>
            <p className="text-gray-600">{user.Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
