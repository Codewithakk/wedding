import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <section className="wrapper-mask-group-parent">
        <div className="wrapper-mask-group">
          <img className="mask-group-icon4" alt="" src="/mask-group1@2x.png" />
        </div>
        <div className="wrapper-mask-group1">
          <img
            className="mask-group-icon5"
            alt=""
            src="/mask-group-12@2x.png"
          />
        </div>
        <div className="rectangle-parent1">
          <div className="frame-child2" />
          <div className="rectangle-parent2">
            <div className="frame-child3" />
            <div className="client-review-text">
              <img
                className="lavender-icon"
                loading="lazy"
                alt=""
                src="/lavender@2x.png"
              />
              <h1 className="client-review-to">Client Review to our service</h1>
            </div>
            <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. `}</div>
          </div>
        </div>
      </section>
      <div className="background-frame">
        <div className="inner-frame-parent">
          <div className="inner-frame">
            <div className="rectangles-pair" />
            <div className="daniella-frame">
              <div className="daniella-frame-child" />
              <div className="daniella-group">
                <h3 className="daniella-oniel">Daniella o’Niel</h3>
              </div>
              <div className="subtitle-frame">
                <img
                  className="subtitle-frame-child"
                  alt=""
                  src="/group-35.svg"
                />
                <div className="bordered-lines" />
              </div>
              <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt. `}</div>
            </div>
          </div>
          <div className="inner-frame1">
            <div className="inner-frame-child" />
            <div className="rectangle-parent3">
              <div className="frame-child4" />
              <div className="frame-wrapper">
                <div className="jacquelin-dripper-parent">
                  <h3 className="jacquelin-dripper">Jacquelin D’Ripper</h3>
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-34.svg"
                  />
                </div>
              </div>
              <div className="line-div" />
              <div className="lorem-ipsum-dolor2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar felis sit amet cursus varius. Sed ac tellus non nisl tincidunt faucibus. `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
