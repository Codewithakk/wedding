import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onContactButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
  <main className="gallery-frame">
    <div className="contact-frame">
      <div className="sub-header-frame">
        <div className="title-frame">
          <div className="greeting-text-parent">
            <div className="greeting-text">
              <div className="hello-and-welcome">— Hello and Welcome,</div>
            </div>
            <div className="section-header-frame">
              <div className="wedding-photgraphy" />
              <b className="plan-your-wedding-container">
                <p className="plan-your">
                  <span>Plan Your</span>
                </p>
                <p className="wedding-photography">
                  <span>Wedding Photography</span>
                </p>
                <p className="with-us">
                  <span>With Us</span>
                </p>
              </b>
            </div>
          </div>
          <div className="home-content">
            <p className="capturing-precious-moments">
              Capturing Precious Moments, One Click at a Time
            </p>
            <p className="at-saurabh-singh">
              At Saurabh Singh Photography, we believe that every moment is
              unique and deserves to be cherished forever. We specialize in
              capturing the essence of your special occasions, turning
              fleeting moments into timeless memories.
            </p>
          </div>
          <button className="btn" onClick={onContactButtonClick}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="copybox">
      <img
        className="dsc09607-copy-1"
        loading="lazy"
        alt=""
        src="/dsc09607--copy-1@2x.png"
      />
    </div>
  </main>
  );
};

export default Home;
