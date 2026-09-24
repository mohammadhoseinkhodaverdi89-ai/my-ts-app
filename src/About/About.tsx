import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBolt,
  FaGaugeHigh,
  FaLightbulb,
} from "react-icons/fa6";
import Video from './Video/29af803860d94778b87309c8b5bbadc365189314-1080p.mp4'

const stats = [
  { number: "100+", title: "Years of Innovation" },
  { number: "30+", title: "Global Models" },
  { number: "140+", title: "Countries" },
  { number: "∞", title: "Driving Passion" },
];

const values = [
  {
    icon: <FaGaugeHigh />,
    title: "Performance",
    text: "Engineered for precision and an unforgettable drive.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    text: "Intelligent engineering shaping the future of mobility.",
  },
  {
    icon: <FaBolt />,
    title: "Electric Future",
    text: "A new generation built around performance and sustainability.",
  },
];

function About() {
  return (
    <div className="w-full h-full bg-black px-3 md:px-5 md:py-2 lg:px-10 lg:py-20  flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
      <section className="flex flex-col gap-2 w-full h-full">
        <p className="text-blue-400 font-semibold tracking-[0.4em] mb-1.5 text-[16px] lg:text-xl">THE ULTIMATE DRIVENG MACHINE</p>
        <h1 className="font-black text-5xl tracking-tight uppercase lg:text-8xl">
          ABOUT
          <span className="block text-blue-500 mb-2">BMW</span></h1>
        <p className="text-sm lg:text-lg text-gray-300 mb-2">Engineering, design and driving emotion __ combined into one<br /> of the worlds most iconic automotive brands</p>
        <button className="bg-blue-500 w-35 h-10 rounded-lg">Explore Models</button>
      </section>
      <section>
        <video src={Video} className="rounded-lg"
          controls
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </section>
    </div>
  )
}
export default About
