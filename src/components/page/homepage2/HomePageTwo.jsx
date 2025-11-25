import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import SubscribArea from "../../common/SubscribArea";
import AboutArea from "../home/AboutArea";
import FeaturesArea from "../home/FeaturesArea";
import PartnarArea from "../home/PartnarArea";
import ServiceArea from "../home/ServiceArea";
import Testimonial from "../home/Testimonial";
import ProjectWrap2 from "../project/ProjectWrap2";
import PriceCardWrap2 from "../service/PriceCardWrap2";
import TeamWrap2 from "../team/TeamWrap2";
import Hero2 from "./Hero2";
import LatesPost2 from "./LatesPost2";

function HomePageTwo() {

  return (
    <>
      <Header />
      <div className="creasoft-wrap layout2">
        <Hero2 />
        <ServiceArea layoutClass="layout2" white="white"/>
        <AboutArea layoutClass="layout2" white="white" image="/img/logo.svg"/>
        <FeaturesArea/>
        <ProjectWrap2 white="white"/>
        <PartnarArea/>
        <PriceCardWrap2/>
        <Testimonial/>
        <TeamWrap2/>
        <LatesPost2/>
        <SubscribArea />
        <Footer />
      </div>
    </>
  );
}

export default HomePageTwo;
