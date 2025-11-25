import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function RelatedProject() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const projectSlider= {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next-c",
        prevEl: ".swiper-button-prev-c",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
  }
  return (
    <>
      <div className="project-slider">
        <h4>Related Project</h4>
        <div className="arrow">
          <div className="swiper-button-next-c">
            <i className="bi bi-arrow-right" />
          </div>
          <div className="swiper-button-prev-c">
            <i className="bi bi-arrow-left" />
          </div>
        </div>
        <Swiper {...projectSlider} className="swiper project-slide">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="single-item">
                <div className="item-img">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/project-details`}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/project/project-1.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>Software</span>
                  <h4>Desktop Mockup</h4>
                  <div className="view-btn">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project-details`}
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-item">
                <div className="item-img">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/project-details`}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/project/project-2.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>Template</span>
                  <h4>Creative Agency</h4>
                  <div className="view-btn">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project-details`}
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-item">
                <div className="item-img">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/project-details`}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/project/project-3.jpg"
                      }
                      alt=""
                    />
                  </Link>
                </div>
                <div className="item-inner-cnt">
                  <span>App</span>
                  <h4>Mobile Crypto Wallet</h4>
                  <div className="view-btn">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/project-details`}
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default RelatedProject;
