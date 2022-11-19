import React from "react";
import PROFILE from "../assets/profile.jpeg";

function Info() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:px-2">
      <div className="pb-6 sm:pb-0 sm:mx-4 flex-shrink-0 flex items-center justify-center">
        <img
          className="w-[130px] md:w-[250px] sm:w-[200px] rounded-full"
          src={PROFILE}
          alt="profile-pic"
        />
      </div>

      <div className="flex flex-col max-w-[500px] mx-4 justify-center">
        <h2 className="sm:text-md font-bold">Hi!</h2>
        <p className="text-justify sm:text-md">
          I am a London based Software Engineer graduate who
          aspires to become a Front End Developer. I enjoy creating and designing modern interfaces and websites by applying the UI/UX principles.
        </p>
        <div className="flex justify-center">
          <button className="w-fit border border-gray-300 px-5 py-2 mr-2 sm:hover:bg-gray-300 sm:hover:text-black transition duration-300 items-center mt-5">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
