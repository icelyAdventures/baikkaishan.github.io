import React from 'react';
import html from './../assets/skills/html.png';
import css from './../assets/skills/css.png';
import javascript from './../assets/skills/javascript.png';
import reactImg from './../assets/skills/react.png';
import github from './../assets/skills/github.png';
import tailwind from './../assets/skills/tailwind.png';
import typescript from './../assets/skills/typescript.png';
// import d3 from "./../assets/skills/d3.png";
import mysql from './../assets/skills/mysql.png';
import nodejs from './../assets/skills/nodeJs.png';

const Skills = () => {
  const skills = [
    {
      id: 301,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 302,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 303,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 304,
      src: reactImg,
      title: 'React',
      style: 'shadow-cyan-500',
    },
    {
      id: 305,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-700',
    },
    {
      id: 306,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-cyan-700',
    },
    {
      id: 307,
      src: github,
      title: 'Github',
      style: 'shadow-gray-300',
    },
    {
      id: 308,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-blue-500',
    },
    {
      id: 309,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-500',
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black via-slate-950 to-gray-800 w-full md:h-screen flex items-center justify-center pt-10 md:px-4 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-indigo-500 p-2 inline enterFromLeft">
            Skills
          </p>
          <p className="py-5 text-xl enterFromLeftSlower">
            These are the tech stacks that I've worked with!
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-1 h-auto place-content-center enterFromRight ">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                'shadow-lg hover:scale-110 duration-500 py-2 rounded-lg' +
                ' ' +
                style
              }
            >
              <img
                src={src}
                alt="skills"
                className="h-20 w-20 object-contain  mx-auto"
              />
              <p className="py-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
