import React from 'react'
import { Link } from 'react-router-dom'

function HeroArea() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <section className="hero-area">
        <div className="ken-burns-slideshow">
          <img src={process.env.PUBLIC_URL + "/img/hero-banner.jpg"} alt="HeroBanner" />
        </div>
        <div className="verticale-social">
          <ul className="vertical-media">
            <li><a href="https://www.facebook.com/XTechGroupOfficial">Facebook</a></li>
            <li><a href="http://t.me/heisenberg7sf">Telegram</a></li>
            <li><a href="https://zalo.me/0848868598">Zalo</a></li>
          </ul>
        </div>
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-content">
                  <h1>Leading Blockchain Innovation<span>For Web3 Future</span></h1>
                  <p>xTech provides enterprise-grade blockchain solutions including DeFi protocols, NFT marketplaces, smart contracts, and Web3 infrastructure. Secure, scalable, and transparent technology for the decentralized economy.</p>
                  <div className="buttons">
                    <div className="cmn-btn">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/about`} onClick={scrollTop}>Learn More</Link>
                    </div>
                    <div className="cmn-btn layout-two">
                      <div className="line-1" />
                      <div className="line-2" />
                      <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>View Projects</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default HeroArea