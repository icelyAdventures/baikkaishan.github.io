import React from "react";
import ProjectItem from "./ProjectItem";
import Triangle from "../components/Triangle";

const Projects = () => {
  return (
    <section className="section">
      <div className="project-list">
        <div className="section-title">
          <h1 className="title projects">My Projects</h1>
          <Triangle />
        </div>
        <div className="section-container">
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
