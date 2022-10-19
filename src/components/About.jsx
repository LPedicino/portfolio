import React from "react";
import man from "../assets/man.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-blue-500 via-black to-violet-400 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Leandro Pedicino. Nice to meet you!</p>
          </div>
          <div>
            <p>
              I'm a programming student, curious and researcher. Lover of
              technology, nature and food. I'm fully commited to develop my
              skills and learn about my peers. Highly Focus on Frond end develop
              and mostly on UI design.
            </p>
          </div>
          <div className="image">
            <img src={man} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
