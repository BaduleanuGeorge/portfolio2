import React from "react";

function WorkCard() {
  return (
    <div className="bg-white rounded-md border border-black/50 shadow-sm shadow-black/50 text-black">
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="py-4 font-bold text-lg sm:text-xl">Travel4You</h1>
        <img className="w-[250px] rounded-md" src="https://images.unsplash.com/photo-1603566234499-85676f87022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />

        <p className="text-justify w-[250px] py-4">This Android app was developed as part of my final year project. I have decided to design and develop an application which provides travellers essential tools for their journey.</p>

        <div className="flex gap-4">
            <button className="bg-white py-2 px-4 my-4 border-black border hover:bg-black hover:text-white duration-300">Demo</button>
            <button className="bg-white py-2 px-4 my-4 border-black border hover:bg-black hover:text-white duration-300">Source</button>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
