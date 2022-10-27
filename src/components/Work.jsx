import React from "react";
import weather from "../assets/weather.JPG";
import crypto from "../assets/crypto.PNG";
import pkm from "../assets/pkm.JPG";
import memo from "../assets/memo.JPG";
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
            style={{ backgroundImage: `url(${weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <p className="text-center items-center">
                Check out updated Data <br /> of your City.
                <br /> Made with React & Axios.
              </p>
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
                Sign up in Firebase cloud <br /> to save your favorite shows.
                <br /> Made with React, <br />
                Tailwind CSS & Firebase.
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
            style={{ backgroundImage: `url(${crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crypto Currency
              </span>
              <p className="text-center items-center">
                Check out updated Data <br /> of your favorite Crypto Coin.
                <br /> Made with React & Axios.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://lpedicino.github.io/Crypto-Currency"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/Crypto-Currency/tree/master"
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
            style={{ backgroundImage: `url(${pkm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pokédex
              </span>
              <p className="text-center items-center">
                Search your favorite Pokémon <br />
                by Name or Number.
                <br /> Made with HTML, CSS & JS.
              </p>
              <div className="pt-8 text-center">
                <a href="https://lpedicino.github.io/pokedex" target="blank_">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/LPedicino/pokedex/" target="blank_">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 5 */}

          <div
            style={{ backgroundImage: `url(${memo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                MemoTest Cuphead
              </span>
              <p className="text-center items-center">
                Memotest game of <br /> the popular Cuphead.
                <br /> Made with HTML, CSS & JS.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://lpedicino.github.io/MemotestCuphead"
                  target="blank_"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LPedicino/MemotestCuphead/tree/master"
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
            style={{ backgroundImage: `url(${burgerness})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-80 items-center text-center">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Burgerness
              </span>
              <p className="text-center items-center">
                My own Burger Web. <br /> Check out the best
                <br /> Burgers I've made
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
        </div>
      </div>
    </div>
  );
};

export default Work;
