import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <footer className={props.footerAddclass} >
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link scrollTo={scrollTop} to={"/"}>
                      <img src={process.env.PUBLIC_URL +"/img/logo.svg"} alt="FooterImg" />
                    </Link>
                  </div>
                  <p>
                    Cutting-edge blockchain infrastructure and cryptocurrency trading platform 
                    powering next-generation DeFi operations with 10,000+ TPS capacity.
                  </p>
                  <ul className="social-media-icons">
                    <li>
                      <a href="https://www.facebook.com/XTechGroupOfficial">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="http://t.me/heisenberg7sf">
                        <i className="fab fa-telegram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://zalo.me/0848868598">
                        <i class="fas fa-phone"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Our Services</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Smart Contract Development</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>DeFi Protocol Development</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>NFT Marketplace</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Web3 Integration</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Blockchain Consulting</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>DAO Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Quick Links</h4>
                  <ul className="footer-menu">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>About Us</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Services</Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Project</Link>
                    </li>
                    {/* <li>
                      <Link to={`${process.env.PUBLIC_URL}/blog`} onClick={scrollTop}>Blog</Link>
                    </li> */}
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Career</Link>
                    </li>
                    {/* <li>
                      <Link to={`${process.env.PUBLIC_URL}/service`} onClick={scrollTop}>Pricing Plan</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <div className="footer-widget">
                  <h4>Contacts</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="phone">
                      <a href="tel:+84848868598">+84 848 868 598</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="email">
                      <a href="mailto:admin@xtechgroup.io">admin@xtechgroup.io</a>
                    </div>
                  </div>
                  <div className="address">
                    <div className="address-icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <p>5th Floor, New Skyline Building, Van Quan, Ha Dong, Ha Noi, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                <div className="copy-txt">
                  <span>
                    Copyright 2022 <b>xTech</b> | All rights reserved.{" "}
                    {/* <Link to={"#"}>Egens Lab</Link> */}
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
