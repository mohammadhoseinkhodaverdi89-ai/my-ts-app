import { useParams } from "react-router-dom";
import { useState } from "react";
import Photo1 from './Photo/Gemini_Generated_Image_e2q6yhe2q6yhe2q6.jpg';
import Photo2 from './Photo/images (1).jpeg'
import Photo3 from './Photo//images (3).jpg'
import Photo4 from './Photo/m5-1.jpg'
import Photo5 from './Photo/images__1_-removebg-preview.png'
import { IoFlashOutline } from "react-icons/io5";
import { IoMdSpeedometer } from "react-icons/io";
import { PiEngineLight } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5"
import { PiEngineBold } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import { motion } from "motion/react";
import { ShieldCheck } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Wallet } from 'lucide-react';
interface Todo {
  img?: string;
  col: string;
  name: string;
  model: string;
  detail: string;
  info?: string;
  id: number;
}

const Photos: string[] = [Photo1, Photo2, Photo3, Photo4]

type RouteParams = {
  id: string;
}

const BmwDetail: Todo[] = [
  { col: "2026 collection", name: "BMW M5", model: "competion", detail: "the ultimate blend op performance and luxury ", info: "awawa", id: 1 }
]

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
function Detail() {
  const { id } = useParams<RouteParams>();
  const [image, setImage] = useState<string>(Photos[0]);
  const detail = BmwDetail.find((item) => item.id === Number(id));

  if (!detail) {
    return <div className="p-6 text-white">محصولی پیدا نشد!</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="text-white min-h-screen w-full  overflow-hidden">
      <div className="relative h-[60vh] w-full">
        <div className="w-full h-full absolute inset-0">
          <img src={image} alt="photo" className="w-full h-full object-center object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex md:flex-col h-1/2 top-10 right-4 absolute">
          <div className="flex flex-row items-center">
            <span className="w-[2px] h-4 bg-blue-300 "></span>
            <p className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-sm font-medium text-center">{detail.col}</p>
          </div>
          <h1 className="font-inter text-5xl">{detail.name}</h1>
          <h1 className="font-montserrat text-4xl">{detail.model}</h1>
          <p className="font-medium text-[15px] max-w-70 mt-2.5">{detail.detail}</p>

          <div className="flex flex-row justify-center items-center gap-5 mr-2.5 mt-5">
            <div className="flex flex-row justify-center items-center gap-2">
              <p className="text-lg"><IoFlashOutline /></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[12px]">625</p>
                <p className="text-[12px] text-gray-400">HP</p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center  gap-2">
              <p className="text-lg"><IoMdSpeedometer /></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[12px]">3.3s</p>
                <p className="text-[12px] text-gray-400">0-100 km/h </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center  gap-2">

              <p className="text-lg"><PiEngineLight /></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[12px]">4.4L V8</p>
                <p className="text-[12px] text-gray-400">Twin Turbo </p>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center  gap-2">
              <p className="text-lg"><TbManualGearbox /></p>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[12px]">8 speed</p>
                <p className="text-[12px] text-gray-400">M Steptronic</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5 px-8 mt-4">
        {Photos.map((item, index) => (
          <motion.div
          variants={itemVariants}
          key={index} className="w-full h-30 object-cover cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden">
            <img src={item} alt="index" className="w-full h-full rounded-lg object-cover" onClick={() => setImage(item)} />
          </motion.div>
        ))}
      </div>
      <motion.div
      initial={{scale : 0.8}}
      whileInView={{scale : 1}}
      transition={{duration : 0.3}}
      className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="px-5 py-2 mt-7 mx-5 bg-slate-600/20 border border-gray-800 rounded-2xl">

          <div className="flex items-center gap-2 bg-gray-900/80 rounded-lg px-3 py-2 w-fit">
            <span className="w-0.5 h-5.5 bg-blue-600 rounded-full"></span>

            <h1 className="font-montserrat text-white font-semibold tracking-wide">
              OVERVIEW
            </h1>
          </div>

          <p className="text-gray-500 text-sm font-medium max-w-sm leading-6 mt-4">
            The BMW M5 Competition redefines what a high-performance sedan can be.
            With a powerful M TwinPower Turbo V8 engine and M xDrive all-wheel drive,
            it delivers breathtaking performance with everyday usability.
          </p>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/80 text-blue-500">
                <IoSpeedometerOutline size={23} />
              </div>

              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">M xDrive</p>
                <p className="text-gray-500 text-xs mt-1 max-w-sm">
                  Intelligent all-wheel drive for maximum traction
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/80 text-blue-500">
                <TbManualGearbox size={23} />
              </div>

              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">
                  M Steptronic Transmission
                </p>

                <p className="text-gray-500 text-xs mt-1 max-w-sm">
                  8-speed automatic transmission with Drivelogic
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/80 text-blue-500">
                <PiEngineBold size={23} />
              </div>

              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">
                  M TwinPower Turbo V8
                </p>

                <p className="text-gray-500 text-xs mt-1 max-w-sm">
                  High-performance engine with exhilarating power
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/80 text-blue-500">
                <AiOutlineSound size={23} />
              </div>

              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">
                  M Sport Exhaust
                </p>

                <p className="text-gray-500 text-xs mt-1 max-w-sm">
                  Iconic M sound with an exhilarating tone
                </p>
              </div>
            </div>

          </div>
        </div>


        <div className="px-5 py-2 bg-slate-600/20 border border-gray-800 rounded-2xl mx-5 mt-7">

          <div className="flex gap-2 bg-gray-900/80 rounded-lg px-3 py-2 w-fit">
            <span className="w-0.5 h-5.5 bg-blue-600 rounded-full"></span>

            <h1 className="font-montserrat">
              TECHNICAL SPECIFICATIONS
            </h1>
          </div>

          <div className="flex flex-col mt-5">

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Engine</p>
              <p>4.4l V8 Twin Turbo</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Power</p>
              <p>625 HP</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Torque</p>
              <p>750 Nm</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">0-100km/h</p>
              <p>3.3 s</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Top Speed</p>
              <p>305 km/h</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Transmission</p>
              <p>8-Speed M Steptronic</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Drivetrain</p>
              <p>M xDrive (AWD)</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Fuel Type</p>
              <p>Petrol</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">Fuel Consumption</p>
              <p>10.5 1/100km</p>
            </div>

            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">
              <p className="text-gray-500">CO2 Emissions</p>
              <p>238 g/km</p>
            </div>

          </div>
        </div>


        <div className="mt-7 mx-5">

          <div className="flex flex-col gap-7 px-5 py-2 bg-slate-600/20 border border-gray-800 rounded-2xl">

            <div className="flex gap-2 bg-gray-900/80 rounded-lg px-3 py-2 w-fit">
              <span className="w-0.5 h-5.5 bg-blue-600 rounded-full"></span>

              <h1 className="font-montserrat">
                HIGHLIGHTS
              </h1>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>M Carbon Exterior Package</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>M Sport Brakes with Red Clipers</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>19/20 M Light Alooy Wheels</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>Adaptive LED Headlights</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>Harman Karbon Surround Sound</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>M sport Seats with Merino Leather</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>BMW Live Cockpit Professional</p>
            </div>

            <div className="flex flex-row items-center gap-5">
              <p className="text-blue-600">
                <IoMdCheckboxOutline size={23} />
              </p>
              <p>Parking Assisant Plus</p>
            </div>

          </div>
        </div>

      </motion.div>
        <div className="flex items-center mb-1.5 px-5 py-2 justify-between border border-gray-800 bg-slate-600/20 rounded-2xl mx-4 mt-3 gap-1.5">
        <div className="flex flex-row items-center">
        <img src={Photo5} alt="photo" className="w-1/5"/>
        <div className="flex flex-col gap-1">
        <h1 className="font-semibold">Ready to experience BMW M5 Competition?</h1>
        <p className="text-gray-500 text-sm">Build your book a test drive today.</p>
        </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white w-35 h-13 rounded-lg">Build Your Own</button>
          <button className="border border-blue-600 bg-transparent rounded-lg w-35 h-13">Book a Test Drive</button>
        </div>
        </div>
           <div className="flex flex-row items-center justify-between px-5 py-2">
          <div className="flex items-center gap-2">
          <p> <ShieldCheck size={25}/></p>
          <div>
            <p className="text-sm">3 Yaers Warranty</p>
            <p className="text-gray-500 text-sm">Pacce of mind with BMW</p>
          </div>
          </div>

           <div className="flex items-center gap-2">
          <p> <Settings size={25}/></p>
          <div>
            <p className="text-sm">BMW Service Inclusive</p>
            <p className="text-gray-500 text-sm">Up to 5 years/100,000 km.</p>
          </div>
          </div>

          <div className="flex items-center gap-2">
          <p> <Headset  size={25}/></p>
          <div>
            <p className="text-sm">24/7 Roadside Assistance</p>
            <p className="text-gray-500 text-sm">We re here for you</p>
          </div>
          </div>

            <div className="flex items-center gap-2">
          <p> <Wallet size={25}/></p>
          <div>
            <p className="text-sm">Flexible Financing</p>
            <p className="text-gray-500 text-sm">Tailored to your needs</p>
          </div>
          </div>

        </div>
    </motion.div>
  );
}

export default Detail;