import './FrameComponent.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const FrameComponent = () => {
  return (
    <section className="mask-group-frame">
      <div className="frame-root">
        <footer className="contact-info-frame1">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <div className="true-l-event-wrapper">
                <div className="true-l-event">
                  <div className="wedding-ring-rectangle">
                    <div className="social-media-frames">
                      {/* Add NavLink to social media icons */}
                      <NavLink to="/" className="nav-link">
                        <img
                          className="wedding-ring-1-icon"
                          loading="lazy"
                          alt=""
                          src="/wedding-ring-11@2x.png"
                        />
                        <h1 className="truel-ve">
                          <span>True</span>
                          <span className="l-ve">L ve</span>
                        </h1>
                      </NavLink>
                    </div>
                    <div className="social-media-icons">
                      <div className="instagram-frame">
                        <NavLink to="/facebook" className="nav-link">
                          <img
                            className="facebook-app-symbol"
                            loading="lazy"
                            alt=""
                            src="/facebook-app-symbol@2x.png"
                          />
                        </NavLink>
                        <NavLink to="https://www.instagram.com/saurabh_singh_photographer/" className="nav-link">
                          <img
                            className="instagram-icon"
                            loading="lazy"
                            alt=""
                            src="/instagram@2x.png"
                          />
                        </NavLink>
                        <NavLink to="https://www.youtube.com/@saurabhsinghphotographer3633" className="nav-link">
                          <img
                            className="youtube-icon"
                            loading="lazy"
                            alt=""
                            src="/youtube@2x.png"
                          />
                        </NavLink>
                        <NavLink to="https://www.threads.net/@saurabh_singh_photographer" className="nav-link">
                          <img
                            className="twitter-icon"
                            loading="lazy"
                            alt=""
                            src="/twitter@2x.png"
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="copyright-message">
                    <div className="social-media-logos">
                      <b className="menu">Menu</b>
                      <div className="frame-links">
                        <NavLink to="/" className="home2">Home</NavLink>
                        <NavLink to="/about" className="about-us2">About us</NavLink>
                        <NavLink to="/services" className="services1">Services</NavLink>
                        <NavLink to="/gallery" className="gallery2">Gallery</NavLink>
                        <NavLink to="/contact" className="contact2">Contact</NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright-2024">
                Copyright © 2024, All Right Reserved.
              </div>
            </div>
            <div className="menu-frame">
              <div className="services-box">
                <div className="wedding-photography-label">
                  <b className="services2">Services</b>
                </div>
                <NavLink to="/wedding-photography" className="wedding-photography1">Wedding Photography</NavLink>
                <NavLink to="/pre-wedding" className="pre-wedding">Pre Wedding</NavLink>
                <NavLink to="/birthday-shoot" className="birthday-shoot">Birthday Shoot</NavLink>
                <NavLink to="/baby-shoot" className="baby-shoot">Baby Shoot</NavLink>
                <NavLink to="/product-shoot" className="product-shoot">Product Shoot</NavLink>
              </div>
            </div>
          </div>
        </footer>
        <div className="divider-line" />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.40914308592633!2d80.9953758975967!3d26.88615252532426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfea7db64a26d%3A0xcbd7f8b654513c27!2sHush%20Puppies%20Store!5e0!3m2!1sen!2sin!4v1709621243555!5m2!1sen!2sin"
        width="600"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default FrameComponent;
