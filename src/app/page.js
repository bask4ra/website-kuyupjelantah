import Image from "next/image";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center -mt-10 pt-20 relative">
        <Image
          src="/svg/main-banner.svg"
          width={1312}
          height={538}
          className="px-[15px]"
          alt="Main Banner"
        />
        <div className="absolute top-[55%] left-[calc(15%-48px)] transform -translate-y-1/2 text-left"> 
          <h1 className="text-6xl font-bold text-yellow-500 text-left">From Your Kitchen Waste Oil</h1>
          <h2 className="text-6xl font-semibold text-white text-left">to Cash in One Call Away</h2>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-full mt-4">
            Get Started
          </button>
        </div>
      </div>
       
    </div>
  );
}
