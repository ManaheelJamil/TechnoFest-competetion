import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";

export default function Overview () {
    return (
        <div className='flex lg:p-4 my-20 justify-center md:justify-start items-center m-auto w-full flex-wrap md:px-10 lg:max-w-[90%]'>
            <div className='md:w-1/2 px-6'>
                {/* first section */}
                <div className='flex flex-col'>
                    <h1 className='text-[22px] md:text-3xl lg:text-[28px] text-center md:text-start'>Overview</h1>
                    <h1 className='text-[26px] md:text-3xl lg:text-[28px] text-center md:text-start font-bold'>Get the latest info about <span className='text-[#388636] font-bold'>TEKNOFEST</span> </h1>
                    <p className='text-[13px] md:text-lg lg:text-lg text-wrap text-center md:text-start text-gray-500 py-3'>
                        Teknofest Pakistan is a cutting-edge technology and innovation festival, dedicated to fostering creativity,
                        entrepreneurship, and scientific development. Drawing inspiration from the globally renowned Teknofest, this
                        event brings together the brightest minds, forward-thinking startups, and tech enthusiasts from across the nation.
                        Focused on promoting advancements in fields such as robotics, artificial intelligence, aerospace, and green technologies,
                        Teknofest Pakistan offers participants an opportunity to showcase their innovations, compete in national competitions,
                        and engage with industry experts.
                    </p>
                </div>
                {/* second section */}
                <Link rel="stylesheet" href='https://www.teknofestpakistan.com/#' >
                    <div className='flex gap-4 p-4 justify-center md:justify-start items-center h-[100px] md:w-[350px] rounded-2xl shadow-xl my-20 m-auto md:m-0'>
                        <div className='bg-[#388636] rounded-full p-2 w-auto '>
                        <IoLocationSharp className='text-xl text-white ' />
                        </div>

                        <div className='h-[49px]'>
                            <h5 className='font-bold text-[14px] lg:text-base'>
                                Where</h5><p className='text-lg text-[14px] lg:text-base'>Expo Center Karachi, Hall 3 &amp; 4</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='md:w-1/2 h-[500px]'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-end gap-4'>
                        <Image src="/right-side.jpeg" width={230} height={230} className='lg:w-[230px] lg:h-[230px] w-[150px] h-[150px] rounded-lg' alt="" />
                        <Image src="/right-side02.jpeg" width={230} height={230} className='lg:w-[230px] lg:h-[230px] w-[150px] h-[150px] rounded-lg' alt="" />
                    </div>
                    <div className='flex justify-center h-[100px] gap-4'>
                        <Image src="/right-side3.jpeg" width={290} height={290} className='flex items-center rounded-lg w-[290px] h-[243px]' alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}