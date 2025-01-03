import SidePanel from "../components/sidepanels/page";
import Image from "next/image";

export default function FAQs() {
  return (
    <div className="h-screen flex bg-white-100 font-sans">
      {/* Sidebar */}
      <SidePanel />

      {/* Main Content */}
      <main className="flex-1 flex-col overflow-y-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">FAQs</h1>
          {/* Notification Icon */}
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

        {/* FAQs Content */}
        <div className="flex items-start space-x-8">
          {/* FAQ List */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">FAQ's</h2>
            <p className="text-gray-600 mb-6">
              We cover most asked questions here
            </p>

            <div className="space-y-4">
              {/* FAQ Item */}
              <div
                className="flex justify-between items-center bg-gray-100 rounded-xl w-[600px] h-[60px] p-4 shadow-sm cursor-pointer hover:bg-gray-200"
              >
                <p className="text-gray-800 font-semibold">
                  How do I schedule a pick up?
                </p>
                <Image
                  src="/svg/arrow-icon.svg"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>

              <div
                className="flex justify-between items-center bg-gray-100 rounded-xl w-[600px] h-[60px] p-4 shadow-sm cursor-pointer hover:bg-gray-200"
              >
                <p className="text-gray-800 font-semibold">
                  What area are the service available?
                </p>
                <Image
                  src="/svg/arrow-icon.svg"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>

              <div
                className="flex justify-between items-center bg-gray-100 rounded-xl w-[600px] h-[60px] p-4 shadow-sm cursor-pointer hover:bg-gray-200"
              >
                <p className="text-gray-800 font-semibold">
                  How do I know when the pick up are coming?
                </p>
                <Image
                  src="/svg/arrow-icon.svg"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>

              <div
                className="flex justify-between items-center bg-gray-100 rounded-xl w-[600px] h-[60px] p-4 shadow-sm cursor-pointer hover:bg-gray-200"
              >
                <p className="text-gray-800 font-semibold">
                  What payment method can be done through?
                </p>
                <Image
                  src="/svg/arrow-icon.svg"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>

          {/* FAQ Illustration */}
          <div className="flex-1">
            <Image
              src="/svg/thingking-icon.svg"
              alt="Thinking Illustration"
              width={450}
              height={300}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
