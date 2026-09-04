import Photo from './Photos/BMW_M_Wallpaper_3.0_CSL_front_low_angle_Desktop.jpg.asset.1736439465443.avif';
import Photo1 from './Photos/images__1_-removebg-preview.png'
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import {useState} from 'react';
function Header() {
   const [isOpen,setIsOpen] = useState(false)
    return(
     <div className='w-full h-full relative text-gray-300'>
     <img src={Photo}alt="Bmw Photo" className='min-w-full max-h-screen aspect-video lg:object-cover'/>
     <header className='w-full h-auto flex flex-row justify-between items-center fixed top-0 left-0 z-50  bg-black/30 backdrop-blur-md px-3 py-1 md:px-5 md:py-2 lg:px-10 lg:py-2.5'>
     <div>
        <img src={Photo1} alt="Photo" className='w-10 h-10 object-cover'/>
     </div>
     <div>
        <ul className='flex justify-center items-center gap-3'>
            <li className='group relative'>
               <span className='text-gray-400 hover:text-white transition-colors duration-300'>Home</span>
               <span className='absolute bottom-0 w-0 h-[2px] left-1/2 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-full'/>
            </li>
            <li className='group relative'>
               <span className='text-gray-400 hover:text-white transition-all duration-300'>Featured</span>
               <span className='absolute bottom-0 w-0 h-[2px] bg-blue-600 left-1/2 -translate-x-1/2 group-hover:w-full transition-all duration-300'/>
            </li>
            <li className='group relative'>
               <span className='text-gray-400 hover:text-white transition-all duration-200'>Cars</span>
               <span className='bg-blue-600 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 bottom-0 absolute group-hover:w-full'/>
            </li>
            <li className='group relative'>
               <span className='text-gray-400 hover:text-white transition-all duration-300'>About</span>
               <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300'/>
            </li>
        </ul>
     </div>
     <div>
        <ul className='flex items-center gap-2'>
            <li className='hover:text-blue-600 cursor-pointer transition-colors duration-300'><FaSearch /></li>
             <li className='transition-colors cursor-pointer hover:text-blue-600 duration-300'><FaShoppingCart/></li>
             <li className='transition-colors cursor-pointer hover:text-blue-600 duration-300'><Link to='/login'><IoPersonSharp /></Link></li>
        </ul>
     </div>
     </header>
     <div className='hidden absolute bottom-0 px-3 py-2 md:px-5 md:py-3 lg:px-10 lg:py-5 md:flex md:flex-col md:items-start md:gap-1.5'>
        <h1 className='font-oswald text-4xl'>EXPERIENCE BOLD.<br/>SHEER DRIVING PLEASURE</h1>
        <p className='font-light'>EXPRERIENCE THE FUTURE TODAY</p>
        <button className='border border-white/20  px-2 py-0.5 rounded-2xl'>EXPLORE NOW</button>
     </div>
     </div>
    )
}
export default Header