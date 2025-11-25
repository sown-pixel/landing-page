import React from 'react'
import { Link } from 'react-router-dom'

function PostTagWidget() {
    const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="sidebar-widget">
        <h4>Post Tag</h4>
        <ul className="tag-list">
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Website</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Web Design</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Development</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Graphic Design</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Graphic</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>UI/UX Design</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Activities</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Software Design</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>3d Design</Link></li>
        </ul>
      </div>   
    </>
  )
}

export default PostTagWidget