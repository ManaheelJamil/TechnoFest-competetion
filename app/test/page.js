"use client"
import React from "react";
import Counter from "./counter";
import { FiCheckSquare } from "react-icons/fi";
// import "";

const competions = ["Cyber Security","Development and Programming","Data Science and Artificial Intelligence","Robotics & Electronics","Engineering Competitions"
  ,"Business & Finance"
]

const counts = [{
  title: "Speakers",
  number : 2432
},
{
  title: "Attendence",
  number : 432
},
{
  title: "Workshops",
  number : 4324
},
{
  title: "Competitions",
  number : 32432432
},
{
  title: "Recruiters",
  number : 46543
},

]

export default function page() {
  return (
    <div className="flex flex-col py-[50px]  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-full">
      {/* ANIMTATED NUMBER COUNTERS */}

      <div className="md:flex  justify-evenly md:pt-[50px] font-[Poppins]">
        {/* <div className=" md:h-[100px] md:min-h-[1em] md:w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div> */}
        {counts.map((items,index) => {
          return (
            <>
              <Counter number={items.number} title={items.title} />
              {index!==counts.length-1&&
              <div className=" md:h-[100px] md:min-h-[1em] md:w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
              }
            </>
          );
        })}
      </div>

      {/* COMPETITORS HEADING */}

      <h1 className="text-center mt-[50px] text-5xl font-bold ">
        Competitions
      </h1>
      <p className="text-lg text-center px-[20px] mt-[40px] ">
        Whether you're passionate about robotics, aerospace, artificial
        intelligence, or sustainability, Teknofest Pakistan offers a range of
        competitions that will test your creativity, technical skills, and
        teamwork. It's a chance to collaborate with like-minded innovators, gain
        exposure to industry leaders, and make a mark on the future of
        technology.Join us as we embark on a journey of innovation, where your
        ideas can change the world!
      </p>

      {/* LIST ITEMS */}

      <div class=" flex flex-col mt-[50px]   self-center rounded-lg lg:w-1/3 items-center shadow-2xl">
        <nav class="flex min-w-[240px] flex-col gap-1 py-1.5">
          {competions.map((items) => {
            return (
              <div
                role="button"
                class="font-semibold text-slate-800 flex w-full items-center p-3 transition-all gap-3 hover:text-sky-800  focus:bg-emerald-600 "
              >
                <FiCheckSquare className="md:bg-sky-500" />
                {items}
              </div>
            );
          })}
        </nav>
      </div>

      <p className="text-lg text-center px-[20px] mt-[40px] ">
        Participating in these competitions is your gateway to pushing the
        boundaries of innovation, creativity, and skill. Whether you are a
        student, a professional, or an enthusiast, Teknofest Pakistan offers an
        unparalleled opportunity to showcase your talents on a national
        platform, meet like-minded individuals, and make lasting contributions
        to Pakistan's tech landscape. So, whether you're building
        next-generation drones, working on cutting-edge AI solutions, or
        developing sustainable technologies, Teknofest Pakistan is the place to
        be. The stage is set, and all that's left is for you to bring your best.
      </p>

      <button class="relative self-center  mt-[50px] h-12 w-52 overflow-hidden border border-emerald-800  rounded-lg text-sky-100 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-52 hover:before:opacity-80">
      <span class="relative z-10">See All Competitions</span>
    </button>
    </div>



  );
}
