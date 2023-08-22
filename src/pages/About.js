import React from "react";
import logo from "./../logo.png";
import { technicalSkills } from "./../data";
import { FaDownload } from "react-icons/fa";
const About = () => {
  return (
    <section className="about-section">
      <h1 className="title">about me</h1>
      <div className="title-container projects">
        <div className="triangles">
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
          <div className="triangle"></div>
        </div>
      </div>
      <div className="about">
        <div className="about-info">
          <div className="about-description">
            <h2>A Front-end Developer from Malaysia</h2>

            <p>
              Hi, I'm Baik, a versatile professional who transitioned from the
              world of civil engineering to become a passionate front-end web
              developer in March 2023. With a solid foundation in
              problem-solving and an eye for detail, I bring a unique
              perspective to crafting visually appealing and user-friendly
              digital experiences.
              <br />
              <br />
              Whether it's crafting intuitive user interfaces, optimizing
              website performance, or staying up-to-date with the ever-evolving
              web technologies, I'm committed to delivering exceptional digital
              solutions that make a positive impact. I'm excited to contribute
              my diverse skills to create meaningful online experiences.
            </p>
          </div>
          <div className="about-skills">
            <h2>Technical Skills:</h2>
            <ul className="skills">
              {technicalSkills.map((item) => {
                const { id, skill } = item;
                return (
                  <li key={id}>
                    <p>{skill}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="about-img">
          <img src={logo} alt="" className="about-image" />
          <button className="btn btn-resume">
            <span>
              Resume <FaDownload />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
