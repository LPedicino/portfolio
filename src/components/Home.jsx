import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
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
          Ichiro
        </h1>
        <h2 className="text-4xl sm:text-7xl  text-[#8892b0]">
          Leandro's Owner
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        I'm a 10 years old blind cat, but have parents who love and care for me. I expend the most of the time sleeping or following Leandro around the house like his shadow. I also scream for my food frequently. ¡Miau! He is the most important thing in my life, and I in his.
        </p>
        <div className="w-[10.5rem] ">
          <Link to="about">
            <button className="text-white rounded-3xl group border-2 w-full px-6 py-3 my-2 flex items-center duration-300 hover:bg-[#975ad0] hover:border-[#975ad0] active:scale-95">
              Read More
              <span className="group-hover:rotate-90 duration-300">
                <HiChevronDoubleRight className="ml-4" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
