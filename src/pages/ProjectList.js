import React from "react";
import ProjectItem from "./ProjectItem";
import Triangle from "../components/Triangle";
import { singleProject } from "./../data";

const Projects = () => {
  return (
    <section className="section">
      <div className="project-list">
        <div className="section-title">
          <h1 className="title projects">My Projects</h1>
          <Triangle />
        </div>
        <div className="section-container">
          {singleProject.map((project) => {
            return <ProjectItem key={project.id} {...project} />;
          })}
          {/* <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem /> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
