import { useRef, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useCartStore from '../ZustandStore/Zustand';
import { BMWcol2026 } from '../DataCars/Data'
const containerDiv = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.15,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 15,
    },
  },
};
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
        <motion.div variants={containerDiv}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-white px-3 md:px-5 md:py-2 lg:px-10 lg:py-20  h-full relative'>
            <div className='w-60 h-60 bg-blue-700/30 shadow-[0_0_20px_4px_rgb(0,170,255)] blur-3xl rounded-full absolute top-1/2 left-0 '></div>
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
                    <motion.div key={item.id} variants={children}
                        className="w-[300px] shrink-0 border border-[#1e3a5f] rounded-lg bg-[#071a33]/50 backdrop-blur-2xl hover:shadow-[1px_2px_12px_1px_rgba(94,234,212,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1 z-50"
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
                           <div className='border-b py-4 border-gray-700'>
                            <div className="flex flex-col items-start gap-0.5">

                                <h1 className="font-bold text-white text-lg">
                                    {item.name}
                                </h1>


                            </div>

                            <p className="text-sm font-light leading-6 text-[#cbd5e1] line-clamp-2">
                                {item.details}
                            </p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='text-gray-500'>Year</p>
                                    <p>{item.year}</p>
                                </div>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className='text-gray-500'>Price</p>
                                    <p className='text-blue-600 font-bold text-lg'>${item.price.toLocaleString()}</p>
                                </div>
                            </div>
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
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
export default Swiper