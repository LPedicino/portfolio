import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaRegFilePdf,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo from "../assets/logo1.png";
import pdf from "../components/pdf.pdf";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer hover:scale-[1.15] duration-300">
        <Link to="home">
          <img
            className="mt-2 rounded-full"
            src={Logo}
            alt=""
            style={{ width: "40px" }}
          />
        </Link>
      </div>

      {/* Mobile social */}

      <div className="md:hidden">
        <ul className="flex flex-row justify-between w-[200px] h-[50px] text-center">
          <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
            {" "}
            <a
              className="flex items-center text-white"
              href="https://www.linkedin.com/in/leandro-pedicino"
              target="blank_"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
            {" "}
            <a
              className="grid items-center w-full text-white"
              href="https://github.com/LPedicino"
              target="blank_"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center  hover:scale-110 duration-300 mt-2">
            {" "}
            <a
              className="grid items-center w-full text-black"
              href="mailto:leakomvial@gmail.com"
              target="blank_"
            >
              <HiOutlineMail className="text-white" size={25} />
            </a>
          </li>
          <li className="w-[25px] h-[25px] rounded-full flex flex-row items-center hover:scale-110 duration-300 mt-2">
            {" "}
            <a
              className="grid items-center w-full text-white"
              href={pdf}
              target="blank_"
            >
              <FaRegFilePdf size={25} />
            </a>
          </li>
        </ul>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-black hover:font-bold hover:bg-gray-300 rounded-xl h-[27px] duration-200 ">
          <Link to="home">Home</Link>
        </li>
        <li className="hover:text-black hover:font-bold hover:bg-gray-300 rounded-xl h-[27px] duration-200">
          <Link to="about">About</Link>
        </li>
        <li className="hover:text-black hover:font-bold hover:bg-gray-300 rounded-xl h-[27px] duration-200">
          <Link to="technologies">Technologies</Link>
        </li>
        <li className="hover:text-black hover:font-bold hover:bg-gray-300 rounded-xl h-[27px] duration-200">
          <Link to="work">Work</Link>
        </li>
        <li className="hover:text-black hover:font-bold hover:bg-gray-300 rounded-xl h-[27px] duration-200">
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}

      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={20} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link
            onClick={handleClick}
            to="technologies"
            smooth={true}
            duration={500}
          >
            Technologies
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:font-bold">
          <Link onClick={handleClick} to="contact">
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Menu */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 font-semibold">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]">
            {" "}
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/leandro-pedicino"
              target="blank_"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1b1a1a]">
            {" "}
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/LPedicino"
              target="blank_"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e0e6e4]">
            {" "}
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto:leakomvial@gmail.com"
              target="blank_"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F40F02]">
            {" "}
            <a
              className="flex justify-between items-center w-full text-white"
              href={pdf}
              target="blank_"
            >
              Resume <FaRegFilePdf size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
