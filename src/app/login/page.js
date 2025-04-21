"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebaseconfig";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Sign in dengan email dan password
  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Verifikasi email
      if (!user.emailVerified) {
        setError("Please verify your email address.");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to sign in. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  // Sign in dengan Google
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      setError("Failed to sign in with Google.");
    } finally {
      setIsLoading(false);
    }
  };

  // Kembali ke halaman utama
  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-white-100">
      <div className="absolute top-6 left-8">
        <button
          onClick={handleBack}
          className="text-gray-600 text-sm flex items-center"
        >
          &larr; Back
        </button>
      </div>
      <div className="absolute inset-0 z-10">
        <img
          src="/svg/gradient.svg"
          alt="gradient"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative bg-white shadow-lg rounded-[30px] flex max-w-[700px] z-10">
        <div className="relative w-[40%] overflow-hidden rounded-[30px]">
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
        <div className="w-[60%] p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Sign In</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jon.Doe@gmail.com"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              type="button"
              onClick={handleSignIn}
              className="w-full bg-orange hover:bg-orange-600 text-white py-2 rounded-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            <p className="text-center text-gray-500">or</p>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full border flex items-center justify-center py-2 rounded-lg text-gray-600 hover:bg-gray-100"
              disabled={isLoading}
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
            <a href="/registrasi" className="text-yellow-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
