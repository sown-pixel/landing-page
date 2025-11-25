import React from 'react'
import CountUp from "react-countup";
function FeaturesArea() {
  
  return (
    <>
     <section className="features-area">
        <div className="container">
          <div className="title-wrap  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="sec-title white">
              <span>Case Study</span>
              <h2>Features</h2>
              <p>Our blockchain solutions deliver enterprise-grade security, scalability, and transparency. Built on proven technologies with 24/7 support and continuous optimization for maximum performance.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-1.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={150} delay={3} duration={5}  /> <sup>+</sup>
                  <h4>Project Completed</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-2.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={2150} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Satisfied Clients</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + "/img/icons/feature-icon-3.png"} alt="Feature-img" />
                  </div>
                  <CountUp end={120} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Expert Teams</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <div className="feature-inner">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/img/icons/feature-icon-1.png'} alt="Feature-img" />
                  </div>
                  <CountUp end={50} delay={3} duration={5} /> <sup>+</sup>
                  <h4>Win Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default FeaturesArea