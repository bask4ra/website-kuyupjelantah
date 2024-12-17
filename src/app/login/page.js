import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-yellow-50 relative">
      {/* Back Button */}
      <button className="absolute top-10 left-20 text-gray-600 text-max">
        &larr; Back
      </button>

      <div className="flex items-center justify-center">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form className="space-y-4">
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
          </form>
          {/* Divider */}
          <div className="text-center my-4 text-gray-500">or</div>
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
        </div>

      </div>
        {/* Illustration Section */}
        <div className="hidden md:flex justify-end items-center p-6">
            <div className="relative ml-20">
          <img
            src="/svg/icon.svg"
            alt="Signup Illustration"
            className="w-[150px] md:w-[200px] lg:w-[200px] h-auto"
          />
        </div>
    </div>
    </div>
  );
}
