"use client"
import React from 'react'

export default function Speaker ()  {
    return (
        <>
            <div className="lg:flex mx-5 justify-between items-end">
                <div>
                    <h5 className="text-2xl">
                        Event Speakers
                    </h5>
                    <h3 className="font-bold lg:text-4xl text-3xl">
                        Meet our speakers
                    </h3>
                </div>
                <div>
                    <button className="w-[200px] p-4 rounded-lg bg-slate-200">
                        VIEW MORE SPEAKERS
                    </button>
                </div>
            </div>
            <div className='flex flex-wrap gap-5 w-[90%] m-auto'>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>

            </div>
        </>
    )
}

