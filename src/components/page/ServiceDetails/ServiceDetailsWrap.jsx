import React from "react";
import { Link } from "react-router-dom";
import ServiceDetailsItems from "./ServiceDetailsItems";

function ServiceDetailsWrap() {
  const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="service-details sec-mar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <img src={process.env.PUBLIC_URL + '/img/blog/blog-thumnail.jpg'} alt="images service" />
                <h3>
                  <i>
                    <img
                      src={process.env.PUBLIC_URL + '/img/icons/service-details-icon.png'}
                      alt="service icon images"
                    />
                  </i>
                  Software Development
                </h3>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc.
                  In eu ipsum fringilla, accumsan purus vel, pellentesque risus.
                  Vivamus vehicula nlpurus at eros interdum, in dignissim nulla
                  vestibulum. Nunc sit amet finibus felis, ut egestas lacus.
                  Sedanpellentesque quis magna eu vestibulum. Ut sed commodo
                  neque. Morbi erat nisi, vehicula quis faucibus il
                </p>
                <p>
                  ut, hendrerit vel tortor. In pharetra lectus luctus ornare
                  sollicitudin. Pellentesque at neque nec justo sokal porttitor
                  egestas nec eget ex.Etiam suscipit neque elit, hendrerit
                  laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed
                  laoreet ex. Sed nisl ligula, euismod vel justo scelerisque,
                </p>
                <p>
                  vestibulum ultricies tellus. volv Pellentesque vel turpis
                  vitae urna tincidunt hendrerit at ut est. Sed eget feugiat
                  felis. Integer sed ornare sem, eget porttitor nisi. Nunc erat
                  sapien, porta laoreet gravida ac,{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-widget">
                <h4>Category</h4>
                <ul className="category">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Web Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Apps Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Software Development
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Motion Graphics
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      UI/UX Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>
                      Graphic Design
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-banner">
                <img src={process.env.PUBLIC_URL + '/img/widget-banner-bg.jpg'} alt="Banner images" />
                <div className="banner-inner">
                  <h3>
                    Any Project <span>Call Now.</span>
                    <img
                      className="angle"
                      src={process.env.PUBLIC_URL + "/img/arrow-angle.png"}
                      alt=""
                    />
                  </h3>
                  <a href="tel:11231231234">+1-123-123-1234</a>
                </div>
              </div>
            </div>
          </div>
          <ServiceDetailsItems />
        </div>
      </div>
    </>
  );
}

export default ServiceDetailsWrap;
