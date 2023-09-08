import React from "react";
import { Link } from "react-scroll";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiDownload,
} from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Resume from "./../assets/BKS-Resume.pdf";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const icons = [
    {
      id: 1,
      icon: <BiLogoHtml5 />,
      name: "HTML",
      style: "text-orange-400",
    },
    {
      id: 2,
      icon: <BiLogoCss3 />,
      name: "CSS",
      style: "text-sky-400",
    },
    {
      id: 3,
      icon: <BiLogoJavascript />,
      name: "JavaScript",
      style: "text-yellow-400",
    },
    {
      id: 4,
      icon: <BiLogoReact />,
      name: "React",
      style: "text-cyan-500",
    },
    {
      id: 5,
      icon: <BiLogoTypescript />,
      name: "TypeScript",
      style: "text-blue-500",
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  via-blue-950 to-gray-700 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-center ">
        <div className="flex flex-col justify-center h-full w-full">
          <h1
            className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-wider enterFromLeft"
            style={{
              textShadow: "5px 5px 12px #1c6190",
              fontFamily: "Kaushan Script",
            }}
          >
            Baik Kai Shan
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 tracking-widest my-2 uppercase enterFromRight ">
            - Frontend Developer -
          </h2>
          <div className="text-blue-200  text-2xl mt-2 mb-4 max-w-full flex flex-wrap justify-center enterFromLeftSlower ">
            {icons.map(({ id, icon, name, style }) => (
              <div
                key={id}
                className={`flex items-center justify-center px-5 skills-home`}
              >
                {name}
                <span className={`flex ` + style}>{icon}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto place-items-center text-center enterFromBottom ">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-800 font-bold uppercase cursor-pointer hover:scale-105 duration-300 "
            >
              Contact me
              <span className="group-hover:rotate-90 duration-300 group-hover:text-red-500">
                <MdOutlineKeyboardArrowRight size={22} className="ml-0" />
              </span>
            </Link>
            <a
              href="https://github.com/kaishan-baik"
              className="text-center items-center flex justify-center mx-5 text-white
              hover:scale-125 duration-200 hover:text-yellow-300 animate-pulse
              "
            >
              <FaGithub size={50} className="ml-2" />
            </a>
            <a
              href={Resume}
              // download={BiDownload}
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-5 py-2 my-3 flex items-center rounded-md bg-gradient-to-r from-blue-800 to-gray-500 font-bold uppercase cursor-pointer  hover:scale-105 duration-300 mr-5 ml-2 tracking-widest
        
              "
            >
              Resume
              <span className="group-hover:text-green-400 group-hover:animate-bounce duration-300">
                <BiDownload size={22} className="mx-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
