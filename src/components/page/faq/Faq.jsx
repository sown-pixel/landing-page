import React from "react";
import AnimateLine from "../../common/AnimateLine";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import FaqWrap from "./FaqWrap";

function Faq() {
  return (
    <>
    <div className="creasoft-wrap">
      <AnimateLine />
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <FaqWrap/>
      <SubscribArea />
    </div>
    </>
  );
}

export default Faq;
