import React from 'react'
import Link from 'next/link'

export const Discover = () => {
    return (
        <div className='flex flex-col md:flex-row px-6'>
            <div className="flex flex-wrap gap-5 w-[55%]">
                <div className="flex flex-col flex-wrap gap-3">
                    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-[270px]">
                        <div className="m-2.5 overflow-hidden rounded-md h-20 flex justify-center items-center">
                            <img className="w-[40px] h-[40px] object-cover" src="https://cdn-icons-png.flaticon.com/128/2756/2756983.png" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-1 text-xl font-semibold text-slate-800">
                                Natalie Paisley
                            </h4>
                            <p
                                className="text-sm font-semibold text-slate-500 uppercase">
                                Product Manager
                            </p>

                        </div>
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <Link rel="stylesheet" href="">Follow </Link>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-[270px]">
                        <div className="m-2.5 overflow-hidden rounded-md h-20 flex justify-center items-center">
                            <img className="w-[40px] h-[40px] object-cover" src="https://cdn-icons-png.flaticon.com/128/2756/2756983.png" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-1 text-xl font-semibold text-slate-800">
                                Natalie Paisley
                            </h4>
                            <p
                                className="text-sm font-semibold text-slate-500 uppercase">
                                Product Manager
                            </p>

                        </div>
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <Link rel="stylesheet" href="">Follow </Link>
                        </div>
                    </div>

                </div>

                <div className=" md:h-[600px] flex justify-center items-center  border-b-2">
                    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 h-[280px] w-[270px]">
                        <div className="m-2.5 overflow-hidden rounded-md h-20 flex justify-center items-center">
                            <img className="w-[40px] h-[40px] object-cover" src="https://cdn-icons-png.flaticon.com/128/2756/2756983.png" alt="profile-picture" />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-1 text-xl font-semibold text-slate-800">
                                Natalie Paisley
                            </h4>
                            <p
                                className="text-sm font-semibold text-slate-500 uppercase">
                                Product Manager
                            </p>

                        </div>
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <Link rel="stylesheet" href="">Follow </Link>
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex flex-col w-[90%] md:w-[45%] m-auto'>
                    <h1 className='text-[22px] md:text-3xl lg:text-[28px] text-center md:text-start'>Overview</h1>
                    <h1 className='text-[26px] md:text-3xl lg:text-[28px] text-center md:text-start font-bold'>Get the latest info about <span className='text-[#388636] font-bold'>TEKNOFEST</span> </h1>
                    <p className='text-[18px] md:text-base lg:text-lg text-wrap text-center md:text-start text-gray-500 py-3'>
                        Teknofest Pakistan is a cutting-edge technology and innovation festival, dedicated to fostering creativity,
                        entrepreneurship, and scientific development. Drawing inspiration from the globally renowned Teknofest, this
                        event brings together the brightest minds, forward-thinking startups, and tech enthusiasts from across the nation.
                        Focused on promoting advancements in fields such as robotics, artificial intelligence, aerospace, and green technologies,
                        Teknofest Pakistan offers participants an opportunity to showcase their innovations, compete in national competitions,
                        and engage with industry experts.
                    </p>
                </div>
            
        </div>
    )
}
