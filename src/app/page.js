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
      {/* Why You Should Choose Us Section */}
      <section className="container mx-auto px-6 py-12 bg-yellow-50">
        <h2 className="text-3xl font-bold mb-10">Why You Should Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/svg/oil-bottle.svg"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
              alt="Bottle with lime"
            />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-yellow-500">
                {/* Icon here */}
              </div>
              <div>
                <h3 className="text-xl font-semibold">Fast Pick Up</h3>
                <p className="text-gray-600">We can accommodate same-day service if we're available.</p>
              </div>
            </div>
            {/* Repeat for other features */}
          </div>
        </div>
      </section>
    </div>
  );
}
