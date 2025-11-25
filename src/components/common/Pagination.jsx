import React from 'react'
import { Link } from 'react-router-dom'

function Pagination() {
    const scrollTop =()=>window.scrollTo({top:0,behavior:"smooth"})
  return (
    <>
     <div className="load-more">
        <ul className="paginations">
          <li><Link to={"#"} onClick={scrollTop}><i className="fas fa-long-arrow-alt-left" /></Link></li>
          <li><Link to={"#"} onClick={scrollTop}>01</Link></li>
          <li className="active"><Link to={"#"} onClick={scrollTop}>02</Link></li>
          <li><Link to={"#"} onClick={scrollTop}>03</Link></li>
          <li><Link to={"#"} onClick={scrollTop}>04</Link></li>
          <li><Link to={"#"} onClick={scrollTop}><i className="fas fa-long-arrow-alt-right" /></Link></li>
        </ul>
      </div>   
    </>
  )
}

export default Pagination