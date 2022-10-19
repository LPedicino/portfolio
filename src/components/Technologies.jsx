import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Technologies = () => {
  return (
    <div
      name="technologies"
      className=" w-full h-screen bg-gradient-to-t from-blue-500 via-black to-violet-400 text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] items-center mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            Technologies
          </p>
          <p className="py-4"> These are some technologies I've worked with</p>
        </div>

        {/* Icons Container */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto my-4"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto my-4" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
