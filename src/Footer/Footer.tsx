import { motion } from "framer-motion";
import {
    FaArrowUp,
    FaInstagram,
    FaYoutube,
    FaGithub,
    FaArrowRight,
} from "react-icons/fa6";

const Container = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const Children = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className="bg-[#050505] text-white border-t border-white/10">
            <motion.div
            variants={Container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-20 border-b border-gray-800">
                <div className="flex flex-col items-start justify-center">
                    <div className="flex flex-col items-start gap-4 justify-center">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="border px-1 py-3 border-gray-700 rounded-full">BMW</span>
                            <p className="text-white tracking-[0.10rem] text-2xl">BMW</p>
                        </div>
                        <p className="text-gray-500">Sheer Driving Pleasure. <br /> Experience the future of performance</p>
                    </div>
                </div>
                <motion.div variants={Children} className="flex flex-col items-start gap-3">
                    <h1 className="text-lg">EXPLORE</h1>
                    <ul className="flex flex-col gap-3">
                        <li className="text-gray-500 hover:text-white transition-all duration-300">Models</li>
                        <li className="text-gray-500 hover:text-white transition-all duration-300">Finder</li>
                        <li className="text-gray-500 hover:text-white transition-all duration-300">Electric</li>
                    </ul>
                </motion.div>
                <motion.div variants={Children} className="flex flex-col items-start gap-3">
                    <h1 className="text-lg">COMPANY</h1>
                    <ul className="flex flex-col gap-3">
                        <li className="text-gray-500 hover:text-white transition-all duration-300">About Us</li>
                        <li className="text-gray-500 hover:text-white transition-all duration-300">Contact</li>
                        <li className="text-gray-500 hover:text-white transition-all duration-300">Careers</li>
                    </ul>
                </motion.div>
                <motion.div variants={Children} className="flex flex-col gap-3">
                    <h1>CONNECT</h1>
                    <div className="flex gap-3">
                        <p className="border border-gray-700 p-2"><FaInstagram size={21} /></p>
                        <p className="border border-gray-700 p-2"><FaYoutube size={21} /></p>
                        <p className="border border-gray-700 p-2"><FaGithub size={21} /></p>
                    </div>
                </motion.div>
            </motion.div>
            <div className="flex justify-between items-center items-center mx-auto px-6 sm:px-8 lg:px-10 py-16 max-w-7xl">
                <p className="text-white/30 text-xs"> © 2026 BMW Collection. All rights reserved. </p>
                <ul className="flex gap-2">
                    <li className="text-white/30">Privecy</li>
                    <li className="text-white/30">Tems</li>
                </ul>
                <p className="text-white/30">Back to Top</p>
            </div>
        </footer>
    )
};

export default Footer;

