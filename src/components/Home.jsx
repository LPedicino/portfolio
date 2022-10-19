import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-t from-blue-500 via-black to-violet-400"
    >
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Leandro Pedicino
        </h1>
        <h2 className="text-4xl sm:text-7xl  text-[#8892b0]">
          Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front End Developer, with focus on React. Really pasionate to
          learn the deep world of the Front end and UI/UX Design
        </p>
        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white rounded-md group border-2 px-6 py-3 my-2 flex items-center hover:font-bold hover:scale-105 duration-300 hover:bg-[#975ad0] hover:border-[#975ad0]">
              View More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
