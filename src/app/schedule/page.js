"use client";

import React, { useState } from "react";
import SidePanel from "../components/sidepanels/page";

import { db } from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

export default function SchedulePickup() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [volume, setVolume] = useState("1 Liter");
  const [pickupDate, setPickupDate] = useState("2024-10-22");
  const [pickupTime, setPickupTime] = useState("17:00");
  const [notes, setNotes] = useState("");
  const [addressType, setAddressType] = useState("My House");
  const [volumeType, setVolumeType] = useState("Per Liter");
  const [pricing, setPricing] = useState("");

  const handlePickupClick = async () => {
    try {
      await addDoc(collection(db, "pickups"), {
        name,
        address,
        addressType,
        volume,
        volumeType,
        pricing,
        pickupDate,
        pickupTime,
        notes,
        createdAt: new Date(),
      });

      alert("Scheduling Accepted! Your request has been saved.");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to schedule pickup. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <SidePanel />

      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Schedule for Pick Up</h1>
          <img
            src="/svg/notification-logo.svg"
            alt="notifications"
            width={40}
            height={40}
            className="mr-4"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Form Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-sm font-reguler mb-2">Fill All the Fields!</h2>

            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Address Section */}
            <div className="mb-4">
              <label className="block text-xl font-bold mb-2">Address</label>
              <div className="flex gap-2 mb-2">
                <button
                  className={`px-4 py-2 border ${
                    addressType === "My House" ? "bg-[#FC9910] text-white" : "text-[#FC9910]"
                  } rounded-lg`}
                  onClick={() => setAddressType("My House")}
                >
                  My House
                </button>
                <button
                  className={`px-4 py-2 border ${
                    addressType === "Shop" ? "bg-[#FC9910] text-white" : "text-[#FC9910]"
                  } rounded-lg`}
                  onClick={() => setAddressType("Shop")}
                >
                  Shop
                </button>
              </div>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm">Save address</label>
              </div>
            </div>

            {/* Volume Size */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Volume Size</label>
              <div className="flex gap-2 mb-2">
                <button
                  className={`px-4 py-2 border ${
                    volumeType === "Per Liter" ? "bg-[#FC9910] text-white" : "text-[#FC9910]"
                  } rounded-lg`}
                  onClick={() => setVolumeType("Per Liter")}
                >
                  Per Liter
                </button>
                <button
                  className={`px-4 py-2 border ${
                    volumeType === "Per Gallon (15L)" ? "bg-[#FC9910] text-white" : "text-[#FC9910]"
                  } rounded-lg`}
                  onClick={() => setVolumeType("Per Gallon (15L)")}
                >
                  Per Gallon (15L)
                </button>
              </div>
              <input
                type="number"
                className="w-full p-2 border rounded-lg"
                placeholder="Amount"
                onChange={(e) =>
                  setVolume(
                    `${e.target.value} ${
                      volumeType === "Per Gallon (15L)" ? "Gallon(s)" : "Liter(s)"
                    }`
                  )
                }
              />
            </div>

            {/* Pricing */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Pricing (optional)</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="e.g. Rp 50.000"
                value={pricing}
                onChange={(e) => setPricing(e.target.value)}
              />
            </div>

            {/* Pick Up Time */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Pick Up Time</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="flex-1 p-2 border rounded-lg"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
                <input
                  type="time"
                  className="flex-1 p-2 border rounded-lg"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                placeholder="If you have notes for us, you can fill this field"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Summary Section */}
          <div
            className="w-full lg:w-1/3 text-white p-6"
            style={{
              backgroundImage: "url(/svg/subtract.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Summary</h3>

            <p className="text-sm font-bold mb-2">Name:</p>
            <p className="text-sm mb-4">{name || "Not specified"}</p>

            <p className="text-sm font-bold mb-2">Pick-up Address:</p>
            <p className="text-sm mb-4">{address}</p>

            <p className="text-sm font-bold mb-2">Pick-up Time:</p>
            <p className="text-sm mb-4">
              {pickupDate} at {pickupTime}
            </p>

            <p className="text-sm font-bold mb-2">Volume:</p>
            <p className="text-sm mb-4">{volume}</p>

            <p className="text-sm font-bold mb-2">Pricing:</p>
            <p className="text-sm mb-4">{pricing || "Not provided"}</p>

            <p className="text-sm font-bold mb-2">Additional Notes:</p>
            <p className="text-sm mb-4">{notes || "No additional notes provided"}</p>

            <button
              onClick={handlePickupClick}
              className="w-full bg-yellow-400 text-white py-2 rounded-lg font-bold"
            >
              Pick Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

