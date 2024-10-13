import Image from "next/image"
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Header() {
    return (
        <>
            <div className="banner   py-10 grid lg:grid-cols-2 grid-cols-1 justify-center left-0 right-0 lg:px-10  lg:mx-0 px-5 items-center gap-20">
                <div className="w-full">
                    <Image src="/website.gif" alt='baner logo' width={600} height={600} className="w-[150%]" />
                </div>
                <div className="space-y-6">
                    <h1 className="text-2xl text-white font-bold">upcoming new event 2024
                    </h1>
                    <h1 className="lg:text-6xl text-4xl  text-white font-bold ">TEKNOFEST<br /> PAKISTAN
                    </h1>
                    <div className="flex text-white items-center gap-3 ">
                        <FaCalendarAlt className="text-lg text-white "/>
                        <h1 >12th & 13th October 2024
                        </h1>
                    </div>
                    <div className="flex text-white items-center gap-3 ">
                        <IoLocationOutline className="text-lg text-white " />
                        <h1>Expo Center Karachi, Hall 3 & 4
                        </h1>
                    </div>
                    <p className="text-sm text-white ">Empowering innovation, igniting future leaders. Teknofest Pakistan  where technology meets limitless possibilities
                        <div className="grid grid-cols-2 lg:text-sm  text-[10px]  justify-center mt-5 gap-5">
                            <button className="text-white bg-blue-900 shadow-xl rounded-md lg:p-4 p-2 lg:w-44 w-32">BOOKKARU</button>
                            <button className="text-white bg-blue-900 shadow-xl rounded-md lg:p-4 p-2 lg:w-52  w-32">GRab your Pass</button>
                            <button className="text-white bg-blue-900 shadow-xl rounded-md lg:p-4 p-2 lg:w-44 w-32">SEE COMPETETIONS</button>
                            <button className="text-white bg-blue-900 shadow-xl rounded-md lg:p-4 p-2 lg:w-52  w-32">PROJECT REGSITRATION</button>
                        </div>
                        </p>
                </div>
            </div>

<div className="my-10 lg:block hidden">
<iframe className=" mx-auto "width="1060" height="715" src="https://www.youtube.com/embed/K9hGAMbpyfk?si=mamWcu_1nom6yX03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>            
        </>
    )
}