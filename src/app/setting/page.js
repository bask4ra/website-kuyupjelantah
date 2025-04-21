import React from "react";
import SidePanel from "../components/sidepanels/page/";

export default function Setting() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Settings</h1>
          <img
            src="/svg/notif.svg"
            alt="notifications"
            width={60}
            height={60}
            className="mr-10"
          />
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-medium">General</h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-account.svg"
                    alt="account"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Account</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-notif.svg"
                    alt="notif"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Notifications</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-rate.svg"
                    alt="rate"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Rate App</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-share.svg"
                    alt="share"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Share App</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-contact.svg"
                    alt="contact"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Contact Support</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img 
                    src="/svg/icon-sign-out.svg"
                    alt="sign"
                    width={46}
                    height={46}
                    className=""
                  />
                  <h1 className="hover:underline font-medium">Sign Out</h1>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
