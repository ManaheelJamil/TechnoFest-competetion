"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";

export default function Navbar() {
    const [dropDown, setDropdown] = useState(false)
    const handleOpen = () => {
        setDropdown(true)
    }
    const handleCLose = () => {
        setDropdown(false)
    }
    return (
        <>
            <div className="gradient lg:px-20 sticky  z-40 right-0 left-0 top-0 px-10 mx-auto flex items-center justify-between">
                <Image src="/logo.webp" alt="logo" width={100} height={100} />
                <div className="lg:block hidden">
                    <ul className="flex items-center space-x-5">
                        <li className="text-xl text-white font-bold "><Link href="/">Home</Link></li>
                        <li className="text-xl text-white font-bold "><Link href="/About">About us </Link></li>
                        <li className="text-xl text-white font-bold "><Link href="/Comptetion">Competetion</Link></li>
                        <li className="text-xl text-white font-bold "><Link href="">Medcon</Link></li>
                        <li className="text-xl text-white font-bold "><Link href="">Contact us</Link></li>
                    </ul>
                </div>
                <div>
                    {dropDown === true ? (
                        <RiCloseFill onClick={handleCLose} className="-mt-5 lg:hidden block cursor-pointer absolute right-10  text-white text-3xl  " />
                        
                    ) : (
                        <IoMenu onClick={handleOpen} className="text-3xl cursor-pointer  text-white lg:hidden block" />

                    )}

                </div>
                <button className="shadow-xl lg:block hidden text-white bg-blue-500 rounded-md p-2 w-32">
                    RS 0.00
                </button>
            </div>
            {dropDown && (
                <div>
                    <div className="gradient fixed top-28   left-0 right-0 z-40 py-10">

                        <ul className="text-center space-y-5 ">
                            <li className="text-xl text-white font-bold " ><Link href="/">Home</Link></li>
                            <li className="text-xl text-white font-bold " ><Link href="/About">About us </Link></li>
                            <li className="text-xl text-white font-bold " ><Link href="/Comptetion">Competetion</Link></li>
                            <li className="text-xl text-white font-bold " ><Link href="">Medcon</Link></li>
                            <li className="text-xl text-white font-bold " ><Link href="">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            )}

        </>
    );
}
