import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/statistic");
  }, [navigate]);

  return (
    <div className="service">
      <div className="service1">
        <div className="we-offer-a-container">
          <p className="we-offer-a">
            {" "}
            We offer a range of professional photography services tailored to
            meet your unique needs and capture the essence of every moment.
            Whether it's a special event, a milestone celebration, or a personal
            portrait session, we're here to bring your vision to life through
            the lens.
          </p>
        </div>
        <div className="capturing-moments-creating-container">
          <p className="capturing-moments-creating-me">
            <span>
              <span className="capturing-moments-creating">
                Capturing Moments, Creating Memories
              </span>
            </span>
          </p>
          <p className="best-services-we-provide">
            <span>
              <b>{` `}</b>
            </span>
            <b>
              <span className="best-services-we">best Services We Provide</span>
            </b>
          </p>
        </div>
        <div className="service-child" />
        <div className="service-item" />
        <div className="service-inner" />
        <div className="service-child1" />
        <div className="service-child2" />
        <div className="service-child3" />
        <div className="service-child4" />
        <div className="service-child5" />
        <b className="traditional">Traditional</b>
        <b className="wedding-cake">Wedding Cake</b>
        <b className="cinematic">Cinematic</b>
        <b className="wedding-cake1">Wedding Cake</b>
        <b className="bride-grome">{`Bride & grome`}</b>
        <b className="wedding-cake2">Wedding Cake</b>
        <b className="venue">Venue</b>
        <b className="wedding-cake3">Wedding Cake</b>
        <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor5">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor7">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor8">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
        <div className="lorem-ipsum-dolor10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
       
        <div className="vector-group">
          <img className="group-child" alt="" src="/arrow-14.svg" />
          <a href="/link9" className="see-more13">see more</a>
        </div>
<div className="vector-parent1">
  <a href="/link2" className="link-wrapper">
    <img className="group-inner" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link2" className="see-more7">see more</a>
</div>
<div className="vector-parent2">
  <a href="/link3" className="link-wrapper">
    <img className="group-child1" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link3" className="see-more8">see more</a>
</div>
<div className="vector-parent3">
  <a href="/link4" className="link-wrapper">
    <img className="group-child2" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link4" className="see-more9">see more</a>
</div>
<div className="vector-parent4">
  <a href="/link5" className="link-wrapper">
    <img className="group-child3" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link5" className="see-more10">see more</a>
</div>
<div className="vector-parent5">
  <a href="/link6" className="link-wrapper">
    <img className="group-child4" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link6" className="see-more11">see more</a>
</div>
<div className="vector-parent6">
  <a href="/link7" className="link-wrapper">
    <img className="group-child5" alt="" src="/arrow-14.svg" />
  </a>
  <a href="/link7" className="see-more12">see more</a>
</div>
      </div>
      <img
        className="copy-of-dsc-3025-1"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-2"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-3"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-4"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-5"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-6"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-7"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <img
        className="copy-of-dsc-3025-8"
        alt=""
        src="/copy-of-dsc-3025-1@2x.png"
      />
      <div className="rectangle-parent4" onClick={onGroupContainerClick}>
      <button className="btn">
                     Statistic </button>
          </div>
    </div>
  );
};

export default Service;
