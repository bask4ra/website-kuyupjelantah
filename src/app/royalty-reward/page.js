import React from "react";
import SidePanel from "../components/sidepanels/page"; // pastikan path ini benar sesuai dengan struktur proyek Anda

export default function LoyaltyReward() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Combined Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Loyalty Card Section */}
          <div
            className="p-6 text-white rounded-lg bg-cover bg-center mb-8"
            style={{
              backgroundImage: "url('/svg/bg-loyalty.svg')",
              backgroundSize: "431x 136x",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-xl font-bold text-[#F9D876] mb-2 text-left">Loyalty Card</h2>
            <p className="text-sm font-reguler mb-2 text-left">Current Of Volume</p>
            <p className="text-3xl font-bold text-[#F9D876] mb-2 text-left">18 Liter</p>
            <p className="text-right">Keep Your Milestone Before Expiry 12/24</p>
          </div>

          {/* Milestone Criteria Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Milestone Criteria</h3>
            <div className="flex space-x-4 justify-start">
              <div className="bg-[#FFEDB9] text-center px-4 py-2 rounded-lg">
                <div className="text-[#FC9910] font-bold">Classic</div>
                <p className="font-reguler mt-2">Default Milestone</p>
              </div>
              <div className="bg-[#FFEDB9] text-center px-4 py-2 rounded-lg">
                <div className="text-[#FC9910] font-bold">Silver</div>
                <p className="font-reguler mt-2">Reach 15 Liter Volume</p>
              </div>
              <div className="bg-[#FFEDB9] text-center px-4 py-2 rounded-lg">
                <div className="text-[#FC9910] font-bold">Gold</div>
                <p className="font-reguler mt-2">Reach 50 Liter Volume</p>
              </div>
              <div className="bg-[#FFEDB9] text-center px-4 py-2 rounded-lg">
                <div className="text-[#FC9910] font-bold">Platinum</div>
                <p className="font-reguler mt-2">Reach 150 Liter Volume</p>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rewards</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <div className="flex items-start">
                  <img src="/svg/rewards.svg" alt="Reward Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">Reach Silver</span>
                    <p>for Mobile Credit Voucher Worth Rp30,000</p>
                  </div>
                </div>
                <button className="bg-white border border-[#FC9910] text-[#FC9910] rounded-lg px-4 py-2">
                  Redeem
                </button>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-start">
                  <img src="/svg/rewards.svg" alt="Reward Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">Reach Gold</span>
                    <p>for Essential Goods Package Worth Rp40,000</p>
                  </div>
                </div>
                <img src="/svg/lock.svg" alt="Lock Icon" className="w-6 h-6 ml-4" />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-start">
                  <img src="/svg/rewards.svg" alt="Reward Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">Reach Platinum</span>
                    <p>for Essential Goods Package Worth Rp50,000</p>
                  </div>
                </div>
                <img src="/svg/lock.svg" alt="Lock Icon" className="w-6 h-6 ml-4" />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-start">
                  <img src="/svg/rewards.svg" alt="Reward Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">Reach 250 Liter</span>
                    <p>for Exclusive Mini Kitchen Set</p>
                  </div>
                </div>
                <img src="/svg/lock.svg" alt="Lock Icon" className="w-6 h-6 ml-4" />
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-start">
                  <img src="/svg/rewards.svg" alt="Reward Icon" className="w-6 h-6 mr-2" />
                  <div>
                    <span className="font-bold">Reach 500 Liter</span>
                    <p>for Exclusive Standing Fan</p>
                  </div>
                </div>
                <img src="/svg/lock.svg" alt="Lock Icon" className="w-6 h-6 ml-4" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}