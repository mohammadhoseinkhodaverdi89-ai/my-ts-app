import Photo from './Photo/Screenshot 2026-08-25 035450.png'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { motion } from 'motion/react';
import { useState } from 'react';
function Login() {
    const [show,setShow] = useState(false);
    return (
        <div className='flex flex-row justify-between text-white w-full min-h-screen gap-4 items-center md:pr-4'>
            <motion.div
            initial={{opacity : 0 , x : -90 , scale : 1.05}}
            animate={{opacity : 1 , x : 0 , scale : 1}}
            transition={{duration : 0.3}}
            className='w-full h-full hidden md:flex'>
                <img src={Photo} alt="Photo" className='w-full h-[100vh] object-cover' />
            </motion.div>
   <motion.div
   initial={{opacity : 0 , x : 90}}
   animate={{opacity : 1 , x : 0}}
   transition={{duration : 0.3}}
   className='bg-[#0d1117] px-4 py-3 w-full h-[95vh] flex justify-center flex-col border border-gray-800 rounded-lg md:my-3'>
    <div className='flex flex-col gap-1.5'>
        <h1 className='font-montserrat text-3xl'>SIGN IN TO <span className='text-blue-600'>BMW</span></h1>
        <p className='font-inter text-gray-300'>access your account and drive experience</p>
    </div>

    <div className='flex flex-col mt-5 gap-1 relative'>
        <label className='font-medium'>Email Address</label>
        <input type="text" className='border border-gray-800 outline-none focus:ring-1 focus:ring-blue-600 h-[44px] rounded-lg placeholder:text-gray-500 pl-11 transition-all duration-300' placeholder='Enter your email' />
        <p className='absolute left-4 bottom-3 text-lg'><MdOutlineEmail /></p>
    </div>

    <div className='flex flex-col mt-4 relative gap-1'>
        <label className='font-medium'>Password</label>
        <input type={show ? "text" : "password"} className='border border-gray-800 outline-none focus:ring-1 focus:ring-blue-600 h-[44px] rounded-lg placeholder:text-gray-500 pl-11 transition-all duration-300' placeholder='Enter your password' />
        <p className='absolute bottom-3 left-4 text-lg'><CiLock /></p>
    </div>

    <div className='flex flex-row justify-between items-center mt-4'>
        <div className='flex gap-3'>
            <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)} className='scale-155 ' />
            <p className='font-medium'>Show password</p>
        </div>

        <p className='text-blue-600 hover:underline font-medium'>Forgot Password?</p>
    </div>

    <button className='bg-blue-600 py-2.5 rounded-lg mt-5 .5'>SING IN</button>

    <div className="flex items-center my-4">
        <div className="flex-1 border-b border-gray-700"></div>

        <span className="px-4 text-xs font-semibold uppercase text-gray-500">
            OR
        </span>

        <div className="flex-1 border-b border-gray-700"></div>
    </div>

    <div className='flex flex-col gap-2.5'>
        <button className='flex items-center justify-center gap-3 bg-transparent border border-gray-800 h-[44px] rounded-lg text-sm font-medium hover:bg-[#161b22] transition-all duration-300'>
            <FcGoogle className='text-xl' />
            <span>Continue with Google</span>
        </button>

        <button className='flex flex-row justify-center items-center gap-3 border border-gray-800 h-[44px] rounded-lg hover:bg-gray-700/20 transition-all duration-300'>
            <FaApple className='text-xl' />
            <span>Continue with Apple</span>
        </button>
    </div>

    <p className='flex justify-center items-center gap-1.5 mt-2 text-xs text-gray-400'>
    Don't have an account?
    <span className='font-montserrat text-blue-600 cursor-pointer hover:underline'>Create account</span>
</p>
</motion.div>
        </div>
    )
}
export default Login