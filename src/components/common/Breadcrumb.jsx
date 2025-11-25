import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
function Breadcrumb(props) {
 const [open, setOpen]= useState(false);
  return (
    <>
     <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrapper">
                <div className="breadcrumb-cnt">
                  <h1>{props.pageTitle}</h1>
                  <span><Link to={`${process.env.PUBLIC_URL}/`} >Home</Link><i className="bi bi-arrow-right" />{props.pageName}</span>
                  {/* <div className="breadcrumb-video">
                    <img src={process.env.PUBLIC_URL + '/img/breadcrumb-video.jpg'} alt="breadcrumbImg" />
                    <div className="video-inner">
                      <div className="video-popup" onClick={()=>setOpen(true)}><i className="fas fa-play" /></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      <React.Fragment>
        <ModalVideo
        channel={"youtube"}
        videoId="T7SIxJOoQd8"
        isOpen={open}
        onClose={()=>setOpen(false)}
        >

        </ModalVideo>
      </React.Fragment>
    </>
  )
}

export default Breadcrumb