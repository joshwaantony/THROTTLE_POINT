import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return <div>
    <section className="bg-[#002B51] pb-20 pt-8 cursor-pointer  "> 
<div className="px-48">
            <div className="flex  gap-36 py-6 border-b border-[#94A0AF]  ">
<p className="border-r border-[#94A0AF] pr-20 ">Language: English  हिंदी</p>
<p>About Us</p>
<p>Advertise</p>
        </div>
</div>
<div>
    <div className="flex px-48 pt-3 gap-[500px] ">
            <h1 className="text-[#94A0AF] ">Connect with us</h1>
            <h2 className="text-[#94A0AF]">Download Mobile App</h2>

    </div>
<div className="flex  items-center border-b border-[#94A0AF] gap-48 pb-5 mx-48 ">
        <div className=" flex pt-2.5 text-[20px] gap-20 ">
<FaFacebookF className="hover:scale-125"/>
<BsTwitterX className="hover:scale-125" />
<SiYoutube className="hover:scale-125"/>
<IoLogoLinkedin className="hover:scale-125"/>
<FaInstagramSquare className="hover:scale-125"/>
    </div>
    <div className="w-[100px] h-[60px] flex gap-6  items-center ">
        <img src="/app-store.svg" alt="" />
                <img src="/play-store.svg" alt="" />

    </div>
</div>
</div>
    </section>
  </div>;
}

export default Footer;
