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
          <a href="/login" className="bg-yellow-600 hover:bg-yellow-600 text-white font-medium py-2 px-3 rounded-full ">Get Started</a>
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
                  src="/svg/cash.svg"
                  alt="Cash"
                  width={0}
                  height={0}
                  priority={true}
                  quality={100}
                  className="w-[56px] h-[56px] -translate-y-6"
                />
                <p className="font-semibold text-[#3D2F3A] text-[24px] -translate-y-5">Get Paid</p>
                <p className="font-normal text-[#3D2F3A] text-center -translate-y-2">
                  We<aqos/>We’ll paid your UCO based on <br/>volume & paid in cash method <br/>or other method you like
                </p>
              </div>
        </div>
      </div>
      </section>
      <section className="container-sm m-24 relative">
        <div className="grid grid-cols-3">
          <div>
            <h1 className="text-4xl font-bold mb-7">Price Paid</h1>
            <p className="mr-20">The price paid is based on volume of a liter Please contact us if you have any question about the pricing</p>
          </div>
          <div>
            <img className="flex"src="/svg/fire-1.svg" alt="fire-1"/>
            <div className="absolute transform -translate-y-[260px] translate-x-10"> 
            <h1 className="font-semibold text-white text-[32px] mb-2">Big Bottle</h1>
            <a className="font-normal text-white text-[16px] mb-9">Perfect for <strong>Home Cooking Oil</strong> Waste with <br/>a Small to Medium Quantity of Used</a>
            <p className="font-normal text-white text-[24px] translate-y-20"><strong>IDR 6.000/</strong>Liter</p>
            </div>
          </div>
          <div>
            <img className="flex" src="/svg/fire-2.svg" alt="fire-2"/>
            <div className="absolute transform -translate-y-[260px] translate-x-10"> 
            <h1 className="font-semibold text-[#3D2F3A] text-[32px] mb-2">Mini Gallon</h1>
            <a className="font-normal text-[#3D2F3A] text-[16px] mb-9">Perfect for <strong>Medium or Bigger</strong> Quantities <br/>like Street Vendors or Restaurants</a>
            <p className="font-normal text-[#3D2F3A] text-[24px] translate-y-20"><strong>IDR 100.000/</strong>15 Liter</p>
            </div>
          </div>
        </div>

      </section>
      <section className="container-sm mt-64 mr-24 ml-24 mb-24">
      <div className="grid grid-cols-2 gap-10 items-center">
        <Image
          className="rounded-md shadow-lg w-[449px] h-[374px]"
          src="/svg/mini-banner.svg"
          alt="Cooking Oil Process"
          width={0}
          height={0}
          priority={true}
          quality={100}
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">FAQ's</h1>
          <p className="text-lg text-gray-500 mb-6">We cover most asked questions here</p>
          <div className="space-y-4">
            <button className="w-full text-left bg-white shadow-md px-6 py-4 rounded-md flex justify-between items-center">
              How do I schedule a pick-up?
              <Image 
              src="/svg/arrow-icon.svg"
              alt="Arrow Icon"
              width={0}
              height={0}
              priority={true}
              quality={100}
              className="w-[30px] h-[30px]"
              />
            </button>
            <button className="w-full text-left bg-white shadow-md px-6 py-4 rounded-md flex justify-between items-center">
              What area are the services available?
              <Image 
              src="/svg/arrow-icon.svg"
              alt="Arrow Icon"
              width={0}
              height={0}
              priority={true}
              quality={100}
              className="w-[30px] h-[30px]"
              />
            </button>
            <button className="w-full text-left bg-white shadow-md px-6 py-4 rounded-md flex justify-between items-center">
              How do I know when the pick-up is coming?
              <Image 
              src="/svg/arrow-icon.svg"
              alt="Arrow Icon"
              width={0}
              height={0}
              priority={true}
              quality={100}
              className="w-[30px] h-[30px]"
              />
            </button>
            <button className="w-full text-left bg-white shadow-md px-6 py-4 rounded-md flex justify-between items-center">
              What payment method can be used?
              <Image 
              src="/svg/arrow-icon.svg"
              alt="Arrow Icon"
              width={0}
              height={0}
              priority={true}
              quality={100}
              className="w-[30px] h-[30px]"
              />
            </button>
          </div>
        </div>
      </div>
</section>
<section className="bg-[#3D2F3A]">
  <div className="container mx-auto flex justify-between items-center px-8">
    <div className="flex items-center">
      <Image
        src="/svg/fire-3.svg"
        alt="Fire Logo"
        width={0}
        height={0}
        priority={true}
        quality={100}
        className="w-[174px] h-[164px] translate-x-[150px]"
      />
      <p className="text-white font-semibold text-[32px] translate-x-[250px]">Place your order in minutes! Call now</p>
    </div>
    <div className="flex items-center -translate-x-[240px]">
      <p className="text-white font-semibold text-[32px]">or</p>
      <a href="/login" className="bg-[#FC9910] text-white px-6 py-2 rounded-3xl font-medium translate-x-[96px]">
        Get Started
      </a>
    </div>
  </div>
</section>
<section className="bg-[#F9F6F1] py-8">
  <div className="container mx-auto flex justify-between items-center px-8">
    <div className="flex items-center">
      <Image
        src="/svg/navbar-image.svg"
        alt="Kuyup Jelantah Logo"
        width={0}
        height={0}
        priority={true}
        quality={100}
        className="w-[304px] h-[126px] translate-x-20"
      />
    </div>
    <div className="flex flex-col mt-7">
      <h2 className="text-[#3D2F3A] text-[24px] font-semibold mb-[24px]">Business Area & Hours</h2>
      <p className="text-[#3D2F3A] text-[16px] font-normal mb-[24px]">
        Only Available in Cikarang & Around
      </p>
      <p className="text-[#3D2F3A] text-[16px] font-normal mb-[68px]">
        12.00 PM - 8.00 PM, Mon - Fri<br/>8.00 AM - 8.00 PM, Sat - Sun<br/>Open on Weekends
      </p>
    </div>
    <div className="flex flex-col mt-7">
      <h2 className="text-[#3D2F3A] text-[24px] font-semibold -translate-y-[26px] mb-[24px] -translate-x-10">Contact</h2>
        <Image
        src="/svg/whatsapp-icon.svg"
        alt="Whatsapp Icon"
        width={0}
        height={0}
        className="w-10 h-10 -translate-y-[30px] -translate-x-10"/>
        <p className=" translate-x-4 -translate-y-[65px] font-normal text-[16px]">+62812345678</p>
        <Image
        src="/svg/facebook-icon.svg"
        alt="Facebook Icon"
        width={0}
        height={0}
        className="w-10 h-10 -translate-y-[48px] -translate-x-10"/>
        <p className="translate-x-4 -translate-y-[80px] font-normal text-[16px]">Kuyup Jelantah.co</p>
    </div>
  </div>
      <div className="px-5">
        <hr className="border-b border-black my-7"/>
        <div className="flex font-normal">
        <p className="text-[#3D2F3A] text-[16px]">Copyright 2024 - Kuyup Jelantah - All Rights Reserved</p>
        <p className="text-[#3D2F3A] text-[16px] translate-x-[910px]">Terms</p>
        <p className="text-[#3D2F3A] text-[16px] translate-x-[960px]">Privacy</p>
        </div>
      </div>
      </section>
    </div>
  );
}
