import React from "react";
import PriceCard2 from "./PriceCard2";

function PriceCardWrap2() {
  return (
    <>
      <div className="priceing-plan sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className={`${"sec-title white"}`}>
              <span>Getting Start</span>
              <h2>Pricing Plan</h2>
              <p>
                Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                fringilla porttitor. on Duis a orci nunc. Suspendisse ac
                convallis sapien, quis commodo libero.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="price-table-tab layout2">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Pay Monthly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Pay Yearly
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row g-4">
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={15.99}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={99.5}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={120.99}
                    time="Per Month"
                    responsive={10}
                    ppc={5}
                    seo={10}
                    facebook={5}
                    video={2}
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row g-4">
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={90.99}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={150.5}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
                <div
                  className="col-md-6 col-lg-4 wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <PriceCard2
                  layoutClass="layout2"
                    price={456.99}
                    time="Per Year"
                    responsive={10}
                    ppc={8}
                    seo={12}
                    facebook={5}
                    video={2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCardWrap2;
