import React from "react";
import profile from "./../profile.jpg";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 via-indigo-950 to-black  text-white md:px-4 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full md:w-9/10 ">
          <div className="pb-2 sm:pb-8 enterFromLeft  ">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500  ">
              About Me
            </p>
          </div>
          <div>
            <p className="text-md sm:text-lg mt-10 text-justify enterFromLeftSlower">
              Hi, I'm Baik, a versatile professional who transitioned from the
              world of civil engineering to become a passionate front-end web
              developer in March 2023. With a solid foundation in
              problem-solving and an eye for detail, I bring a unique
              perspective to crafting visually appealing and user-friendly
              digital experiences.
            </p>
            <br />
            <p className="text-md sm:text-lg text-justify enterFromLeftSlower">
              Whether it's crafting intuitive user interfaces, optimizing
              website performance, or staying up-to-date with the ever-evolving
              web technologies, I'm committed to delivering exceptional digital
              solutions that make a positive impact. I'm excited to contribute
              my diverse skills to create meaningful online experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-3 mb-5 pb-8 w-fit sm:w-3/4 md:w-1/2 md:my-2  md:mt-40 enterFromRight ">
          <img
            src={profile}
            alt="my-pict"
            className="rounded-3xl mx-auto md:ml-20 w-2/4 sm:max-w-1/2 md:w-3/4 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
