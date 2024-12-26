import SidePanel from "../components/sidepanels/page";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <main className="flex-1 p-6">
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
        <div className="mb-6">
          <Image
            src="/svg/dashboard-banner.svg"
            alt="Dashboard Banner"
            width={1200}
            height={319}
          />
        </div>

        {/* Replacing Yellow Box with Image */}
        <div className="mb-6">
          <Image
            src="/svg/dashboard-second-banner.svg"
            alt="Second Dashboard Banner"
            width={1200}
            height={178}
          />
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