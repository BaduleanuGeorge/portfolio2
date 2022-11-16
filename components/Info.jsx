import React from "react";
import PROFILE from "../assets/profile.jpeg";

function Info() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:px-2">
      <img
        className="w-[130px] sm:w-[250px] pb-12 sm:mx-4"
        src={PROFILE}
        alt="profile-pic"
      />

      <div className="flex flex-col max-w-[500px] mx-4">
        <h2 className="sm:text-md font-bold">Who am I?</h2>
        <p className="text-justify sm:text-md">
          Hi, I am George Baduleanu and I am a Software Engineer graduate which
          is aims to become a Front End developer, reason being that I have a
          keen eye for UI/UX elements and I enjoy creating and implementing my
          designs.
        </p>
        <div className="flex justify-center">
          <button className="w-fit border border-black px-5 py-2 mr-2 hover:bg-black hover:text-white transition duration-300 items-center mt-5">
            Read more
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Info;
