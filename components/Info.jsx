import React from "react";
import PROFILE from "../assets/profile.jpeg";

function Info() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:px-2">
      <div className="pb-12 sm:pb-0 sm:mx-4 flex-shrink-0 flex items-center justify-center">
        <img
          className="w-[130px] md:w-[250px] sm:w-[200px] rounded-md"
          src={PROFILE}
          alt="profile-pic"
        />
      </div>

      <div className="flex flex-col max-w-[500px] mx-4 justify-center">
        <h2 className="sm:text-md font-bold">Who am I?</h2>
        <p className="text-justify sm:text-md">
          Hello there! I am George Baduleanu, a Software Engineer graduate which
          aims to become a Front End Developer. I enjoy creating and designing modern interfaces and websites by applying my UI/UX knowledge.
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
