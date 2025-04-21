import SidePanel from "../components/sidepanels/page";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="h-screen flex bg-white-100 font-sans">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <main className="flex-1 flex-col overflow-y-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          {/* Notification Logo aligned to the right */}
          <div className="ml-auto">
            <Image
              src="/svg/notification-logo.svg"
              alt="Notification Logo"
              width={60}
              height={60}
              className="self-center"
            />
          </div>
        </header>

        {/* Loyalty Reward Banner */}
        <div className="relative mb-6">
          <Image
            src="/svg/dashboard-banner.svg"
            alt="Dashboard Banner"
            width={1200}
            height={319}
            className="rounded-lg"  
          />
          {/* Teks di atas banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-extrabold text-[#F9D876]">Loyalty Reward ✨</h2>
              <div>
              </div>
            </div>
            <p className="text-sm">Current Oil Volume</p>
            <h1 className="text-4xl font-extrabold text-[#F9D876] mt-2">18 Liter</h1>
            <p className="text-sm mt-2">
              Reach <span className="font-bold">50 Liter</span> for Next Milestone
            </p>
            <a
              href="#"
              className="mt-4 text-sm underline text-blue-300 hover:text-blue-400"
            >
              See Reward
            </a>
            <p className="absolute bottom-4 right-11 text-sm text-gray-300">
              Expiry 12/24
            </p>
          </div>
        </div>

{/* Replacing Yellow Box with Image */}
<div className="relative mb-6">
  <Image
    src="/svg/dashboard-second-banner.svg"
    alt="Second Dashboard Banner"
    width={1200}
    height={178}
    className="rounded-lg"
  />
  <div className="absolute inset-0 flex items-center justify-start pl-6 pr-6">
    <h2 className="text-3xl font-bold text-white leading-tight mr-40">
      Have Used Cooking Oil<br />Right Now?
    </h2>
    <button className="px-4 py-2 ml-4 bg-[#3D2F3A] text-white rounded-2xl">
      Schedule Now
    </button>
  </div>
</div>



        {/* Overview History */}
        <div className="p-6 w-full"> {/* Adjust width to match the banner above */}
          <h2 className="text-lg font-bold mb-4">Overview History</h2>
          <table className="w-full text-left text-sm text-gray-700">
            <thead>
              <tr>
                <th className="border-b py-2">Amount</th>
                <th className="border-b py-2">Date</th>
                <th className="border-b py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">8 Liter</td>
                <td className="py-2">24/04/2024</td>
                <td className="py-2">
                  <span className="bg-green-100 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    Done
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-2">2 Liter</td>
                <td className="py-2">01/04/2024</td>
                <td className="py-2">
                  <span className="bg-green-100 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    Done
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-2">4 Liter</td>
                <td className="py-2">05/04/2024</td>
                <td className="py-2">
                  <span className="bg-green-100 text-green-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    Done
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}