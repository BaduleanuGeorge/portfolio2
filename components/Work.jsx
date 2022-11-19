import React from "react";
import WorkCard from "./WorkCard";

function Work() {
  return (
    <div className="w-full bg-[#0d0d10] text-gray-300">
      <div className="sm:max-w-[1000px] mx-auto h-full flex flex-col justify-center items-center">
        <p className="text-center sm:text-3xl text-2xl py-4 sm:pb-8">My Work</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
}

export default Work;
