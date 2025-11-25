import React from 'react'

function SidebarWidget() {
  return (
    <>
        <div className="sidebar-widget">
          <div className="client-box">
            <span>Client:</span>
            <h5>Argova Josen</h5>
          </div>
          <div className="client-box">
            <span>Company:</span>
            <h5>Egens Theme</h5>
          </div>
          <div className="client-box">
            <span>Location:</span>
            <h5>7 Lake Street, London</h5>
          </div>
          <div className="client-box">
            <span>Project Type:</span>
            <h5>Desktop Mockup</h5>
          </div>
          <div className="client-box">
            <span>Duration:</span>
            <h5>6 Month</h5>
          </div>
        </div>
        <div className="sidebar-widget">
          <div className="contact-info">
            <h3>Need help?</h3>
            <p>Interdum et malesuada fames ac ante tolds alli ipsum primis in faucibus. Etiam eu nibh.</p>
            <div className="cmpy-info">
              <div className="icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div className="cnt">
                <h5>Location</h5>
                <p>168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh</p>
              </div>
            </div>
            <div className="cmpy-info">
              <div className="icon">
                <i className="fas fa-phone-alt" />
              </div>
              <div className="cnt">
                <h5>Phone</h5>
                <a href="tel:05661111985">+880 566 1111 985</a>
                <a href="tel:06571111576">+880 657 1111 576</a>
              </div>
            </div>
            <div className="cmpy-info">
              <div className="icon">
                <i className="far fa-envelope" />
              </div>
              <div className="cnt">
                <h5>Email</h5>
                <a href="tell:info@example.com">info@example.com</a>
                <a href="tell:info@support.com">info@support.com</a>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default SidebarWidget