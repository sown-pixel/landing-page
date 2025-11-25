import React from 'react'
import { Link } from 'react-router-dom'

function SingleBlog(props) {
    const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="col-md-6">
        <div className="single-blog">
          <div className="blog-thumb">
            <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}><img src={`${process.env.PUBLIC_URL} ${props.image}`  } alt="images" /></Link>
            <div className="tag">
              <Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>{props.title}</Link>
            </div>
          </div>
          <div className="blog-inner">
            <div className="author-date">
              <Link to={"#"}>By, Admin</Link>
              <Link to={"#"}>{props.date}</Link>
            </div>
            <h4><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>{props.details}</Link></h4>
          </div>
        </div>
      </div>   
    </>
  )
}

export default SingleBlog