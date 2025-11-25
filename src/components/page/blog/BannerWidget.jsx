import React from "react";

function BannerWidget() {
  return (
    <>
      <div className="sidebar-banner">
        <img src={process.env.PUBLIC_URL + "/img/widget-banner-bg.jpg"} alt="bannerImg" />
        <div className="banner-inner">
          <h3>
            Any Project <span>Call Now.</span>
            <img className="angle" src={process.env.PUBLIC_URL + "/img/arrow-angle.png"} alt="bannerImg" />
          </h3>
          <a href="tel:11231231234">+1-123-123-1234</a>
        </div>
      </div>
    </>
  );
}

export default BannerWidget;
