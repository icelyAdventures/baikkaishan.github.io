import React from "react";
import { skills } from "./../data";
import { Link } from "react-router-dom";
// import { useParallax } from "react-scroll-parallax";

const Home = () => {
  // const parallax = useParallax({
  //   rotate: [0, 1200],
  //   speed: 100,
  // });
  return (
    <main>
      <section className="section section-center">
        <h1>Baik Kai Shan</h1>
        <h3>- Front end Developer - </h3>
        <p></p>
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
    </main>
  );
};

export default Home;
