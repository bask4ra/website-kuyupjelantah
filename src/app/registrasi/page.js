import React from "react";

export default function SignUp() {
  return (
    <div className="relative h-full justify-center">  
      {/* Back Button */}
      <div className="flex justify-start w-full bg-white h-[100px] px-[76px]">
     {/* Background Gradient */}
     <div className="absolute inset-0 -z-10">
      <img
              src="/svg/gradient.svg"
              alt="gradient"
              className="w-full h-full object-cover"
            />
      </div> 
        <button className="text-gray-600 text-max">&larr; Back</button>
      </div>

      {/* Content Container */}
      <div className="flex justify-between gap-[128px] items-center px-[150px] py-[48px]">
        {/* Form Section */}
        <div className="w-[523px] bg-white shadow-2xl rounded-[40px] px-[50px] py-[64px]">
          <form className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jon Doe"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Jon.Doe@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Active Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Active Number
              </label>
              <input
                type="text"
                placeholder="+6281234567"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium"
            >
              Sign Up
            </button>
            <p className="text-center my-4 text-gray-500">or</p>
            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full border flex items-center justify-center py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <img
                src="/svg/google.svg"
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              Sign Up with Google
            </button>
            {/* Already Have Account */}
            <p className="mt-4 text-center text-gray-600 text-sm">
              Already Have Account?{" "}
              <a href="#" className="text-yellow-500 hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
        {/* Illustration Section */}
        <div className="grid gap-10">
          <div>
            <img
              src="/svg/icon.svg"
              alt="Signup Illustration"
              width={414}
              height={582}
            />
          </div>
          <div className="flex justify-end">
            <img
              src="/svg/navbar-image.svg"
              alt="logo signup"
              width={195}
              height={91}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
