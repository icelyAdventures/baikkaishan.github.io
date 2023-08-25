import React from "react";

const ProjectItem = ({
  image,
  title,
  info,
  skill1,
  skill2,
  skill3,
  skill4,
  codeUrl,
  demoUrl,
}) => {
  // const { id, image, title, info, skill1, skill2, skill3, skill4 } =
  //   singleProject;
  return (
    <article className="project">
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p className="desc">{info}</p>
        <ul>
          <li>{skill1}</li>
          <li>{skill2}</li>
          <li>{skill3}</li>
          <li>{skill4}</li>
        </ul>
        <div className="btn-container">
          <a href={codeUrl} className="btn btn-code">
            &lt; code &gt;
          </a>
          <a href={demoUrl} className="btn btn-demo">
            demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
