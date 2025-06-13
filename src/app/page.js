import Section1 from "@/component/Home/Section1";
import Section2 from "@/component/Home/Section2";
import Section4 from "@/component/Home/Section4";
import Navbar from "@/component/Navbar";
import Section3 from "@/component/Home/Section3";


export default function home() {
  return (
   <div>
  <Navbar/>
  <Section1/>
 <div className="px-40 py-4" >
   
  <Section2/>
  <Section3/>
  <Section4/>
  
 </div>

   </div>
  );
}
