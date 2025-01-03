import Image from "next/image";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="container flex justify-center items-center -mt-10 pt-20 mx-auto relative">
        <Image src="/svg/main-banner.svg" width={1312} height={538} className="px-[15px]" alt="Main Banner"
        />
        <div className="absolute top-[55%] left-[calc(15%-48px)] transform -translate-y-1/2"> 
          <h1 className="text-6xl font-bold text-yellow-500 mb-5">From Your Kitchen Waste Oil</h1>
          <h2 className="text-6xl font-semibold text-white mb-5">to<a className="text-yellow-500"> Cash</a> in One Call Away</h2>
          <button className="bg-yellow-600 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded-full ">Get Started</button>
        </div>
      </section>
      <section className="container-sm ml-24 mr-24 mt-20 relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
          <div>
          <h2 className="text-6xl font-bold mb-10 text-[#3D2F3A]">Why You Should<br></br> Choose Us</h2><br></br>
            <Image
              src="/svg/oil-bottle.svg"
              width={470}
              height={300}
              className="rounded-lg shadow-md flex items-end"
              alt="Bottle with lime"
            />
          </div>
          <div className="grid grid-cols-2 text-[#3D2F3A] tra">
            <div className="">
            <img src="/svg/exercise.svg" alt="Fast Pick Up"/>
            <h4 className="text-2xl font-bold">Fast Pick Up</h4>
            <p>We can Accommodate same day service of we're available</p>
            </div>
            <div className="">
            <img src="/svg/trust.svg" alt="Trusted"/>
            <h4 className="text-2xl font-bold">Reliabity</h4>
            <p>We're local-family owned & operated, we value your bussines and understand how important it is to dump used cooking oil correctly</p>
            </div>
            <div className="">
            <img src="/svg/schedule.svg" alt="Schedule"/>
            <h4 className="text-2xl font-bold">Schedule Anytime</h4>
            <p>You can schedule your pick-up time flexibly according to your preference</p>
            </div>
            <div className="">
            <img src="/svg/man-with-money.svg" alt="Money"/>
            <h4 className="text-2xl font-bold">Paid Fairly</h4>
            <p>All our payment are made in cast at pick up with no additional fees or charges</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container w-auto mx-auto bg-[url('/svg/second-banner.svg')] sm:py-52 mt-20 flex justify-center items-center">
      <div>
        <h1 className="text-6xl font-semibold text-[#F9D876] text-center -translate-y-16">How Our Service Works</h1>
        <div className="grid grid-cols-3 gap-10">
        <div className="w-[262px] h-[300px] bg-[#3D2F3A] bg-opacity-45 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-semibold text-[#F9D876] text-[56px] -translate-x-20 -translate-y-5">1</p>
                <Image
                  src="/svg/ScheduleYellow.svg"
                  alt="Money"
                  width={0}
                  height={0}
                  priority={true}
                  quality={100}
                  className="w-[56px] h-[56px] -translate-y-6"
                />
                <p className="font-semibold text-[#F9D876] text-[24px] -translate-y-5">Schedule</p>
                <p className="font-normal text-white text-center -translate-y-2">
                  Click or Call to schedule <br/>a pick up online
                </p>
              </div>
        <div className="w-[262px] h-[300px] bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-semibold text-[#3D2F3A] text-[56px] -translate-x-20 -translate-y-5">2</p>
                <Image
                  src="/svg/man-give.svg"
                  alt="Man Give"
                  width={0}
                  height={0}
                  priority={true}
                  quality={100}
                  className="w-[56px] h-[56px] -translate-y-6"
                />
                <p className="font-semibold text-[#3D2F3A] text-[24px] -translate-y-5">Pick Up</p>
                <p className="font-normal text-[#3D2F3A] text-center -translate-y-2">
                  We<aqos/>ll inform you the pickup <br/>when is ready & keep you <br/>updated along the way
                </p>
              </div>
              <div className="w-[262px] h-[300px] bg-white bg-opacity-45 rounded-3xl flex flex-col items-center justify-center">
                <p className="font-semibold text-[#3D2F3A] text-[56px] -translate-x-20 -translate-y-5">3</p>
                <Image
                  src="/svg/man-give.svg"
                  alt="Man Give"
                  width={0}
                  height={0}
                  priority={true}
                  quality={100}
                  className="w-[56px] h-[56px] -translate-y-6"
                />
                <p className="font-semibold text-[#3D2F3A] text-[24px] -translate-y-5">Get Paid</p>
                <p className="font-normal text-[#3D2F3A] text-center -translate-y-2">
                  We<aqos/>ll inform you the pickup <br/>when is ready & keep you <br/>updated along the way
                </p>
              </div>
        </div>
      </div>
      </section>
      <section className="container-sm ml-24 mr-24 mt-24 relative">
        <div className="pt-10 grid grid-cols-3">
          <div>
            <h1 className="text-4xl font-bold">Price Paid</h1>
            <p className="mr-20">The price paid is based on volume of a liter Please contact us if you have any question about the pricing</p>
          </div>
          <div>
            <img className="flex"src="/svg/fire-1.svg" alt="fire-1"/>
            <div className="absolute top-[10%] transform -translate-y-1/2"> 
          <h1 className="pt-44 text-2xl font-bold text-white ">Big Bottle</h1>
          <a>Perfect</a>
          <br></br>
          <br></br>
          <h2>IDR 6.000/Liter</h2>
        </div>
          </div>
          <div>
            <img className="flex" src="/svg/fire-2.svg" alt="fire-2"/>
            <div className="absolute top-[10%] transform -translate-y-1/2"> 
          <h1 className="pt-44 text-2xl font-bold">Mini Gallon</h1>
          <a>Perfect </a>
          <br></br>
          <br></br>
          <h2>IDR 100.000/15 Liter</h2>
        </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid grid-cols-3">
          <div>
          </div>
          <div>

          </div>
          <div className="grid grid-rows-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </section>
    </div>
  );
}
