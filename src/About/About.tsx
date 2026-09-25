import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Video from './Video/29af803860d94778b87309c8b5bbadc365189314-1080p.mp4'
const Countainer = {
  hidden:{opacity : 0 , scale : 0.8 ,},
  visible:{opacity : 1 , scale : 1 , transition : {
   staggerChildren : 0.60 ,type : "spring" , damping : 10 , stiffness :100
  }}
}
const Children = {
  hidden : {opacity : 0 , y : 50 , scale : 0.8},
  visible: {opacity : 1 , y : 0 , scale : 1}
}

function About() {
  return (
    <motion.div 
    variants={Countainer}
    initial="hidden"
    whileInView="visible"
    >
    <div className="w-full h-full bg-black px-3 md:px-5 md:py-2 lg:px-10 lg:py-20  flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2 border-b border-gray-800">
      <motion.section
      initial={{opacity : 0 , scale:0.8 , x : 400}}
      whileInView={{opacity : 1 , scale :1 , x : 0}}
      transition={{duration : 0.3}}
      className="flex flex-col gap-2 w-full h-full">
        <p className="text-blue-400 font-semibold tracking-[0.4em] mb-1.5 text-[16px] lg:text-xl">THE ULTIMATE DRIVENG MACHINE</p>
        <h1 className="font-black text-5xl tracking-tight uppercase lg:text-8xl">
          ABOUT
          <span className="block text-blue-500 mb-2">BMW</span></h1>
        <p className="text-sm lg:text-lg text-gray-300 mb-2">Engineering, design and driving emotion __ combined into one<br /> of the worlds most iconic automotive brands</p>
        <button className="bg-blue-500 w-35 h-10 rounded-lg">Explore Models</button>
      </motion.section>
      <motion.section
      initial={{opacity : 0 , scale:0.8 , x : -400}}
      whileInView={{opacity : 1 , scale :1 , x : 0}}
      transition={{duration : 0.3}}
      >
        <video src={Video} className="rounded-lg"
          controls
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </motion.section>
    </div>
    <div className="flex flex-row justify-center items-center py-10 gap-20">
      <motion.div variants={Children} className="flex flex-col items-center gap-1">
        <span className="font-black text-blue-600 text-3xl">100+</span>
        <p className="text-sm text-gray-500">Years of Innovation</p>
      </motion.div>
            <motion.div variants={Children} className="flex flex-col items-center gap-1">
        <span className="font-black text-blue-600 text-3xl">30+</span>
        <p className="text-sm text-gray-500">Global Models</p>
      </motion.div>
            <motion.div variants={Children} className="flex flex-col items-center gap-1">
        <span className="font-black text-blue-600 text-3xl">140+</span>
        <p className="text-sm text-gray-500">Countries</p>
      </motion.div>
            <motion.div variants={Children} className="flex flex-col items-center gap-1">
        <span className="font-black text-blue-600 text-3xl">00+</span>
        <p className="text-sm text-gray-500">Driving Passion</p>
      </motion.div>
    </div>
    </motion.div>
  )
}
export default About
