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
            <p>
              Hi, I'm Leandro, <br />
              Nice to meet you!
            </p>
          </div>
          <div>
            <p>
            I'm a programmer with a focus on front-end development and UI/UX design. I love keeping up with the latest tech and working on my own projects. I'm always looking to improve my skills and learn from others in the IT community            </p>
          </div>
          <div id="image">
            <img
              className="h-[550px] w-[450px] ml-[250px] rounded-[2rem]"
              src={man}
              alt="me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
