import React from "react";
import logo from "./../profile.jpg";
import { technicalSkills } from "./../data";
import { FaDownload, FaSearchPlus } from "react-icons/fa";
import Triangle from "../components/Triangle";
import Resume from "../components/resume.pdf";
// import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const About = () => {
  // const { openModal } = useGlobalContext();
  return (
    <section className="section">
      <div className="about">
        <div className="section-title">
          <h1 className="title">about me</h1>
          <Triangle />
        </div>
        <div className="section-container">
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
                website performance, or staying up-to-date with the
                ever-evolving web technologies, I'm committed to delivering
                exceptional digital solutions that make a positive impact. I'm
                excited to contribute my diverse skills to create meaningful
                online experiences.
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
            <Link
              to={Resume}
              download="BKS Resume 2023 - WebDev"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-resume download">
                Resume <FaDownload />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
