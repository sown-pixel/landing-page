import React, { useRef, useState } from "react";
import jobsData from "../../../data/jobsData";
import JobCard from "./JobCard";
import emailjs from "@emailjs/browser";
import Alert from "../../common/Alert";

function ContactWrapper() {
  const formRef = useRef();
  const [alert, setAlert] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xtechgroup", // Service ID (từ EmailJS)
        "template_oueo2ln", // Template ID
        formRef.current,
        "CMNJVx40s7FUIIMUU" // Public Key
      )
      .then((result) => {
        setAlert({
          type: "success",
          message: "✓ Message sent successfully! We'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        setAlert({
          type: "error",
          message: `✗ Failed to send message: ${error.text || error.message}`,
        });
      });
  };

  return (
    <>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
          duration={5000}
        />
      )}
      <section className="careers-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sec-title text-center">
                <span>Join Our Team</span>
                <h2>We're Hiring!</h2>
                <p>
                  Help us build the future of blockchain technology. xTech is
                  looking for talented developers and engineers to join our
                  fast-growing startup.
                </p>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="row g-4 mt-5">
            {jobsData.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                salary={job.salary}
                location={job.location}
                requirements={job.requirements}
              />
            ))}

            {/* Benefits Card */}
            <div className="col-md-6 col-lg-4">
              <div className="job-card benefits-card">
                <div className="job-header">
                  <h3>Why Join xTech?</h3>
                </div>
                <div className="job-body">
                  <ul>
                    <li>🚀 Fast-growing blockchain startup</li>
                    <li>
                      💰 Competitive & unlimited salary based on capability
                    </li>
                    <li>🌍 International opportunity (Japan onsite)</li>
                    <li>⏰ Flexible working hours & work results-oriented</li>
                    <li>🎯 Work on strategic blockchain products</li>
                    <li>👥 Young, creative & dynamic team</li>
                  </ul>
                </div>
                <a href="tel:0848868598" className="job-apply-btn contact-btn">
                  <div className="cmn-btn">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    Contact: 0848868598
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5">
              <div className="contact-left">
                <div className="sec-title layout2">
                  <span>Get in touch</span>
                  <h2>Contact us if you have more questions.</h2>
                </div>
                <ul className="social-follow">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.pinterest.com/"
                    >
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h3>Location</h3>
                      <p>
                        5th Floor, New Skyline Building, Van Quan, Ha Dong, Ha
                        Noi, Vietnam
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <h3>Phone</h3>
                      <a href="tel:0848868598">+84 848868598</a>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <h3>Email</h3>
                      <a href="tell:admin@xtechgroup.io">admin@xtechgroup.io</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.400838435791!2d105.78735837595426!3d20.976563489567976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad09637ce8c7%3A0xbc9c2aa740e499a5!2sNew%20Skyline%20Complex%20Building!5e0!3m2!1sen!2s!4v1764053019122!5m2!1sen!2s"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="getin-touch">
            <div className="row">
              <div className=" col-lg-12">
                <div
                  className="contact-form wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <h3>Have Any Questions</h3>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          cols={30}
                          rows={10}
                          placeholder="Your message"
                          defaultValue={""}
                        />
                        <input type="submit" defaultValue="Send Message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactWrapper;
