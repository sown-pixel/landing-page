import React from 'react'
import { Link } from 'react-router-dom'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  
  Autoplay,
  Navigation,
  EffectFade,
  Pagination
} from "swiper";
SwiperCore.use([Navigation, Autoplay, EffectFade,Pagination,]);
function Testimonial() {
    const testimonialSlider = {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        duration: 5000,
        speed: 1000,
        autoplay:{
          delay: 3500,
          isableOnInteraction: true,
        },
        spaceBetween: 30,
        slideToClickedSlide: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1400: {
                slidesPerView: 2,
            },
            1800: {
                slidesPerView: 2,
            }
        }
    }
  return (
    <>
      <section className="testimonial-area">
        <div className="container-fluid p-0">
          <div className="title-wrap">
            <div className="sec-title white">
              <span>Testimonial</span>
              <h2>Client Say About Us</h2>
              <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
            </div>
          </div>
          <Swiper {...testimonialSlider} className="swiper testimonial-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Martha Maldonado</h5>
                  <span>Executive Chairman</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Jesmin Korac</h5>
                  <span>Director</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + "/img/reivewer-1.jpg"} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Martha Maldonado</h5>
                  <span>Executive Chairman</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Jesmin korac</h5>
                  <span>Director</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer-1.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="single-testimonial">
                  <div className="quote">
                    <i className="fas fa-quote-right" />
                  </div>
                  <h5>Martha Maldonado</h5>
                  <span>Executive Chairman</span>
                  <div className="stars">
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                    <Link to={"#"}><i className="fas fa-star" /></Link>
                  </div>
                  <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. ani aptent taciti sociosqu ad litora torquent per conubia nostra, per sonic himenaeos. Praesent nec neque at dolor venenatis consectetur europ Donec lacinia placerat felis non aliquam.</p>
                  <div className="reviewer">
                    <img src={process.env.PUBLIC_URL + '/img/reivewer.jpg'} alt="testimonial-img" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </section>  
    </>
  )
}

export default Testimonial