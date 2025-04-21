import Link from "next/link";
import SidePanel from "../components/sidepanels/page";

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
            src="/svg/notification-logo.svg"
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
                    src="/svg/user-settings-account.svg"
                    alt="account"
                    width={46}
                    height={46}
                  />
                  <Link href="/settings-account">
                    <h1 className="hover:underline font-medium cursor-pointer">
                      Account
                    </h1>
                  </Link>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img
                    src="/svg/settings-notification.svg"
                    alt="notif"
                    width={46}
                    height={46}
                  />
                  <h1 className="hover:underline font-medium">Notifications</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img
                    src="/svg/settings-rate-app.svg"
                    alt="rate"
                    width={46}
                    height={46}
                  />
                  <h1 className="hover:underline font-medium">Rate App</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img
                    src="/svg/settings-share.svg"
                    alt="share"
                    width={46}
                    height={46}
                  />
                  <h1 className="hover:underline font-medium">Share App</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img
                    src="/svg/settings-share.svg"
                    alt="contact"
                    width={46}
                    height={46}
                  />
                  <h1 className="hover:underline font-medium">Contact Support</h1>
                </span>
              </li>
              <li className="flex items-center justify-between hover:bg-gray-200 p-2">
                <span className="flex items-center gap-6">
                  <img
                    src="/svg/settings-signout.svg"
                    alt="sign"
                    width={46}
                    height={46}
                  />
                  <Link href="/login">
                    <h1 className="hover:underline font-medium cursor-pointer">
                      Sign Out
                    </h1>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
