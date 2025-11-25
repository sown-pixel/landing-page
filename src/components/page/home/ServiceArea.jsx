import React from "react";
import { Link } from "react-router-dom";
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import ServiceCard from "../service/ServiceCard";
SwiperCore.use([Navigation, Autoplay]);

function ServiceArea(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const serviceSlider = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <section className={`${"services-area sec-mar"} ${props.layoutClass}`}>
        <div className="container">
          <div
            className="title-wrap wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className={`${"sec-title"} ${props.white}`}>
              <span>Our Solutions</span>
              <h2>Services</h2>
              <p>
                We deliver comprehensive blockchain solutions tailored to your
                business needs. From smart contract development to full
                decentralized applications, xTech ensures security, scalability,
                and innovation in every project.
              </p>
            </div>
          </div>
          <Swiper {...serviceSlider} className="swiper services-slider">
            <div className="swiper-wrapper">
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={1}
                  image="/img/icons/service-icon-1.png"
                  title="Smart Contract Development"
                  details="Develop secure ERC-20, ERC-721, and custom smart contracts for blockchain applications."
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={2}
                  image="/img/icons/service-icon-2.png"
                  title="DeFi Protocol Development"
                  details="Build decentralized finance platforms with staking, yield farming, and liquidity solutions."
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={3}
                  image="/img/icons/service-icon-3.png"
                  title="NFT Marketplace Development"
                  details="Create scalable NFT marketplaces with advanced features and multi-chain support."
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={4}
                  image="/img/icons/service-icon-4.png"
                  title="Web3 Integration"
                  details="Integrate blockchain technology with existing systems for seamless decentralized applications."
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={5}
                  image="/img/icons/service-icon-5.png"
                  title="Blockchain Consulting"
                  details="Expert guidance on blockchain architecture, tokenomics, and blockchain strategy."
                />
              </SwiperSlide>
              <SwiperSlide
                className="swiper-slide wow animate fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <ServiceCard
                  serviceNumber={6}
                  image="/img/icons/service-icon-6.png"
                  title="DAO Development"
                  details="Build decentralized autonomous organizations with governance tokens and voting systems."
                />
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>
    </>
  );
}

export default ServiceArea;
