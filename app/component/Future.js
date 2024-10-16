import React from 'react'
import TypewriterAnimation from "./TypeAnimation"
const Irtizatask = () => {
    // const text = "Empowering the future, One Innovator, One Creator, One Trailblazer at a Time".split(" ");
    const phrases = [" Empowering the future ,One Innovator", ", One Creator, One Trailblazer at a Time"];
    const speed = 50;
    return (
        <div className='flex my-10 justify-center  w-full h-100vh future' >

            <div className='flex flex-col justify-items-center text-gray-700 text-center items-center lg:m-24  mx-10  my-10 '  >
                <p className='text-[18px] font-bold'>
                    lets do it hurry
                </p>

                <div className=" md:mx-auto md:mt-8 ">
                    <TypewriterAnimation phrases={phrases} speed={speed} />
                </div>



                <p className='text-[16px] mt-5 lg:w-[600px]'>
                    Join us as a Teknofest volunteer and become the driving force behind cutting-edge innovation. Make an impact by supporting young minds and helping shape the world of tomorrow.
                </p>
                <button className='mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                    Become a volunteer
                </button>
            </div>

        </div>
    )
}

export default Irtizatask