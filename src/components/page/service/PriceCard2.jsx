import React from 'react'
import { Link } from 'react-router-dom'

function PriceCard2(props) {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
      <div className="price-box layout2">
        <h3>Small Business</h3>
        <span>Single Business</span>
        <strong>${props.price}<sub>/{props.time}</sub></strong>
        <ul className="item-list">
          <li><i className="bi bi-check" />{props.responsive} Pages Responsive Website</li>
          <li><i className="bi bi-check" />{props.ppc}PPC Campaigns</li>
          <li><i className="bi bi-check" />{props.seo} SEO Keyword</li>
          <li><i className="bi bi-check" />{props.facebook} Facebook Camplaigns</li>
          <li><i className="bi bi-check" />{props.video} Video Camplaigns</li>
        </ul>
        <div className="price-btn">
          <div className="line-1" />
          <div className="line-2" />
          <Link to={`${process.env.PUBLIC_URL}/contact`} onClick={scrollTop}>Pay Now</Link>
        </div>
      </div>   
    </>
  )
}

export default PriceCard2