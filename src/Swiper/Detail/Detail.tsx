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
import useCartStore from '../../ZustandStore/Zustand'
import { useNavigate } from "react-router-dom";
interface CarDetail {
  id: number;
  col: string;
  name: string;
  model: string;
  detail: string;

  overview: string;

  specifications: {
    engine: string;
    power: string;
    torque: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
    drivetrain: string;
    fuelType: string;
    fuelConsumption: string;
    co2: string;
  };

  highlights: string[];

  features: {
    title: string;
    description: string;
  }[];
}

const cars: CarDetail[] = [
  {
    id: 1,
    col: "2026 Collection",
    name: "BMW M5",
    model: "Competition",
    detail: "The ultimate blend of performance and luxury",

    overview:
      "The BMW M5 Competition redefines what a high-performance sedan can be. With a powerful M TwinPower Turbo V8 engine and M xDrive all-wheel drive, it delivers breathtaking performance with everyday usability.",

    specifications: {
      engine: "4.4L V8 Twin Turbo",
      power: "625 HP",
      torque: "750 Nm",
      acceleration: "3.3 s",
      topSpeed: "305 km/h",
      transmission: "8-Speed M Steptronic",
      drivetrain: "M xDrive (AWD)",
      fuelType: "Petrol",
      fuelConsumption: "10.5 L/100km",
      co2: "238 g/km"
    },

    highlights: [
      "M Carbon Exterior Package",
      "M Sport Brakes with Red Calipers",
      "19/20 M Light Alloy Wheels",
      "Adaptive LED Headlights",
      "Harman Kardon Surround Sound",
      "M Sport Seats with Merino Leather",
      "BMW Live Cockpit Professional",
      "Parking Assistant Plus"
    ],

    features: [
      {
        title: "M xDrive",
        description: "Intelligent all-wheel drive for maximum traction"
      },
      {
        title: "M Steptronic Transmission",
        description: "8-speed automatic transmission with Drivelogic"
      },
      {
        title: "M TwinPower Turbo V8",
        description: "High-performance engine with exhilarating power"
      },
      {
        title: "M Sport Exhaust",
        description: "Iconic M sound with an exhilarating tone"
      }
    ]
  },

  {
    id: 2,
    col: "2026 Collection",
    name: "BMW M4",
    model: "Competition",
    detail: "Pure performance with iconic M design",

    overview:
      "The BMW M4 Competition combines thrilling performance with everyday practicality and unmistakable M styling.",

    specifications: {
      engine: "3.0L Twin Turbo Inline-6",
      power: "503 HP",
      torque: "650 Nm",
      acceleration: "3.4 s",
      topSpeed: "290 km/h",
      transmission: "8-Speed M Steptronic",
      drivetrain: "M xDrive (AWD)",
      fuelType: "Petrol",
      fuelConsumption: "10.1 L/100km",
      co2: "230 g/km"
    },

    highlights: [
      "M Carbon Exterior Package",
      "M Sport Brakes",
      "M Light Alloy Wheels",
      "Adaptive LED Headlights",
      "Harman Kardon Sound System",
      "M Sport Seats",
      "BMW Live Cockpit Professional",
      "Parking Assistant"
    ],

    features: [
      {
        title: "M xDrive",
        description: "Advanced all-wheel drive for maximum grip"
      },
      {
        title: "M Steptronic",
        description: "8-speed automatic transmission with Drivelogic"
      },
      {
        title: "TwinPower Turbo",
        description: "High-performance inline-six engine"
      },
      {
        title: "M Sport Exhaust",
        description: "Distinctive M performance sound"
      }
    ]
  }
];

const Photos: string[] = [Photo1, Photo2, Photo3, Photo4]

type RouteParams = {
  id: string;
}


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

