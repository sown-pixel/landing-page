import React from 'react'
import { Link } from 'react-router-dom'

function CatagoryWidget() {
    const scrollTop=()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="sidebar-widget">
        <h4>Category</h4>
        <ul className="category">
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Web Design<i className="bi bi-arrow-right" /></Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Apps Development<i className="bi bi-arrow-right" /></Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Software Development<i className="bi bi-arrow-right" /></Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Motion Graphics<i className="bi bi-arrow-right" /></Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>UI/UX Design<i className="bi bi-arrow-right" /></Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/project`} onClick={scrollTop}>Graphic Design<i className="bi bi-arrow-right" /></Link></li>
        </ul>
      </div>   
    </>
  )
}

export default CatagoryWidget