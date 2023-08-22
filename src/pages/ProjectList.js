import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="section">
      <div className="section-container">
        <h1 className="section-title">My Projects</h1>
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
        <div className="section-projects">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </section>
  );
};

export default Projects;
