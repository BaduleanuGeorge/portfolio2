import React from "react";
import PROFILE from "../assets/profile.jpeg";
import Info from "./Info";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Skills from "./Skills";

const About = () => {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center items-center">
      <div className="flex items-center h-full sm:max-w-[1000px] mx-auto bg-white border border-l-black border-r-black px-2">
        <div>
          <MdOutlineArrowBackIosNew
            onClick={sliderLeft}
            size={30}
            className="transition sm:hover:scale-150 sm:opacity-75 hover:opacity-100"
          />
        </div>

        <div
          id={"slider"}
          className="flex snap-x snap-mandatory overflow-x-scroll container-snap scroll-smooth h-full items-center"
        >
          <div className="snap-start flex-shrink-0 w-full">
            <h1 className="text-center sm:text-3xl text-2xl pb-4 sm:pb-12">
              About
            </h1>
            <Info />
          </div>

          <div className="snap-start flex-shrink-0 w-full">
            <h1 className="text-center sm:text-3xl text-2xl pb-4 sm:pb-12">
              Skills
            </h1>
            <Skills />
          </div>
        </div>

        

        <div>
          <MdOutlineArrowForwardIos
            onClick={sliderRight}
            size={30}
            className="transition sm:hover:scale-150 sm:opacity-75 hover:opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
