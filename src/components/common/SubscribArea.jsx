import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import Alert from './Alert';

function SubscribArea() {
  const formRef = useRef();
  const [alert, setAlert] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtechgroup", // Service ID (từ EmailJS)
        "template_e6fi4r5", // Template ID
        formRef.current,
        "CMNJVx40s7FUIIMUU" // Public Key
      )
      .then((result) => {
        setAlert({
          type: "success",
          message: "✓ Subscribed successfully! We'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setAlert({
          type: "error",
          message: `✗ Failed to subscribe: ${error.text || error.message}`,
        });
      });
  };
  return (
    <>
    {true && (
        <Alert
          type={"success"}
          message={"✓ Subscribed successfully! We'll get back to you soon."}
          onClose={() => setAlert(null)}
          duration={3000}
        />
      )}
     <section className="subscribe-newsletter sec-mar-top">
        <div className="container">
          <div className="news-letter-content">
            <div className="row align-items-center">
              <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="subscribe-cnt">
                  <span>Get In Touch</span>
                  <h3>Subscribe Our</h3>
                  <strong>Newsletter</strong>
                </div>
              </div>
              <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="subscribe-form">
                  <form onScroll={(e)=>e.preventDefault()} ref={formRef} onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Type Your Email" />
                    <input type="submit" defaultValue="connect" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
    </>
  )
}

export default SubscribArea