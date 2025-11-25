import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import TeamWrap from "./TeamWrap";

function Team() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <Breadcrumb pageTitle="Meet Our Team" pageName="team" />
        <TeamWrap />
        <SubscribArea />
      </div>
    </>
  );
}

export default Team;
