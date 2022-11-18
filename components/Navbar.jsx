import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"
import {motion} from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };


  return (
    <div className="fixed w-full h-[60px] bg-black/70 flex justify-between items-center p-4 sm:px-8 xl:px-12 text-gray-200">
      <motion.div 
      initial={{x:-500, scale: 0.5, opacity: 0.5}}
      animate ={{x:0, scale: 1, opacity: 1}}
      transition={{duration: 1}}>
        <img className="w-[50px] rounded-full" src={Logo} alt="logo" />
      </motion.div>
      <motion.div initial={{x:+500, scale: 0.5, opacity: 0.5}}
      animate ={{x:0, scale: 1, opacity: 1}}
      transition={{duration: 1}} className="hidden sm:flex">
        <ul className="flex">
          <li className="px-4 hover:text-gray-500 cursor-pointer">About</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Work</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Contact</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Resume</li>
        </ul>
      </motion.div>

      
      <motion.div 
      initial={{ x: +500, scale: 0.5, opacity: 0.5 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={handleNav} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </motion.div>
      
      <ul className={!nav ? "fixed right-[-100%]" : "fixed bg-black/95 flex flex-col justify-center items-center top-0 right-0 h-full w-[70%] ease-in-out duration-500"}>
        <li className="px-4 py-6 text-xl hover:text-gray-500 cursor-pointer">About</li>
        <li className="px-4 py-6 text-xl hover:text-gray-500 cursor-pointer">Work</li>
        <li className="px-4 py-6 text-xl hover:text-gray-500 cursor-pointer">Contact</li>
        <li className="px-4 py-6 text-xl hover:text-gray-500 cursor-pointer">Resume</li>
      </ul>
    </div>
  );
}

export default Navbar;