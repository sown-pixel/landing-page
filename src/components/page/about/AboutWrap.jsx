import React from "react";
import AnimateLine from "../../common/AnimateLine";
import AboutArea from "../home/AboutArea";
import FeaturesArea from "../home/FeaturesArea";
import LatesPost from "../home/LatesPost";
import Testimonial from "../home/Testimonial";
import TeamWrap from "../team/TeamWrap";
import HistoryArea from "./HistoryArea";
import WhyChooseUs from "./WhyChooseUs";

function AboutWrap() {
  return (
    <>
      <div className="creasoft-wrap">
        <AnimateLine />
        <WhyChooseUs />
        <AboutArea image="/img/logo-dark.svg"/>
        <FeaturesArea/>
        {/* <HistoryArea/> */}
        {/* <Testimonial/> */}
        {/* <TeamWrap/> */}
        {/* <LatesPost/> */}
      </div>
    </>
  );
}

export default AboutWrap;
