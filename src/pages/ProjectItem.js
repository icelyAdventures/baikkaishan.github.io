import React from "react";
import nyan from "./../nyan.webp";

const ProjectItem = () => {
  return (
    <article className="project">
      <div className="img-container">
        <img src={nyan} alt="project-image" />
      </div>
      <div className="description">
        <h3>Project title</h3>
        <p>Project description</p>
        <ul>
          <li>HTML</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
        <div className="btn-container">
          <button className="btn">code</button>
          <button className="btn">demo</button>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
