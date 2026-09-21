import Photo1 from './Photo/Screenshot 2026-08-26 234548.png'
import Photo2 from './Photo/Screenshot 2026-08-26 234844.png'
import Photo3 from './Photo/Screenshot 2026-08-26 235414.png'
import { motion } from 'motion/react';
import { Gauge } from 'lucide-react';
import { Diamond } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Donut } from 'lucide-react';
function Featured() {
    return (
   <div className="w-full text-white px-3 py-1 md:px-5 md:py-2 lg:px-10  font-sans mt-5 md:py-10 lg:py-25 relative">
    <div className='w-40 h-40 rounded-full blur-3xl bg-blue-700 shadow-[0px_0px_40px_10px_rgb(0,170,255)] absolute right-0 top-0'></div>
        <div className='w-20 h-20 rounded-full blur-3xl bg-blue-700 shadow-[0px_0px_40px_10px_rgb(0,170,255)] absolute left-0 bottom-1/2'></div>
      <motion.div
      initial={{opacity : 0 , scale : 0.8 , x : 50}}
      whileInView={{opacity : 1 , scale : 1 , x : 0}}
      transition={{duration : 0.3}}
      className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
        <div>
          <p className="text-blue-500 font-inter tracking-wider text-xs md:text-sm mb-0.5">
            FEATURED MODELS
          </p>
          <h1 className="text-3xl  font-montserrat tracking-tight leading-tight">
            THE ULTIMATE <br /> DRIVING MACHINE
          </h1>
          <p className="text-gray-400 text-sm">
            Discover the performance, innovation,br and luxury that define every BMW.
          </p>
        </div>
      </motion.div>
    <motion.div
    initial={{opacity : 0 , x : 70 , scale : 0.8}}
    whileInView={{opacity : 1 , x : 0 , scale : 1, transition:{
      staggerChildren: 0.2,
    }}}
    className='grid grid-cols-[2fr_1fr] grid-rows-1 w-full h-full gap-2.5 max-h-96 relative '>
      <div className='overflow-hidden'>
  <motion.img
  whileHover={{opacity : 0.8}}
    src={Photo1}
    alt="Photo1"
    className='h-full border border-gray-800 rounded-lg w-full object-cover hover:scale-105 transition-all duration-300' loading='lazy'
  />
        </div>
<div className="absolute bottom-2 left-2 flex items-center gap-6 text-white">

  <div className="flex flex-col">
    <span className="text-lg font-montserrat font-semibold tracking-wide">
      503 HP
    </span>

    <span className="text-[9px] text-gray-400 tracking-[0.2em] mt-1">
      POWER
    </span>
  </div>

  <div className="h-8 w-px bg-white/20" />

  <div className="flex flex-col">
    <span className="text-lg font-montserrat font-semibold tracking-wide">
      3.4 SEC
    </span>

    <span className="text-[9px] text-gray-400 tracking-[0.2em] mt-1">
      0–100 KM/H
    </span>
  </div>

  {/* Divider */}
  <div className="h-8 w-px bg-white/20" />

  {/* Drive */}
  <div className="flex flex-col">
    <span className="text-lg font-montserrat font-semibold tracking-wide">
      AWD
    </span>

    <span className="text-[9px] text-gray-400 tracking-[0.2em] mt-1">
      DRIVE
    </span>
  </div>

</div>

  <motion.div
  initial={{opacity : 0 , x : 30}}
  whileInView={{opacity : 1 , x : 0 , transition : {
    type : "spring", stiffness : 200 , damping : 10
  }}}
  className='flex flex-col gap-1.5 max-h-96 w-full overflow-hidden'>
    <motion.img
     whileHover={{opacity : 0.8}}
      src={Photo2}
      alt="photo2"
      className='border border-gray-800 rounded-lg h-1/2 w-full object-cover hover:scale-105 transition-all duration-300' loading='lazy'
    />
    <motion.img
    whileHover={{opacity : 0.8}}
      src={Photo3}
      alt="photo3"
      className='border border-gray-800 rounded-lg h-1/2 w-full object-cover overflow-hidden transition-all duration-300 hover:scale-105' loading='lazy'
    />
  </motion.div>
</motion.div>
<motion.div
initial={{opacity : 0 , x : 50 , scale : 0.7}}
whileInView={{opacity : 1 , x : 0 , scale : 1}}
transition={{duration : 0.3}}
className="hidden lg:grid lg:grid-cols-4 w-full border border-gray-800 px-3 py-2 bg-slate-600/20 mt-3 rounded-lg">

  <div className="flex justify-center items-center gap-3 px-3 border-r-[1px] border-gray-800">
    <div className="text-blue-600 shrink-0">
      <Gauge size={24} />
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-sm">PURE PERFORMANCE</p>
      <span className="text-[12px]">
        Engineered for power <br />
        and driving pleasure
      </span>
    </div>
  </div>


  <div className="flex justify-center items-center gap-3 px-3 border-r-[1px] border-gray-800">
    <div className="text-blue-600 shrink-0">
      <Gauge size={24} />
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-sm">PREMIUM DESIGN</p>
      <span className="text-[12px]">
        Crafted with precision <br />
        designed to stand out
      </span>
    </div>
  </div>


  <div className="flex justify-center items-center gap-3 px-3 border-r-[1px] border-gray-800">
    <div className="text-blue-600 shrink-0">
      <Shield size={24} />
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-sm">INNOVATIVE TECHNOLOGY</p>
      <span className="text-[12px]">
        Intelligent features for a <br />
        smarter driving experience
      </span>
    </div>
  </div>


  <div className="flex justify-center items-center gap-3 px-3">
    <div className="text-blue-600 shrink-0">
      <Donut size={24} />
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-sm">ULTIMATE CONTROL</p>
      <span className="text-[12px]">
        Confidence in every turn <br />
        on every road
      </span>
    </div>
  </div>

</motion.div>
</div>

    )
}
export default Featured