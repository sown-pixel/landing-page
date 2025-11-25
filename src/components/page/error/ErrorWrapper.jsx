import React from 'react'
import { Link } from 'react-router-dom'

function ErrorWrapper() {
  return (
    <>
     <section className="back-to-home sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="error-wrapper">
                <img src={process.env.PUBLIC_URL + '/img/404.png'} alt="images" />
                <h3>Sorry We Can't Find That Page!</h3>
                <p>Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai quam nulla, venenatis eget dapibus ac, catali topuny wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis. </p>
                <div className="home-btn">
                  <Link to={`${process.env.PUBLIC_URL}/`} onClick={window.scrollTo({top:0,behavior:"smooth"})}><i className="bi bi-house-door" />Back To Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default ErrorWrapper