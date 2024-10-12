"use client"
import { RxCross2 } from "react-icons/rx";
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiLogOut } from "react-icons/fi";

const NavBarComponent = () => {
    const [open, setOpen] = useState(false)
    const [loggedInUser, setloggedInUser] = useState()
    const toOpen = () => {
        setOpen(true)
    }
    const toClose = () => {
        setOpen(false)
    }
 


    return (
        <div className='bg-[#FFA500] sticky top-0 left-0 right-0 p-4 flex z-40 items-center justify-between'>
 
            <div className='flex items-center lg:justify-start justify-between lg:w-20 w-full gap-1'>
                <Image src="/LOGO (1).png" width={60} height={60} alt='image' className="lg:w-[70px] lg:h-[60px] w-[40px] h-[30px]" />
                <IoIosMenu className='text-black text-xl cursor-pointer md:hidden block' onClick={toOpen} />

            </div>
            <div className='md:block hidden '>
                <ul className='flex  items-center   space-x-10'>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent   text-black' href='/home'>Home </Link></li>
                    <li><Link className='font-medium text-lg cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='/courts'>Court</Link></li>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='#'>Shop</Link></li>
                    <li><Link className='font-medium text-lg  cursor-pointer hover:border-2 hover:border-b-black border-x-transparent border-t-transparent text-black' href='/donate'>Donate</Link></li>
                </ul>
            </div>
            <div className='flex gap-2 items-center'>
                    <Link href="/signup">
                        <button className='md:block hidden py-2 px-5 border-[#011344] text-white bg-[#011344] border ml-4 text-sm rounded-md'>
                            Sign Up
                        </button>
                    </Link>

                    <Link href="/signin">
                        <button className='md:block hidden py-2 px-6 border border-black text-black text-sm ml-1 rounded-md'>
                            Login
                        </button>
                    </Link>
                </div>
      

            {open && (
                <>
                    <div className='absolute top-0 bg-gray-600 w-full h-screen left-0 right-0 '>
                        <div className='flex justify-between bg-[#FFA500] items-center p-5'>
                            <h1 className=''>Logo</h1>
                            <div className='flex items-center gap-3'>
                                <IoCartOutline className=' text-2xl text-black font-light ' />
                                <RxCross2 className=' text-2xl text-black font-light cursor-pointer ' onClick={toClose} />
                            </div>
                        </div>
                        <ul className='space-y-3 text-sm mt-10 p-3 font-bold'>
                            <li><Link href="/home" className='focus:text-[#FFA500]' onClick={toClose}>Home</Link></li>
                            <li><Link href="/courts" className='focus:text-[#FFA500]' onClick={toClose}>Court</Link></li>
                            <li><Link href="/" className='focus:text-[#FFA500]' onClick={toClose}>Shop</Link></li>
                            <li><Link href="/donate" className='focus:text-[#FFA500]' onClick={toClose}>Donate</Link></li>
                            {loggedInUser ? (
                                <>
                                    <li onClick={handleLogout}><Link href="/signup" className='focus:text-[#FFA500]' onClick={toClose}>Logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link href="/signin" className='focus:text-[#FFA500]' onClick={toClose}>Login</Link></li>
                                    <li><Link href="/signup" className='focus:text-[#FFA500]' onClick={toClose}>Signup</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </>
            )}

        </div>

    )
}

export default NavBarComponent
