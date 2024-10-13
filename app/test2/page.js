import Link from 'next/link';
import React from 'react'
import { RoboticsCompetition } from '../compoenent/RoboticsCompetition';

const page = () => {
    const competions = ["Cyber Security","Development and Programming","Data Science and Artificial Intelligence","Robotics & Electronics","Engineering Competitions"
        ,"Business & Finance"
      ]
      
  return (
    <div className='flex flex-col'>


         <h1 className="text-center m-[50px] text-5xl font-bold ">
         ALL CATEGORIES
      </h1>
      <div className='flex flex-col md:flex-row items-center'>

                <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Cyber Security
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>

              <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGV2ZWxvcG1lbnQlMjBhbmQlMjBQcm9ncmFtbWluZ3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Development and Programming
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>

              <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGF0YSUyMFNjaWVuY2UlMjBhbmQlMjBBcnRpZmljaWFsJTIwSW50ZWxsaWdlbmNlfGVufDB8fDB8fHww')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Data Science and Artificial Intelligence
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>

              <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJvYm90aWNzJTIwJTI2JTIwRWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Robotics & Electronics
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>

              <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RW5naW5lZXJpbmclMjBDb21wZXRpdGlvbnN8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Engineering Competitions
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>
          
              <div class="relative grid h-[25rem] w-[50%] flex-col items-end justify-center overflow-hidden  bg-white">
                <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJ1c2luZXNzJTIwJTI2JTIwRmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center">
                  <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div class="relative text-center p-6 px-6 py-14 md:px-12">
                  <h2 class="mb-6 text-xl font-medium text-white">
                  Business & Finance
                  </h2>
                  <Link href={""} class="mb-4 text-xl font-semibold text-slate-300">
                    Learn More
                  </Link>
                  
                </div>
              </div>
      </div>


      <RoboticsCompetition/>



    </div>
  )
}

export default page