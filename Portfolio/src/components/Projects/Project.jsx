import React from "react";
import "./Project.css";
import { projectData } from "../../assets/assets";
const Project = () => {
  return (
    <div className="project" id="projects">
      <h1>
        Projects {"("} {" )"}
      </h1>
      <div className="project-list">
        {projectData.map((item, index) => (
          <div key={index} className="project-card">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
