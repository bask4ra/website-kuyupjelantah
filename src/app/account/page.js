import React from "react";
import SidePanel from "../components/sidepanels/page";

export default function Setting() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Settings</h1>
          <img
            src="/svg/notif.svg"
            alt="notifications"
            width={60}
            height={60}
            className="mr-10"
          />
        </div>

        {/* Account Section */}
        <h2 className="text-lg font-semibold mb-4">Account</h2>

        {/* Profile Picture Section */}
        <div className="flex justify-between items-center space-x-6 mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="/svg/profile-image.svg"
                alt="Profile Picture"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">Profile Picture</p>
              <p className="text-sm text-gray-500">PNG, JPEG under 10MB</p>
            </div>
          </div>
          <div className="flex space-x-4 ">
            <button className="px-4 py-2 bg-[#FC9910] text-white rounded">
              Upload new picture
            </button>
            <button className="px-4 py-2 border border-[#FC9910] text-[#FC9910] rounded">
              Delete
            </button>
          </div>
        </div>

        {/* Full Name */}
        <div className="mb-8">
          <p className="font-medium mb-2">Full Name</p>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              defaultValue="Jon"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded px-4 py-2 w-full"
              defaultValue="Doe"
            />
          </div>
        </div>

        {/* Contact Email */}
        <div className="mb-8">
          <p className="font-medium mb-2">Contact Email</p>
          <p className="text-sm text-gray-500 mb-2">
            Manage your account's email address for invoices.
          </p>
          <div className="flex justify-between items-center space-x-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2"
              defaultValue="Jon.Doe@gmail.com" 
            />
            <button className="px-4 py-2 bg-[#FC9910] text-white rounded">
              Change email address
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="mb-8">
          <p className="font-medium mb-2">Password</p>
          <p className="text-sm text-gray-500 mb-2">
            Modify your current password.
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <div>
              <input
                type="password"
                placeholder="New password"
                className="border border-gray-300 rounded px-4 py-2 w-full mb-2"
              />
              <p className="text-sm text-gray-500">(4 characters minimum)</p>
              <input
                type="password"
                placeholder="Confirm new password"
                className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Current password"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                defaultValue="••••••••"
              />
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-[#FC9910] text-white rounded ml-80">
            Change my password
          </button>
        </div>
      </div>
    </div>
  );
}
