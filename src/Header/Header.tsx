import Photo from './Photos/BMW_M_Wallpaper_3.0_CSL_front_low_angle_Desktop.jpg.asset.1736439465443.avif';
import Photo1 from './Photos/images__1_-removebg-preview.png'
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter } from "react-icons/fa6";
import Filtered from '../Filter/Filtered';
import Cart from '../Cart/Cart';
import useCartStore from '../ZustandStore/Zustand';
interface HeaderProps {
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;


   minYear: string;
   setMinYear: React.Dispatch<React.SetStateAction<string>>;

   maxYear: string;
   setMaxYear: React.Dispatch<React.SetStateAction<string>>;

   sort: string;
   setSort: React.Dispatch<React.SetStateAction<string>>;

   openBar: boolean;

   setOpenBar: React.Dispatch<React.SetStateAction<boolean>>;

   counter: number
   onFilter: () => void;

}


function Header({
   search,
   setSearch,
   minYear,
   setMinYear,
   maxYear,
   setMaxYear,
   sort,
   setSort,
   onFilter,
   openBar,
   setOpenBar,
   counter

}: HeaderProps) {
   const Cart = useCartStore((state) => state.cartItem)
   const resetFilter = () => {
      setSearch("");
      setMinYear("");
      setMaxYear("");
      setSort("");
   };
   return (
      <div className='w-full h-full relative text-gray-300'>
         <img src={Photo} alt="Bmw Photo" className='min-w-full max-h-screen aspect-video lg:object-cover' loading='lazy' />
         <header className='w-full h-auto flex flex-row justify-between items-center fixed top-0 left-0 z-50  bg-black/30 backdrop-blur-[3px] px-3 py-1 md:px-5 md:py-2 lg:px-10 lg:py-2.5'>
            <div>
               <img src={Photo1} alt="Photo" className='w-10 h-10 object-cover' />
            </div>
            <div>
               <ul className='flex justify-center items-center gap-3'>
                  <li className='group relative'>
                     <span className='text-gray-400 hover:text-white transition-colors duration-300'>Home</span>
                     <span className='absolute bottom-0 w-0 h-[2px] left-1/2 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-full' />
                  </li>
                  <li className='group relative'>
                     <span className='text-gray-400 hover:text-white transition-all duration-300'>Featured</span>
                     <span className='absolute bottom-0 w-0 h-[2px] bg-blue-600 left-1/2 -translate-x-1/2 group-hover:w-full transition-all duration-300' />
                  </li>
                  <li className='group relative'>
                     <span className='text-gray-400 hover:text-white transition-all duration-200'>Cars</span>
                     <span className='bg-blue-600 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 bottom-0 absolute group-hover:w-full' />
                  </li>
                  <li className='group relative'>
                     <span className='text-gray-400 hover:text-white transition-all duration-300'>About</span>
                     <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300' />
                  </li>
               </ul>
            </div>
            <div>
               <ul className='flex items-center gap-2'>
                  <div className='flex flex-col justify-center items-center'>
                     <li className='transition-colors cursor-pointer hover:text-blue-600 duration-300 relative'><Link to='/cart'><FaShoppingCart /></Link>
                        {Cart.length > 0 && (
                           <span className="bg-rose-700 text-white text-[14px] rounded-full w-4 h-4 absolute -top-2.5 -left-1 flex items-center justify-center">
                              {Cart.length}
                           </span>
                        )}
                     </li>
                  </div>
                  <li className='transition-colors cursor-pointer hover:text-blue-600 duration-300'><Link to='/login'><IoPersonSharp /></Link></li>
                  <li className='transition-colors cursor-pointer hover:text-blue-600 duration-300'><Link to="/filtered"><FaFilter /></Link></li>
                  <li className='cursor-pointer transition-colors duration-300' onClick={() => setOpenBar((prev) => !prev)}>
                     {openBar ? <FaBarsStaggered /> : <FaBars />}
                     <AnimatePresence>
                        {openBar && (
                           <motion.div
                              onClick={(e) => e.stopPropagation()}
                              initial={{ opacity: 0, y: -140, scale: 0.6 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -140, x: 300, scale: 0.6 }}
                              transition={{ duration: 0.3 }}
                              onKeyDown={(e) => { if (e.key === "Enter") { onFilter() } }}
                              className='flex flex-col absolute top-20 right-1/2 translate-x-1/2 border border-blue-300 shadow-[1px_2px_12px_1px_rgb(0,0,255)] px-5 py-4 rounded-2xl bg-slate-950/80 gap-5 justify-center max-w-sm '>
                              <div className='flex flex-col gap-2 relative'>
                                 <div className='flex justify-between items-center'>
                                    <label>Search BMW...</label>
                                    <button className='text-lg font-bold text-rose-600 active:scale-95 hover:scale-105 transition-all duration-300' onClick={() => setOpenBar((prev) => !prev)}>X</button>
                                 </div>

                                 <span className='absolute bottom-2 left-2'><IoIosSearch size={18} /></span>
                                 <input type="text" className='border-2 border-gray-600 py-1 px-8 rounded-md outline-none hover:ring-blue-600 hover:outline-none ring-1 focus:ring-2 focus:ring-blue-700 ring-transparent transition-all duration-300' placeholder='Search BMW..' value={search} onChange={(e) => setSearch(e.target.value)} />
                              </div>
                              <div className='flex flex-col gap-2 w-full'>
                                 <span>Year</span>
                                 <div className='flex flex-row items-center gap-2 justify-between'>
                                    <input
                                       type="number"
                                       placeholder="From"
                                       className="w-full rounded-md border-2 border-gray-600 px-2 py-1 outline-none ring-1 ring-transparent transition-all duration-300 hover:ring-blue-600 focus:ring-2 focus:ring-blue-700" value={minYear} onChange={(e) => setMinYear(e.target.value)}
                                    />

                                    <input
                                       type="number"
                                       placeholder="To"
                                       className="w-full rounded-md border-2 border-gray-600 px-2 py-1 outline-none ring-1 ring-transparent transition-all duration-300 hover:ring-blue-600 focus:ring-2 focus:ring-blue-700" value={maxYear} onChange={(e) => setMaxYear(e.target.value)}
                                    />
                                 </div>
                              </div>
                              <div>
                                 <label className="mb-2 block text-sm text-zinc-400"> Sort By </label>
                                 <select className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:border-blue-500" value={sort} onChange={(e) => setSort(e.target.value)}> <option value="">Newest</option> <option value="low-high">Price: Low to High</option> <option value="high-low">Price: High to Low</option> </select>
                              </div>
                              <div className='flex justify-between w-full gap-2'>
                                 <Link to="/filtered" className='w-full'>
                                    <button className='w-[100%] py-1 bg-blue-600 font-semibold rounded-sm hover:bg-blue-600/90 transition-all duration-300' onClick={(e) => {
                                       onFilter();
                                       setOpenBar((prev) => !prev)
                                    }}>Submit</button>
                                 </Link>
                                 <button className='w-[40%] py-1 bg-gray-600 font-semibold rounded-sm hover:bg-gray-600/90 transition-all duration-300 text-sm' onClick={resetFilter}>Reset Filter</button>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </li>

               </ul>
            </div>
         </header>
         <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 70 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='hidden absolute bottom-0 px-3 py-2 md:px-5 md:py-3 lg:px-10 lg:py-5 md:flex md:flex-col md:items-start md:gap-1.5'>
            <h1 className='font-oswald text-4xl'>EXPERIENCE BOLD.<br />SHEER DRIVING PLEASURE</h1>
            <p className='font-light'>EXPRERIENCE THE FUTURE TODAY</p>
            <button className='border border-white/20  px-2 py-0.5 rounded-2xl'>EXPLORE NOW</button>
         </motion.div>
      </div>
   )
}
export default Header