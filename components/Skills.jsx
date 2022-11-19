import React from "react";
import PROFILE from "../assets/profile.jpeg";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVA from "../assets/java.png";
import JAVASCRIPT from "../assets/javascript.png";
import TAILWIND from "../assets/tailwind.png";
import FIREBASE from "../assets/firebase.png";

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row sm:mx-2">
      <div className="pb-4 max-w-[450px] mx-4">
        <p className="text-justify">These technologies make up my skillset. I feel very confident using them in my projects as I have a solid knowledge for each.</p>
        <p>Moreover, I'm learning React and Tailwind to help me in my journey of becoming a Front End Developer.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:mx-4 flex-shrink-0 text-black">
        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={JAVASCRIPT} className="w-[60px]" />
          <h2 className="pt-1">Javascript</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={HTML} className="w-[60px]" />
          <h2 className="pt-1">HTML5</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={CSS} className="w-[60px]" />
          <h2 className="pt-1">CSS</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={JAVA} className="w-[60px]" />
          <h2 className="pt-1">Java</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={TAILWIND} className="w-[60px]" />
          <h2 className="pt-1">Tailwind</h2>
        </div>

        <div className="flex flex-col justify-center items-center w-[90px] h-[100px] border border-black/25 bg-white rounded-md shadow-sm shadow-black/50">
          <img src={FIREBASE} className="w-[60px]" />
          <h2 className="pt-1">Firebase</h2>
        </div>

        

        
        
      </div>
    </div>
  );
}

export default Skills;
