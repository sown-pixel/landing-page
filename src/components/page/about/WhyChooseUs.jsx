import React from 'react'

function WhyChooseUs() {
  return (
    <>
      <section className="why-choose sec-mar wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="why-choose-left">
                <div className="choose-banner1">
                  <img src={process.env.PUBLIC_URL + "/img/why-1.jpg"} alt="why-choose images" />
                </div>
                <div className="choose-banner2">
                  <img src={process.env.PUBLIC_URL + "/img/why-2.jpg"} alt="why-choose images" />
                  <img src={process.env.PUBLIC_URL + "/img/why-3.jpg"} alt="why-choose images" />
                </div>
                {/* <div className="years">
                  <h5>4+</h5>
                  <span>Years</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-right">
                <div className="sec-title layout2">
                  <span>About xTech</span>
                  <h2>Powering the Future of Blockchain & DeFi</h2>
                </div>
                <div className="counter-boxes">
                  <div className="count-box">
                    <span className="counter">10</span><sup>k+</sup>
                    <h5>TPS Trading Capacity</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">50</span><sup>+</sup>
                    <h5>Active Clients</h5>
                  </div>
                  <div className="count-box">
                    <span className="counter">30</span><sup>+</sup>
                    <h5>Expert Engineers</h5>
                  </div>
                </div>
                <p>xTech is a cutting-edge cryptocurrency trading platform and blockchain infrastructure provider based in Ha Noi, Vietnam. We specialize in building sophisticated microservices architecture for next-generation DeFi operations, handling 10,000+ transactions per second across Solana, Ethereum, and multi-chain ecosystems. Our enterprise-grade infrastructure supports real-time blockchain data processing, advanced trading algorithms, and comprehensive mobile/web applications serving thousands of concurrent users worldwide. We're committed to delivering technical excellence and innovation in the fast-growing fintech and blockchain industry.</p>
                <div className="buttons-group">
                  <span>99.9% Uptime SLA</span>
                  <span>Enterprise Security</span>
                  <span>Multi-Chain Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default WhyChooseUs