import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/service");
  }, [navigate]);

  return (
    <div className="about">
      <div className="about-child" />
      <div className="about-item" />
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="about-us-wrapper">
          <h1 className="about-us">About Us</h1>
        </div>
        <div className="welcome-to-saurabh-container">
          <p className="welcome-to-saurabh-singh-photo">
            <span className="welcome-to">{`Welcome to `}</span>
            <span className="saurabh-singh-photography">
              Saurabh Singh Photography
            </span>
            <span>
              , where we turn moments into memories that last a lifetime.
            </span>
          </p>
          <p className="we-understand-that">
            We understand that your wedding day is one of the most special
            moments of your life. Our team of dedicated photographers
            specializes in capturing the essence and beauty of your love story
            through the art of photography.
          </p>
          <p className="p"></p>
          <p className="led-by-saurabh">
            Led by Saurabh Singh, an acclaimed photographer known for his unique
            style and creative vision, we strive to provide you with the best
            photography experience possible. With years of experience in the
            industry, we have honed our craft to ensure that every moment, every
            emotion, and every detail of your wedding day is beautifully
            documented.
          </p>
          <p className="p1"></p>
          <p className="we-believe-in">
            We believe in the power of storytelling through images. Our goal is
            to not only capture stunning photographs but also to tell the story
            of your love in a way that is authentic and timeless. From the
            intimate moments shared between you and your partner to the joyous
            celebrations with family and friends, we are committed to preserving
            every precious memory for you to cherish for years to come.
          </p>
          <p className="p2">{` `}</p>
          <p className="what-sets-us">
            What sets us apart is our dedication to excellence and our
            commitment to providing exceptional service to our clients. We
            understand that every couple is unique, and we take the time to get
            to know you and your vision for your wedding day. Our personalized
            approach ensures that your photographs reflect your individual style
            and personality, creating a one-of-a-kind collection that you will
            treasure forever.
          </p>
          <p className="p3"></p>
          <p className="whether-youre-planning">
            Whether you're planning an intimate ceremony or a grand celebration,
            we are here to capture the magic of your special day. Let Saurabh
            Singh Photography be a part of your love story, and together, we
            will create memories that you will cherish for a lifetime.
          </p>
          <p className="p4"></p>
          <p className="contact-us-today-to-learn-more">
            <span className="contact-us">Contact us</span>
            <span>
              {" "}
              today to learn more about our services and how we can help make
              your wedding day unforgettable.
            </span>
          </p>
        </div>
      </div>
      <div className="background-rectangle">
        <div className="frame-parent">
          <div className="flowerbg8-1-parent">
            <img
              className="flowerbg8-1-icon"
              alt=""
              src="/flowerbg8-1@2x.png"
            />
            <div className="wrapper-group-42">
              <img
                className="wrapper-group-42-child"
                alt=""
                src="/group-42@2x.png"
              />
            </div>
          </div>
          <div className="vector-parent" onClick={onGroupContainerClick}>
            <button className="btn">
                     Service </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
