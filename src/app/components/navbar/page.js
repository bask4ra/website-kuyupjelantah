Navbar
import Image from "next/image";

export default function Navbar() {
    return (
        <ul className="container mx-auto flex items-center justify-between px-12 py-3 inline-block">
            <div className="pl-[120px]">
                <Image src="/svg/navbar-image.svg" width={138} height={60} />
            </div>
            <div className="flex gap-14 items-center pr-[80px]">
                <li className="text-2xl font-medium">Home</li>
                <li className="text-2xl font-medium">How it works</li>
                <li className="text-2xl font-medium">Pricing</li>
                <li className="px-5 border py-3 rounded-full bg-orange hover:bg-yellow-600">
                    <a href="/login" className="font-semibold text-base text-white">
                        Schedule Now
                    </a>
                </li>
            </div>
        </ul>
    )
}
