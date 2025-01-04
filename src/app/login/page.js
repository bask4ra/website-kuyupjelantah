import React from "react";

export default function Login() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-white-100 ">
      {/* Back Button */}
      <div className="absolute top-6 left-8">
        <button className="text-gray-600 text-sm flex items-center">
          &larr; Back
        </button>
      </div>
      {/* Background Gradient */}
     <div className="absolute inset-0 z-10 ">
      <img
              src="/svg/gradient.svg"
              alt="gradient"
              className="w-full h-full object-cover"
            />
      </div> 

      {/* Main Content */}
      <div className="relative bg-white shadow-lg rounded-[30px] flex max-w-[700px] z-10">
        {/* Image Section */}
        <div className="relative w-[40%]  overflow-hidden rounded-[30px]">
          <img
            src="/svg/bottles.svg"
            alt="Jelantah bottles"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <img
              src="/svg/navbar-image.svg" 
              alt="Kuyup Jelantah Logo"
              className="w-[150px] h-[70px]"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-[60%] p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Jon.Doe@gmail.com"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FC9910]  text-white py-2 rounded-2xl font-medium"
            >
              Sign In
            </button>
            <p className="text-center text-gray-500 ">or</p>
            <button
              type="button"
              className="w-full border flex items-center justify-center py-2 rounded-2xl text-gray-600 hover:bg-gray-100"
            >
              <img
                src="/svg/google.svg"
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              Sign In with Google
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't Have an Account?{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
