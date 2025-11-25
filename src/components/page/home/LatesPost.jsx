import React from 'react'
import { Link } from 'react-router-dom'

function LatesPost() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="title-wrap -6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="sec-title">
              <span>All Blog</span>
              <h2>Latest Post</h2>
              <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-blog">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + '/img/blog/blog-1.jpg'} alt="latest-post-img" /></Link>
                  <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>UI/UX</Link>
                  </div>
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Admin</Link>
                    <Link to={"#"}>22.02.2022</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Quisque malesuada sapien and Donec sed nunc.</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-blog">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + '/img/blog/blog-2.jpg'} alt="latest-post-img" /></Link>
                  <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Software</Link>
                  </div>
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Admin</Link>
                    <Link to={"#"}>22.02.2022</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Suspendisse pretium magna qu nisl egestas porttitor.</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow animated fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-blog">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + "/img/blog/blog-3.jpg"} alt="latest-post-img" /></Link>
                  <div className="tag">
                    <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Dashbord</Link>
                  </div>
                </div>
                <div className="blog-inner">
                  <div className="author-date">
                    <Link to={"#"}>By, Admin</Link>
                    <Link to={"#"}>22.02.2022</Link>
                  </div>
                  <h4><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>In a augue sit amet erat Suspel eleifend suscipit issen.</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default LatesPost