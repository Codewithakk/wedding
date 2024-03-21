import "./ParentFrame.css";

const ParentFrame = () => {
  return (
    <div className="parent-frame">
      <div className="frame-mask-group">
        <img
          className="mask-group-icon9"
          loading="lazy"
          alt=""
          // src="/mask-group-4@2x.png"
          src="/couple.png"
        />
      </div>
      <div className="gallery-gallery">
        <div className="gallery-wedding-3">Gallery Wedding 3</div>
        <img
          className="gallery-gallery-child"
          loading="lazy"
          alt=""
          src="/arrow-12.svg"
        />
      </div>
      <div className="gallery-parents">
        <b className="see-more13">see more</b>
      </div>
      <div className="see-more-mask-group">
        <img
          className="mask-group-icon10"
          loading="lazy"
          alt=""
          src="/mask-group-5@2x.png"
        />
      </div>
      <div className="gallery-gallery1">
        <div className="gallery-wedding-6">Gallery Wedding 6</div>
        <img
          className="gallery-gallery-item"
          loading="lazy"
          alt=""
          src="/arrow-12.svg"
        />
      </div>
      <div className="gallery-parents1">
        <b className="see-more14">see more</b>
      </div>
    </div>
  );
};

export default ParentFrame;
