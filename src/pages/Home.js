import React from "react";
import { skills } from "./../data";
import { Link } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import { useParallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <section className="section home">
      {/* <Sidebar /> */}
      <h1>Baik Kai Shan</h1>
      <h3>- Front end Developer - </h3>
      <ul className="skills-container">
        {skills.map((skillIcon) => {
          const { id, text, icon } = skillIcon;
          return (
            <li key={id}>
              {text}
              {icon}
            </li>
          );
        })}
      </ul>
      <div className="btn-container">
        <button className="btn">
          <Link to="/about">About me</Link>
        </button>
        <button className="btn">
          <Link to="/contact">Contact me</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
