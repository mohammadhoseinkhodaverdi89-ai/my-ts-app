import { useRef, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Photo1 from './Photo/chris-saran-iXHHhfwJD1E-unsplash.jpg'
import Photo2 from './Photo/devon-janse-van-rensburg-2h3UGhof_fU-unsplash.jpg'
import Photo3 from './Photo/jakob-rosen-dC748GtzSgg-unsplash.jpg'
import Photo4 from './Photo/josh-berquist-_4sWbzH5fp8-unsplash.jpg'
import Photo5 from './Photo/serjan-midili-yedYysaveC8-unsplash.jpg'
import Photo6 from './Photo/zox-shilpi-g2MKxO7Pywc-unsplash.jpg'
import Photo7 from './Photo/devon-janse-van-rensburg-2h3UGhof_fU-unsplash.jpg'
import Photo8 from './Photo/martin-katler-e3gVocvZ-g0-unsplash.jpg'
import Photo9 from './Photo/alain-gehri-w77TcvuhtWE-unsplash.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCartStore from '../ZustandStore/Zustand';
interface Bmw {
    id: number;
    name: string;
    details: string;
    photo: string;
    year: number;
    price: number
}
const BMWcol2026: Bmw[] = [
    {
        id: 1,
        name: "BMW M5 Competition",
        details: "High-performance luxury sedan with powerful M engineering.",
        photo: Photo1,
        year: 2026,
        price: 200000000
    },
    {
        id: 2,
        name: "BMW M4 Competition",
        details: "A sporty coupe combining aggressive design with dynamic performance.",
        photo: Photo2,
        year: 2026,
        price: 223500000
    },
    {
        id: 3,
        name: "BMW i4 M50",
        details: "Fully electric performance sedan with instant acceleration and M power.",
        photo: Photo3,
        year: 2026,
        price: 7860000000
    },
    {
        id: 4,
        name: "BMW XM Label",
        details: "High-performance luxury SUV with bold styling and electrified power.",
        photo: Photo4,
        year: 2026,
        price: 2320000000
    },
    {
        id: 5,
        name: "BMW i7 xDrive60",
        details: "Premium electric sedan focused on comfort, technology, and luxury.",
        photo: Photo5,
        year: 2026,
        price: 2232300000
    },
    {
        id: 6,
        name: "BMW X5 M Competition",
        details: "Powerful performance SUV built for luxury, speed, and everyday driving.",
        photo: Photo6,
        year: 2026,
        price: 12400000
    },
    {
        id: 7,
        name: "BMW iX3",
        details: "Next-generation electric SUV with modern design and advanced technology.",
        photo: Photo7,
        year: 2026,
        price: 125600000
    },
    {
        id: 8,
        name: "BMW Z4 Roadster",
        details: "Open-top sports car designed for an exciting and engaging drive.",
        photo: Photo8,
        year: 2026,
        price: 267800000
    },
    {
        id: 9,
        name: "BMW M2",
        details: "Compact M car delivering agile handling and pure driving excitement.",
        photo: Photo9,
        year: 2026,
        price: 24000000
    }
];

function Swiper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const Handler = () => {
        containerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })
    }
    const Handler2 = () => {
        containerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
    }
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <div className='text-white px-3 py-1 md:px-5 md:py-2 lg:px-10 lg:py-20 bg-[#030712] mt-5 lg:mt-30 min-h-screen'>
            <div className='flex justify-between items-center gap-2'>
                <div
                    className='flex flex-col justify-center'>
                    <p className='font-inter text-sm text-[#4da3ff]'>2026 COLLECTION</p>
                    <h1 className='font-bold text-3xl text-white'>NEW 2026 CARS</h1>
                </div>

                <div className='flex flex-row justify-center items-center gap-2'>
                    <button
                        onClick={Handler2}
                        className='bg-[#0066b3]/20 p-2.5 rounded-full text-[#6db8ff] hover:bg-[#0066b3]/30 hover:shadow-[0_0_25px_rgba(0,102,179,0.35)] hover:backdrop-blur-md'
                    >
                        <FaAngleLeft />
                    </button>

                    <button
                        onClick={Handler}
                        className='bg-[#0066b3]/20 p-2.5 rounded-full text-[#6db8ff] hover:bg-[#0066b3]/30 hover:shadow-[0_0_25px_rgba(0,102,179,0.35)]'
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className='flex overflow-x-auto flex-row items-center gap-8 mt-2.5 scrollbar-none'
            >
                {BMWcol2026.map((item) => (
                    <div                        key={item.id}
                        className="w-[300px] shrink-0 border border-[#1e3a5f] rounded-lg bg-[#071a33]/80 hover:shadow-[1px_2px_12px_1px_rgba(94,234,212,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.photo}
                                alt={item.name}
                                loading="lazy"
                                className="w-full h-[180px] object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="flex flex-col px-5 py-4 gap-2">

                            <div className="flex flex-col items-start gap-0.5">

                                <p className="font-medium text-sm text-gray-500">
                                    {item.year}
                                </p>

                                <h1 className="font-bold text-base text-[#5eb0ff]">
                                    {item.name}
                                </h1>

                                <p className="text-sm font-semibold text-gray-400">
                                    <span className="text-blue-500 mr-1">$</span>
                                    {item.price}
                                </p>

                            </div>

                            <p className="text-sm font-light leading-6 text-[#cbd5e1] line-clamp-2">
                                {item.details}
                            </p>

                            <div className='flex items-center justify-between gap-4'>

                                <Link
                                    to={`/detail/${item.id}`}
                                    className="w-full mt-2 px-5 py-2 rounded-md border border-blue-400/60 bg-blue-500/10 text-sm font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-300 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] active:scale-95 flex justify-center"
                                >
                                    See Detail
                                </Link>

                                <button onClick={() => addToCart(item)} className="w-1/2 mt-2 px-5 py-2 rounded-md border border-blue-400/60 bg-blue-500/10 text-sm font-semibold text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-300 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] active:scale-95 flex justify-center">Add</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Swiper