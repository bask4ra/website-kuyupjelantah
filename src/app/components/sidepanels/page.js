import Image from "next/image";

export default function SidePanel() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      {/* Logo Section */}
      <div className="flex items-center justify-between mb-6">
        <Image
          src="/svg/navbar-image.svg" // Logo Kuyup Jelantah
          alt="Logo Kuyup Jelantah"
          width={100}
          height={100}
        />
        <Image
          src="/svg/sidepanel-icon.svg" // Icon SidePanels
          alt="SidePanels Icon"
          width={30}
          height={30}
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center mb-8">
        <Image
          src="/svg/profile-image.svg" // User Profile Image
          alt="User Profile"
          width={50}
          height={50}
          className="rounded-full border border-gray-200"
        />
        <div className="ml-3">
          <p className="text-gray-800 font-bold">Jon Doe</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-4">
        {/* Dashboard */}
        <a
          href="/dashboard"
          className="flex items-center p-2 text-gray-700 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/home-logo.svg"
            alt="Dashboard Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          Dashboard
        </a>

        {/* Schedule */}
        <a
          href="/schedule"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/schedule-logo.svg"
            alt="Schedule Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          Schedule
        </a>

        {/* Royalty Reward */}
        <a
          href="/royalty-reward"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/loyalty-reward-logo.svg"
            alt="Royalty Reward Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          Royalty Reward
        </a>

        {/* History */}
        <a
          href="/history"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/history-logo.svg"
            alt="History Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          History
        </a>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Settings */}
        <a
          href="/settings"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/settings-logo.svg"
            alt="Settings Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          Settings
        </a>

        {/* FAQs */}
        <a
          href="/faqs"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded"
        >
          <Image
            src="/svg/faqs-logo.svg"
            alt="FAQs Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          FAQs
        </a>

        {/* Sign Out */}
        <a
          href="/login"
          className="flex items-center p-2 font-bold hover:bg-gray-100 rounded text-gray-700"
        >
          <Image
            src="/svg/signout-logo.svg"
            alt="Sign Out Logo"
            width={20}
            height={20}
            className="mr-3"
          />
          Sign Out
        </a>
      </nav>
    </aside>
  );
}