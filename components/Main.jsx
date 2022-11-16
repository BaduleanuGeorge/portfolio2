import React from "react";
import Background from "../assets/background.jpg";

function Main() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center custom-bg bg-cover bg-fixed bg-center">
        <div className="h-full w-full bg-black/80 text-gray-300">
          <div className="flex flex-col justify-center h-full items-center sm:max-w-[1000px] px-5">
            <div>
              <p className="md:text-lg">Hi, I am</p>
              <h1 className="text-3xl font-bold md:text-4xl">
                George Baduleanu
              </h1>
              <h2 className="text-3xl md:text-4xl">Software Engineer</h2>
              <p className="text-sm pt-4 sm:max-w-[500px]">
                Nice to meet you, this is my digital portfolio. Feel free to
                navigate through it and don't hesitate to get in touch with me.
              </p>
              <div className="pt-10">
                <button className="border px-5 py-2 mr-2 hover:bg-white hover:text-black transition duration-300">
                  Contact me
                </button>
                <a href="#about"><button className="border px-5 py-2 hover:bg-white hover:text-black transition duration-300">
                  Find more
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
