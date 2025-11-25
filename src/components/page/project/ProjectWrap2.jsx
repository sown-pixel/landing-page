import React from "react";
import ProjectCardFilter from "./ProjectCardFilter";

function ProjectWrap2() {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>Case Study</span>
              <h2>Project</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <ProjectCardFilter/>
        </div>
      </div>
    </>
  );
}

export default ProjectWrap2;
