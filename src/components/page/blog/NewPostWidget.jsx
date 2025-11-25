import React from 'react'
import { Link } from 'react-router-dom'

function NewPostWidget() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="sidebar-widget">
        <h4>Newest Post</h4>
        <div className="recent-post">
          <div className="recent-thumb">
            <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + "/img/blog/blog-tiny-1.jpg"}  alt="catagoryImg" /></Link>
          </div>
          <div className="recent-post-cnt">
            <span>11.12.22</span>
            <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Grant Distributions Conti nu to Incr Ease.</Link></h5>
          </div>
        </div>
        <div className="recent-post">
          <div className="recent-thumb">
            <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + '/img/blog/blog-tiny-2.jpg'}  alt="catagoryImg" /></Link>
          </div>
          <div className="recent-post-cnt">
            <span>30.10.2022</span>
            <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Distributions Conti nu to grant Incr Ease.</Link></h5>
          </div>
        </div>
        <div className="recent-post">
          <div className="recent-thumb">
            <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={process.env.PUBLIC_URL + '/img/blog/blog-tiny-3.jpg'}  alt="catagoryImg" /></Link>
          </div>
          <div className="recent-post-cnt">
            <span>20.08.2022</span>
            <h5><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Conti nu to Incr Ease malesuada sapien sed.</Link></h5>
          </div>
        </div>
      </div>   
    </>
  )
}

export default NewPostWidget