// import React from "react";
// import { BsTwitterX } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { SiYoutube } from "react-icons/si";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaInstagramSquare } from "react-icons/fa";

// function Footer() {
//   return <div>
//     <section className="bg-[#002B51] pb-20 pt-8 cursor-pointer  "> 
// <div className="px-48">
//             <div className="flex  gap-36 py-6 border-b border-[#94A0AF]  ">
// <p className="border-r border-[#94A0AF] pr-20 ">Language: English  हिंदी</p>
// <p>About Us</p>
// <p>Advertise</p>
//         </div>
// </div>
// <div>
//     <div className="flex px-48 pt-3 gap-[500px] ">
//             <h1 className="text-[#94A0AF] ">Connect with us</h1>
//             <h2 className="text-[#94A0AF]">Download Mobile App</h2>

//     </div>
// <div className="flex  items-center border-b border-[#94A0AF] gap-48 pb-5 mx-48 ">
//         <div className=" flex pt-2.5 text-[20px] gap-20 ">
// <FaFacebookF className="hover:scale-125"/>
// <BsTwitterX className="hover:scale-125" />
// <SiYoutube className="hover:scale-125"/>
// <IoLogoLinkedin className="hover:scale-125"/>
// <FaInstagramSquare className="hover:scale-125"/>
//     </div>
//     <div className="w-[100px] h-[60px] flex gap-6  items-center ">
//         <img src="/app-store.svg" alt="" />
//                 <img src="/play-store.svg" alt="" />

//     </div>
// </div>
// </div>
//     </section>
//   </div>;
// }

// export default Footer;


import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="bg-[#002B51] pb-10 pt-8 cursor-pointer">
        <div className="px-6 md:px-16 lg:px-28 xl:px-48">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-36 py-6 border-b border-[#94A0AF]">
            <p className="text-white border-b md:border-b-0 md:border-r border-[#94A0AF] pb-2 md:pb-0 md:pr-6">
              Language: <span className="text-gray-300">English हिंदी</span>
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-white">
              <p>About Us</p>
              <p>Advertise</p>
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 pt-6">
            <h1 className="text-[#94A0AF] text-base order-1 md:order-none">Connect with us</h1>
            <h2 className="text-[#94A0AF] text-base order-3 md:oredr-none">Download Mobile App</h2>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#94A0AF] py-5">
            {/* Social Icons */}
            <div className="flex gap-6 text-[20px] text-white order-2 md:order-none">
              <FaFacebookF className="hover:scale-125 transition-transform duration-200" />
              <BsTwitterX className="hover:scale-125 transition-transform duration-200" />
              <SiYoutube className="hover:scale-125 transition-transform duration-200" />
              <IoLogoLinkedin className="hover:scale-125 transition-transform duration-200" />
              <FaInstagramSquare className="hover:scale-125 transition-transform duration-200" />
            </div>

            {/* App Store Logos */}
            <div className="flex gap-4 items-center order-4 md:order-none">
              <img src="/app-store.svg" alt="App Store" className="h-10 w-auto" />
              <img src="/play-store.svg" alt="Play Store" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
