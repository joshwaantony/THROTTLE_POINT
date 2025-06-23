import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import React from "react";

function layout({children}) {
  return <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>;
}

export default layout;
