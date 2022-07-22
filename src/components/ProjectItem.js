import React from "react";
import { nanoid } from "nanoid";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
       {technologies.map(technology =>
        <span key = {nanoid(3)}>{technology}</span>)}
        
      </div>
    </div>
  );
}

export default ProjectItem;
