import Section1 from "@/component/Home/Section1";
import Section2 from "@/component/Home/Section2";
import Section3 from "@/component/Home/Section3";
import Section4 from "@/component/Home/Section4";
import Section5 from "@/component/Home/Section5";
import Section6 from "@/component/Home/Section6";
import Section7 from "@/component/Home/Section7";
import Section8 from "@/component/Home/Section8";
import React from "react";

function Page() {
  return <div>
 
  <Section1/>
 <div className="px-8 md:px-20 2xl:px-40 py-4" >
  
  <Section2/>
  <Section3/>
  <Section4/> 
  
 </div>
 <Section5/>
  <div className="px-8 md:px-20 2xl:px-40 py-4" >
 <Section6/>
<Section7/>
<Section8/>

 </div>
   </div>;
}

export default Page;
