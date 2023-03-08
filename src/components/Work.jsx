import React from "react";
import weather from "../assets/weather.JPG";
import remolo from "../assets/remolo.JPG";
import dashboard from "../assets/dashboard.JPG";
import nike from "../assets/nike.JPG";
import burgerness from "../assets/burgerness.JPG";
import netfly from "../assets/netfly.JPG";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-gradient-to-b from-blue-500 via-black to-violet-400"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300  border-red-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent Works</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Grid item 1 */}

          <div
            style={{ backgroundImage: `url(${nike})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ecommerce Project
              </span>
              <p className="text-center items-center">
              Nike e-commerce web app <br/> built with React, Redux, <br/> and Firebase,<br/> featuring product browsing, <br/> filtering, and checkout.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://nike-ecommerce-tau.vercel.app/"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/nike-ecommerce"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 2 */}

          <div
            style={{ backgroundImage: `url(${netfly})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                IS NOT NETFLIX
              </span>
              <p className="text-center items-center">
              A responsive movie app built <br/> with React, Redux, Firebase, <br/> and Tailwind CSS, <br/> featuring movie search, <br/> details, and trailers.
              </p>
              <div className="pt-8 text-center">
                <a href="https://netfly-react.web.app/" target="blank_">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 3 */}

          <div
            style={{ backgroundImage: `url(${remolo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pizzeria Remolo
              </span>
              <p className="text-center items-center">
                Project in colaboration <br /> with an IDforIdeas team
                <br /> A responsive pizza web built <br /> with React and Tailwind CSS.<br /> Users can sort by price<br /> and category.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://lpedicino.github.io/pizza-remolo"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/pizza-remolo/"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 4 */}

          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <p className="text-center items-center">
              Weather app built with <br/> React, Axios and <br/>OpenWeatherMap API. <br/> Displays current weather <br/> for any location.</p>
              <div className="pt-8 text-center">
                <a
                  href="https://lpedicino.github.io/weather-app/"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/weather-app/tree/master"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 5 */}

          <div
            style={{ backgroundImage: `url(${burgerness})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Burgerness
              </span>
              <p className="text-center items-center">
              A responsive web for <br/> a burger restaurant, with  <br/> detailed food info. <br/> Built with React <br/> and Tailwind CSS.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://lpedicino.github.io/burgerness"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/burgerness"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 6 */}

          <div
            style={{ backgroundImage: `url(${dashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Dashboard
              </span>
              <p className="text-center items-center">
                Shows sales, revenue, and<br />
                order volume data for <br/> an online store.<br />Features interactive elements<br /> for easy data analysis.
                <br/>
                built with Next js, 
                <br /> styled with Tailwind CSS.

              </p>
              <div className="pt-8 text-center">
                <a href="https://dashboard-nextjs-gxkt77vmj-lpedicino.vercel.app/" target="blank_">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/LPedicino/Dashboard-Nextjs" target="blank_">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
