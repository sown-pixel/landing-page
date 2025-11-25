import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ProjectDetailsWrap from "./ProjectDetailsWrap";

function ProjectDetails() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageName="Project Details" pageTitle="Project Details" />
        <ProjectDetailsWrap/>
        <SubscribArea />
      </div>
    </>
  );
}

export default ProjectDetails;
