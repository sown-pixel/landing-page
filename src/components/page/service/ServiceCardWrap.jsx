import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceCardWrap() {
  return (
    <>
      <div className="services-grid sec-mar">
        <div className="container">
          <div className="title-wrap">
            <div className="sec-title">
              <span>Blockchain Expertise</span>
              <h2>Our Services</h2>
              <p>
                Comprehensive Web3 and blockchain solutions tailored for modern enterprises. From smart contract development to full decentralized applications.
              </p>
            </div>
          </div>
          <div className="row g-4">
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={1} image="/img/icons/service-icon-1.png" title="Smart Contract Development" details="Develop secure ERC-20, ERC-721, and custom smart contracts for blockchain applications."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={2} image="/img/icons/service-icon-2.png" title="DeFi Protocol Development" details="Build decentralized finance platforms with staking, yield farming, and liquidity solutions."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={3}  image="/img/icons/service-icon-3.png" title="NFT Marketplace Development" details="Create scalable NFT marketplaces with advanced features and multi-chain support."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={4} image="/img/icons/service-icon-4.png" title="Web3 Integration" details="Integrate blockchain technology with existing systems for seamless decentralized applications."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={5} image="/img/icons/service-icon-5.png" title="Blockchain Consulting" details="Expert guidance on blockchain architecture, tokenomics, and blockchain strategy."/>
          </div>
          <div class="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <ServiceCard serviceNumber={6} image="/img/icons/service-icon-6.png" title="DAO Development" details="Build decentralized autonomous organizations with governance tokens and voting systems."/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCardWrap;
