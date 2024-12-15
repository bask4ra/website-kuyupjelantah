import Image from "next/image";

export default function Navbar() {
    return (
        <ul className="flex items-center justify-between px-20 py-3">
            <div className="pl-[80px]"><Image src="/svg/navbar-image.svg" width={138} height={60} /></div>
            <div className="flex gap-12 items-center">
                <li className="text-2xl font-medium">Home</li>
                <li className="text-2xl font-medium">How it works</li>
                <li className="text-2xl font-medium">Pricing</li>
                <li className="px-5 border py-2 rounded-full bg-orange">
                    <span className="font-semibold text-base text-white">Schedule Now</span>
                </li>
            </div>
        </ul>
    )
}