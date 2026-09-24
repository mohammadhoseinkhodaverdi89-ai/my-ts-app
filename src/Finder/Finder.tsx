import Photo1 from './Photo/Gemini_Generated_Image_49ujtm49ujtm49uj.jpg'
import Photo2 from './Photo/Gemini_Generated_Image_c4z5qmc4z5qmc4z5.jpg'
import Photo3 from './Photo/Gemini_Generated_Image_ocrqymocrqymocrq.jpg'
import Photo4 from './Photo/Gemini_Generated_Image_ujeoowujeoowujeo.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const containerDiv = {
  hidden: {
    opacity: 0,
    x: 20,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      staggerChildren: 0.3,
    },
  },
};
const children = {
    hidden : {opacity : 0 , y : 30 , scale : 0.8},
    visible : {opacity : 1 , y : 0 , scale : 1}
}
function Finder() {
    const AllPhotos = [Photo1, Photo2, Photo3, Photo4]
    return (
        <motion.div variants={containerDiv} 
        initial="hidden"
        whileInView="visible"
        className="px-3 md:px-5 lg:px-10 flex flex-col gap-4 w-full h-full">
            <div className='flex flex-col w-full h-full'>
                <p className='text-blue-500 text-sm font-semibold tracking-[0.25em] mb-2'>
                    EXPLORE BMW
                </p>
                <h1 className="font-inter text-4xl">VEHICLE FINDER & CATEGORIES</h1>
                <span className='w-20 h-1 bg-blue-600 rounded-full mt-4'></span>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-3 xl:grid-cols-4 xl:gap-2 overflow-hidden'>
                {AllPhotos.map((item, index) => (
                    <motion.div variants={children} key={index} className='relative group  overflow-hidden'>
                        <Link to={`/More/${index === 0 ? "SEDAN" : index === 1 ? "SUV" : index === 2 ? "COUPE" : index === 3 ? "ELECTRIC" : "none" }`}>
                         <img src={item} alt="photo" className='w-full h-full rounded-xl border-2 border-gray-700 active:scale-95 transition-all duration-75' />
                        </Link>
                        <div className='flex flex-col absolute w-fit translate-y-20 bottom-0 left-0 p-4 md:p-5 group-hover:translate-y-0 transition-all duration-300 hover:flex'>
                            <p className='font-semibold text-xl'>
                                {index === 0 && "SEDAN"}
                                {index === 1 && "SUV"}
                                {index === 2 && "COUPE"}
                                {index === 3 && "ELECTRIC"}
                            </p>
                            <span className='text-blue-600 text-[16px]'>
                                EXPLORE  VEHICLES →
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
export default Finder