function Detail() {
  const { id } = useParams<RouteParams>();
  const [image, setImage] = useState<string>(Photos[0]);
  const Add : (string|number) = useCartStore((state) => state.addToCart)
  const detail = cars.find((item) => item.id === Number(id));
  const Navigate = useNavigate();

  if (!detail) {
    return <div className="p-6 text-white">محصولی پیدا نشد!</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="text-white min-h-screen w-full overflow-hidden"
    >

      {/* HERO */}

      <div className="relative h-[60vh] w-full">

        <div className="w-full h-full absolute inset-0">

          <img
            src={image}
            alt="photo"
            className="w-full h-full object-center object-cover"
          />

        </div>

        <div className="absolute top-1 left-3">
          <button onClick={() => Navigate(-1)} className="px-4 py-1 border border-blue-500 bg-blue-600/20 text-blue-400 rounded-md hover:translate-x-1 hover:text-white transition-all duration-300">Back</button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex md:flex-col h-1/2 top-0 translate-y-1/2 right-5 absolute"
        >

          <div className="flex flex-row items-center">

            <span className="w-[2px] h-4 bg-blue-300"></span>

            <p className="bg-blue-500/20 text-blue-300 text-[10px] px-2 py-0.5 rounded-sm font-medium text-center">
              {detail.col}
            </p>

          </div>


          <h1 className="font-inter text-5xl">
            {detail.name}
          </h1>

          <h1 className="font-montserrat text-4xl">
            {detail.model}
          </h1>

          <p className="font-medium text-[15px] max-w-70 mt-2.5">
            {detail.detail}
          </p>


          <div className="flex flex-row justify-center items-center gap-5 mr-2.5 mt-5">

            <div className="flex flex-row justify-center items-center gap-2">

              <p className="text-lg">
                <IoFlashOutline />
              </p>

              <div className="flex flex-col justify-center items-center">

                <p className="text-[12px]">
                  {detail.specifications.power}
                </p>

                <p className="text-[12px] text-gray-400">
                  HP
                </p>

              </div>

            </div>


            <div className="flex flex-row justify-center items-center gap-2">

              <p className="text-lg">
                <IoMdSpeedometer />
              </p>

              <div className="flex flex-col justify-center items-center">

                <p className="text-[12px]">
                  {detail.specifications.acceleration}
                </p>

                <p className="text-[12px] text-gray-400">
                  0-100 km/h
                </p>

              </div>

            </div>


            <div className="flex flex-row justify-center items-center gap-2">

              <p className="text-lg">
                <PiEngineLight />
              </p>

              <div className="flex flex-col justify-center items-center">

                <p className="text-[12px]">
                  {detail.specifications.engine}
                </p>

                <p className="text-[12px] text-gray-400">
                  Twin Turbo
                </p>

              </div>

            </div>


            <div className="flex flex-row justify-center items-center gap-2">

              <p className="text-lg">
                <TbManualGearbox />
              </p>

              <div className="flex flex-col justify-center items-center">

                <p className="text-[12px]">
                  {detail.specifications.transmission}
                </p>

                <p className="text-[12px] text-gray-400">
                  M Steptronic
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>


      <div  className="w-full h-full grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5 px-8 mt-4">

        {Photos.map((item, index) => (

          <motion.div
            variants={itemVariants}
            key={index}
            className="w-full h-30 object-cover cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
          >

            <img
              src={item}
              alt="index"
              className="w-full h-full rounded-lg object-cover"
              onClick={() => setImage(item)} loading="lazy"
            />

          </motion.div>

        ))}

      </div>


      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >


      

        <div className="px-5 py-2 mt-7 mx-5 bg-slate-600/20 border border-gray-800 rounded-2xl">

          <div className="flex items-center gap-2 bg-gray-900/80 rounded-lg px-3 py-2 w-fit">

            <span className="w-0.5 h-5.5 bg-blue-600 rounded-full"></span>

            <h1 className="font-montserrat text-white font-semibold tracking-wide">
              OVERVIEW
            </h1>

          </div>


          <p className="text-gray-500 text-sm font-medium max-w-sm leading-6 mt-4">
            {detail.overview}
          </p>


          <div className="mt-6 space-y-5">

            {detail.features.map((feature, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/80 text-blue-500">

                  {index === 0 && (
                    <IoSpeedometerOutline size={23} />
                  )}

                  {index === 1 && (
                    <TbManualGearbox size={23} />
                  )}

                  {index === 2 && (
                    <PiEngineBold size={23} />
                  )}

                  {index === 3 && (
                    <AiOutlineSound size={23} />
                  )}

                </div>

                <div className="flex flex-col">

                  <p className="text-white font-semibold text-sm">
                    {feature.title}
                  </p>

                  <p className="text-gray-500 text-xs mt-1 max-w-sm">
                    {feature.description}
                  </p>

                </div>

              </div>

            ))}

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

              <p className="text-gray-500">
                Engine
              </p>

              <p>
                {detail.specifications.engine}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Power
              </p>

              <p>
                {detail.specifications.power}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Torque
              </p>

              <p>
                {detail.specifications.torque}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                0-100 km/h
              </p>

              <p>
                {detail.specifications.acceleration}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Top Speed
              </p>

              <p>
                {detail.specifications.topSpeed}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Transmission
              </p>

              <p>
                {detail.specifications.transmission}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Drivetrain
              </p>

              <p>
                {detail.specifications.drivetrain}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Fuel Type
              </p>

              <p>
                {detail.specifications.fuelType}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                Fuel Consumption
              </p>

              <p>
                {detail.specifications.fuelConsumption}
              </p>

            </div>


            <div className="flex flex-row justify-between items-center border-b border-b-gray-800 py-2">

              <p className="text-gray-500">
                CO2 Emissions
              </p>

              <p>
                {detail.specifications.co2}
              </p>

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


            {detail.highlights.map((highlight, index) => (

              <div
                key={index}
                className="flex flex-row items-center gap-5"
              >

                <p className="text-blue-600">
                  <IoMdCheckboxOutline size={23} />
                </p>

                <p>
                  {highlight}
                </p>

              </div>

            ))}

          </div>

        </div>

      </motion.div>



      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          x: 10,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-1.5 px-5 py-2 justify-between border border-gray-800 bg-slate-600/20 rounded-2xl mx-4 mt-3 gap-1.5"
      >

        <div className="flex flex-row items-center">

          <img
            src={Photo5}
            alt="photo"
            className="w-1/5" loading="lazy"
          />

          <div className="flex flex-col gap-1">

            <h1 className="font-semibold">
              Ready to experience {detail.name} {detail.model}?
            </h1>

            <p className="text-gray-500 text-sm">
              Build your book a test drive today.
            </p>

          </div>

        </div>


        <div className="flex items-center gap-2">

          <button className="bg-blue-600 text-white w-35 h-13 rounded-lg hover:-translate-y-1.5 transition-all duration-300 hover:bg-blue-600/50 font-semibold">
            Build Your Own
          </button>

          <button className="border border-blue-600 bg-transparent rounded-lg w-35 h-13 font-semibold hover:bg-blue-600/20 hover:-translate-y-1.5 transition-all duration-300">
            Book a Test Drive
          </button>

        </div>

      </motion.div>



      <div className="flex flex-row items-center justify-between px-5 py-2">


        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2"
        >

          <p className="text-blue-600">
            <ShieldCheck size={25} />
          </p>

          <div>

            <p className="text-sm">
              3 Years Warranty
            </p>

            <p className="text-gray-500 text-sm">
              Peace of mind with BMW
            </p>

          </div>

        </motion.div>


        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2"
        >

          <p className="text-blue-600">
            <Settings size={25} />
          </p>

          <div>

            <p className="text-sm">
              BMW Service Inclusive
            </p>

            <p className="text-gray-500 text-sm">
              Up to 5 years/100,000 km.
            </p>

          </div>

        </motion.div>


        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2"
        >

          <p className="text-blue-600">
            <Headset size={25} />
          </p>

          <div>

            <p className="text-sm">
              24/7 Roadside Assistance
            </p>

            <p className="text-gray-500 text-sm">
              We're here for you
            </p>

          </div>

        </motion.div>


        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2"
        >

          <p className="text-blue-600">
            <Wallet size={25} />
          </p>

          <div>

            <p className="text-sm">
              Flexible Financing
            </p>

            <p className="text-gray-500 text-sm">
              Tailored to your needs
            </p>

          </div>

        </motion.div>


      </div>

    </motion.div>
  );
}

export default Detail;