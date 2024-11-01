import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ROSE from "./public/assets/rose.png"
export default function Home() {
  return (
    <div>
  <div className="bg-red-100  flex justify-around items-start">
   <h1 className="text-5xl font-bold p-20 my-10">
    Flower Tells, <br />
    Flower Heals!
  </h1>
<Image className="w-80 h-70" src={ROSE} alt="" />
  </div>
<Footer/>
    </div>
    
  );
}

