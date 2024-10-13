import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
    return (
        <>
            <div className="w-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-10 ">
                <div className="lg:w-[50%] lg:mx-auto px-5 ">
                <Image src="/logo.webp" alt="logo" width={200} height={200} className="mx-auto"/>
                    <p className="lg:text-xl text-sm text-white font-bold text-center ">Empowering innovation, igniting future leaders. Teknofest Pakistan – where technology meets limitless possibilities
                    </p>
                    <div className="flex items-center mt-10 justify-center gap-5">
                        <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-gray-600">
                            <ImFacebook className="text-white text-xl " />
                        </div>
                        <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-gray-600">
                            <FaInstagram className="text-white text-xl " />
                        </div>
                        <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-gray-600">
                            <FaYoutube className="text-white text-xl " />
                        </div>
                        <div className="w-10 h-10 rounded-full flex flex-col justify-center items-center bg-gray-600">
                            <FaLinkedin className="text-white text-xl " />

                        </div>
                    </div>
                    <hr className="border border-gray-800 w-full my-10" />
                    <div>
                        <ul className="flex lg:text-xl text-xs text-white font-bold items-center justify-between space-x-5">
                            <li className=""><Link href="">Home</Link></li>
                            <li className=""><Link href="">About us </Link></li>
                            <li className=""><Link href="">Competetion</Link></li>
                            <li className=""><Link href="">Contact us</Link></li>
                        </ul>
                    </div>
                    <p className="lg:text-xl text-sm mb-5 lg:mt-20 mt-10 font-bold text-center text-white ">Copyright ©2023 TeknoFest All Rights Reserved Copyright</p>
                    <div className="flex items-center justify-center  gap-2 ">
                        <p className="lg:text-xl text-xs text-white font-bold ">Powered BY:</p>
                        <p className="lg:text-xl text-xs font-bold text-green-900">workup Solutions</p>
                    </div>
                </div>
            </div>
        </>
    )
}