import ParentFrame from "../components/ParentFrame";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-child" />
      <div className="gallery-item" />
      <div className="gallery-inner" />
      <div className="gallery-child1" />
      <div className="gallery-child2" />
      <section className="f-r-a-m-e-wrapper">
        <div className="f-r-a-m-e">
          <h1 className="our-recent-work">
            Our Recent Work best wedding gallery
          </h1>
          <img
            className="floral-design-icon"
            loading="lazy"
            alt=""
            src="/floral-design@2x.png"
          />
        </div>
      </section>
      <section className="individual-frame-parent">
        <div className="individual-frame">
          <div className="individual-frame1">
            <div className="individual-frame2">
              <div className="mask-group-parent">
                <img
                  className="mask-group-icon"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                  
                />
                <div className="frame-gallery-arrow">
                  <div className="group">
                    <div className="group-div">
                      <div className="frame-child1" />
                      <div className="frame-group">
                        <div className="gallery-wedding-1">
                          Gallery Wedding 1
                        </div>
                        <img
                          className="frame-group-child"
                          loading="lazy"
                          alt=""
                          src="/arrow-12.svg"
                        
                        />
                      </div>
                      <div className="mask-groups">
                        <b className="see-more1">see more</b>
                      </div>
                    </div>
                    <img
                      className="mask-group-icon1"
                      loading="lazy"
                      alt=""
                      src="/mask-group-11@2x.png"
   
                    />
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <div className="frame-div">
                  <div className="mask-group-wrapper">
                    <img
                      className="mask-group-icon2"
                      loading="lazy"
                      alt=""
                      src="/mask-group-2@2x.png"
                    />
                  </div>
                  <div className="gallery-wedding-arrow">
                    <div className="arrow">
                      <div className="gallery-wedding-2">Gallery Wedding 2</div>
                      <img
                        className="arrow-child"
                        loading="lazy"
                        alt=""
                        src="/arrow-12.svg"
                      />
                    </div>
                    <div className="more-arrows">
                      <b className="see-more2">see more</b>
                    </div>
                  </div>
                </div>
                <img
                  className="mask-group-icon3"
                  loading="lazy"
                  alt=""
                  src="/mask-group-3@2x.png"
                  
                />
              </div>
            </div>
            <div className="arrow-frame-gallery">
              <div className="unused">
                <div className="gallery-wedding-4">Gallery Wedding 4</div>
                <img
                  className="unused-child"
                  loading="lazy"
                  alt=""
                  src="/arrow-12.svg"
                />
              </div>
              <div className="unused1">
                <div className="gallery-wedding-5">Gallery Wedding 5</div>
                <img
                  className="unused-item"
                  loading="lazy"
                  alt=""
                  src="/arrow-12.svg"
                />
              </div>
            </div>
          </div>
          <div className="seemore-frame">
            <div className="seemoreseemore-frame">
              <b className="see-more3">see more</b>
              <b className="see-more4">see more</b>
            </div>
          </div>
        </div>
        <ParentFrame />
      </section>
    </div>
  );
};

export default Gallery;
