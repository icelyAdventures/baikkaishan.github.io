import React from "react";
import nyan from "./../nyan.webp";

const ProjectItem = () => {
  return (
    <article className="project">
      <div className="img-container">
        <img src={nyan} alt="nyan" />
      </div>
      <div className="description">
        <h3>Project title</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          obcaecati facilis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda, obcaecati facilis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda, obcaecati facilis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          obcaecati facilis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda, obcaecati facilis.
        </p>
        <ul>
          <li>HTML</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
        <div className="btn-container">
          <button className="btn btn-code">&lt; code &gt;</button>
          <button className="btn btn-demo">demo</button>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
