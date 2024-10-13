import React from 'react'
import { motion } from "framer-motion"
const Irtizatask = () => {
    const text = "Empowering the future, One Innovator, One Creator, One Trailblazer at a Time".split(" ");
  return (
    <div className='flex justify-center  w-full h-100vh banner' >
     
        <div className='flex flex-col justify-items-center text-gray-700 text-center items-center m-24'  >
        <p className='text-[18px] font-bold'>
            lets do it hurry
        </p>
        {/* <p className='text-[36px] font-bold'>
            Empowering the future,
            <p className='text-[36px] font-bold'>
            One Innovator, One Creator, One Trailblazer
            </p>
            at a Time
        </p> */}
        <p>
            
        </p>

            <p className='text-[16px] mt-5 w-[600px]'>
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