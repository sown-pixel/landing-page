import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import SubscribArea from "../../common/SubscribArea";
import ServiceWrap from "./ServiceWrap";

function Service() {
  return (
    <>
      <div className="creasoft-wrap">
        <Breadcrumb pageName="Service" pageTitle="Service" />
        <ServiceWrap />
        <SubscribArea />
      </div>
    </>
  );
}

export default Service;
