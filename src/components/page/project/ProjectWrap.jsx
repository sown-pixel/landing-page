import React from "react";
import ProjectCardFilter from "./ProjectCardFilter";

function ProjectWrap(props) {
  return (
    <>
      <div className="project-area sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Case Study</span>
              <h2>Project</h2>
              <p>
                Explore our successful blockchain implementations including DeFi
                protocols, NFT marketplaces, smart contracts, and Web3
                infrastructure. Each project demonstrates our expertise in
                building secure and scalable solutions.
              </p>
            </div>
          </div>
          <ProjectCardFilter />
        </div>
      </div>
    </>
  );
}

export default ProjectWrap;
