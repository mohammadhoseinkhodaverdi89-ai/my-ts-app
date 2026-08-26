import Photo from './Photos/Gemini_Generated_Image_tvni6ltvni6ltvni.jpg';
import Photo1 from './Photos/images__1_-removebg-preview.png'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
function Header() {
    return(
     <div className='w-full h-full relative text-gray-300'>
     <img src={Photo}alt="Bmw Photo" className='min-w-full max-h-[95vh] aspect-video lg:object-cover'/>
     <header className='w-full h-auto flex flex-row justify-between items-center absolute top-0 bg-slate-700/20 backdrop-blur-sm px-3 py-1 md:px-5 md:py-2 lg:px-10 lg:py-2.5 border-b border-b-gray-500'>
     <div>
        <img src={Photo1} alt="Photo" className='w-10 h-10 object-cover'/>
     </div>
     <div>
        <ul className='flex justify-center items-center gap-1'>
            <li className='hover:text-blue-600 cursor-pointer hover:bg-slate-500/20 p-1 hover:rounded-2xl transition-all duration-300'>Home</li>
            <li className='hover:text-blue-600 cursor-pointer hover:bg-slate-500/20 p-1 hover:rounded-2xl transition-all duration-300'>Featured</li>
            <li className='hover:text-blue-600 cursor-pointer hover:bg-slate-500/20 p-1 hover:rounded-2xl transition-all duration-300'>Cars</li>
            <li className='hover:text-blue-600 cursor-pointer hover:bg-slate-500/20 p-1 hover:rounded-2xl transition-all duration-300'>About</li>
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
        <button className='border  px-1.5 py-0.5 rounded-2xl'>EXPLORE NOW</button>
     </div>
     </div>
    )
}
export default Header