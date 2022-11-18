import React from "react";
import Background from "../assets/background.jpg";
import {motion} from "framer-motion";

function Main() {
  return (
    <div className="h-screen w-full custom-bg bg-cover bg-center">
      <div className="bg-black/80 h-full w-full text-gray-300">
        <div className="flex items-center h-full p-6 sm:max-w-[1000px] mx-auto">
          <motion.div
          initial={{x:-500, scale: 1, opacity: 0.5}}
          animate ={{x:0, scale: 1, opacity: 1}}
          transition={{duration: 1}}>
            <p className="md:text-lg">Hi, I am</p>
            <h1 className="text-3xl font-bold md:text-4xl">George Baduleanu</h1>
            <h2 className="text-3xl md:text-4xl">Software Engineer</h2>
            <p className="text-sm pt-4 sm:max-w-[500px]">
              Nice to meet you, this is my digital portfolio. Feel free to
              navigate through it and don't hesitate to get in touch with me.
            </p>
            <div className="pt-10">
              <a href="#work"><button className="border px-5 py-2 mr-2 hover:bg-white hover:text-black transition duration-300">
                Contact me
              </button></a>
              <a href="#about">
                <button className="border px-5 py-2 hover:bg-white hover:text-black transition duration-300">
                  Find more
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main;
