import React from 'react'
import { Link } from 'react-router-dom'
import "swiper/css/autoplay";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

function ProjectDetailsContent() {
    const projectSlider ={
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next-c",
            prevEl: ".swiper-button-prev-c",
        } 
    }
  return (
    <>
     <div className="project-details-content">
        <div className="project-thumb">
          <img src={process.env.PUBLIC_URL + '/img/project/thumbnail-project.jpg'} alt="mages" />
          <div className="tag">
            <Link to={`${process.env.PUBLIC_URL}/project-details`} onClick={window.scrollTo({top:0,behavior:"smooth"})}>Software</Link>
          </div>
        </div>
        <h3>Desktop Mockup</h3>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi, vehicula quis faucibus il ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin. Pellentesque at neque nec justo sokal porttitor egestas nec eget ex.Etiam suscipit neque elit, hendrerit laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo scelerisque, vestibulum ultricies tellus. volv Pellentesque vel turpis vitae urna tincidunt hendrerit at ut est. Sed eget feugiat felis. Integer sed ornare sem, eget porttitor nisi. Nunc erat sapien, porta laoreet gravida ac, dictum eu tortor. Nulla faucibus leoren rhoncus, gravida ligula a, ultrices enim. Proin lacinia malesuada finibus.</p>
        <div className="clinet-need">
          <h4>Client Needs</h4>
          <p>The style and theme should match the current website http://www.egenslab.com but be a little more punchy. Clean and crisp is preference.</p>
          <p>Our landing page will have more text than other landing pages (we have already written this out at http://egenslab.com) as our client's need education to purchase this new service.</p>
          <p>The landing page should start with punchy headlines and less text and as you scroll down it will become more text heavy for those wanting to learn more before clicking to complete the contact form.</p>
        </div>
        <div className="working-process">
          <h4>Working Process</h4>
          <Swiper {...projectSlider} className="swiper work-process-slide">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="work-thumb">
                  <img src={process.env.PUBLIC_URL + "/img/project/work-thumb-slide.jpg"} alt="mages" />
                  <div className="label">
                    <span>01. Brainstorming</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="work-thumb">
                  <img src={process.env.PUBLIC_URL + '/img/project/work-thumb-slide-1.jpg'} alt="mages" />
                  <div className="label">
                    <span>02. Drawing</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="arrow">
              <div className="swiper-button-next-c"><i className="bi bi-arrow-right" /></div>
              <div className="swiper-button-prev-c"><i className="bi bi-arrow-left" /></div>
            </div>
          </Swiper>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nis</p>
        </div>
        <div className="check-lunch">
          <h4>Check &amp; Launch</h4>
          <div className="row">
            <div className="col-lg-6">
              <ul className="check">
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Aenean vitae pharetra leo. Aliquam pri.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>In aliquet, quam vitae blandit temporg.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Aenean volutpat enim vitae tincidunta.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Felis at venenatis porttitor, nunc arcua.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Maximus felis quam vitae tortor phase.</li>
                <li><i><img src={process.env.PUBLIC_URL + '/img/icons/check.svg'} alt="mages" /></i>Nulla vulputate urna quis ex pellentes.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <p>Interdum et malesuada fames ac ante ipsum tobal primis in faucibus. Etiam eu nibh elementum, tolda accumsan ona In eu ipsum fringilla, accumsan pur neque ac, aliquet nunc. In eu ipsum fringilla, wolan accumsan purus vel, pellentesque risus. Vivamusa
                purus at eros interdum, in dignissim nulla Ut sedal vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan commodo neque. Morbi erat niswole pellentesque quis magna eu vestibulum. </p>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default ProjectDetailsContent