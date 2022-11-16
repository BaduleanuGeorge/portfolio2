import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
    };


  return (
    <div className="fixed w-full h-[60px] bg-black/70 flex justify-between items-center p-4 text-gray-200">
      <div>
        <img className="w-[50px] rounded-full" src={Logo} alt="logo" />
      </div>
      <div className="hidden sm:flex">
        <ul className="flex">
          <li className="px-4 hover:text-gray-500 cursor-pointer">About</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Work</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Contact</li>
          <li className="px-4 hover:text-gray-500 cursor-pointer">Resume</li>
        </ul>
      </div>

      <div onClick={handleNav} className="sm:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? "fixed right-[-100%]" : "fixed bg-black/95 flex flex-col justify-center items-center top-0 right-0 h-full w-[70%] ease-in-out duration-500"}>
        <li className="px-4 py-6 text-xl">About</li>
        <li className="px-4 py-6 text-xl">Work</li>
        <li className="px-4 py-6 text-xl">Contact</li>
        <li className="px-4 py-6 text-xl">Resume</li>
      </ul>
    </div>
  );
}

export default Navbar;