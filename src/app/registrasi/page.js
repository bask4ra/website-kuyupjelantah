"use client"; // Menandakan bahwa ini adalah Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebaseconfig"; // Import auth dari firebaseconfig

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [activeNumber, setActiveNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault(); // Menghentikan form dari reload halaman

    try {
      // Mendaftar pengguna baru menggunakan email dan password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Kirim email verifikasi
      await sendEmailVerification(user);

      // Informasikan pengguna untuk memverifikasi email mereka
      setSuccessMessage("Account created successfully! Please verify your email to continue.");
      
      // Arahkan pengguna ke halaman login setelah registrasi berhasil
      setTimeout(() => {
        router.push("/login");
      }, 3000); // Redirect setelah 3 detik

    } catch (err) {
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="relative h-full justify-center">
      <div className="flex justify-start w-full bg-white h-[100px] px-[76px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/svg/gradient.svg"
            alt="gradient"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="text-gray-600 text-max">&larr; Back</button>
      </div>

      <div className="flex justify-between gap-[128px] items-center px-[150px] py-[48px]">
        <div className="w-[523px] bg-white shadow-2xl rounded-[40px] px-[50px] py-[64px]">
          <form className="space-y-4" onSubmit={handleSignUp}>
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={activeNumber}
                onChange={(e) => setActiveNumber(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <a href="/login" className="text-yellow-500 hover:underline">
                Sign In
              </a>
            </p>
          </form>
        </div>
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
