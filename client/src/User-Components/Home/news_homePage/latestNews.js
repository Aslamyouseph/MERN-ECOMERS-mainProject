import React, { useRef, useEffect } from "react";
import "./latestNews.css";
import laptop1 from "../../User-images/laptop35.webp";
import laptop2 from "../../User-images/laptop45.webp";
import laptop3 from "../../User-images/laptop31.webp";
import laptop4 from "../../User-images/laptop23.webp";
import laptop5 from "../../User-images/laptop25.webp";
import laptop6 from "../../User-images/laptop29.webp";
import laptop7 from "../../User-images/laptop32.webp";
import laptop8 from "../../User-images/laptop37.jpg";
import laptop9 from "../../User-images/laptop36.webp";
import laptop10 from "../../User-images/laptop34.webp";
import laptop11 from "../../User-images/laptop28.webp";
import laptop12 from "../../User-images/laptop41.webp";
import laptop13 from "../../User-images/laptop21.jpg";
import laptop14 from "../../User-images/laptop38.webp";

const LatestNews = () => {
  const scrollContainerRef = useRef(null);

  const leftScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({
      left: -scrollContainer.offsetWidth / 5, // Adjust scroll step for smooth movement
      behavior: "smooth",
    });
  };

  const rightScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollBy({
      left: scrollContainer.offsetWidth / 5, // Adjust scroll step for smooth movement
      behavior: "smooth",
    });
  };

  const autoScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollLeft =
      scrollContainer.scrollWidth - scrollContainer.offsetWidth;

    if (scrollContainer.scrollLeft >= maxScrollLeft) {
      scrollContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollContainer.scrollBy({
        left: scrollContainer.offsetWidth / 5, // Adjust scroll step for smooth movement
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 2700);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <div>
        <br />
        <h5
          style={{
            paddingLeft: "5%",
            fontFamily: "inherit",
            color: "red",
          }}
        >
          <b>
            <big>Latest Laptop News :</big>
          </b>
        </h5>
        <hr
          style={{
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
      </div>
      <div className="cover">
        <button className="left" onClick={leftScroll}>
          ←
        </button>
        <div className="scroll-images" ref={scrollContainerRef}>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop11} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop2.html">
              <img className="child-img" src={laptop12} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop3.html">
              <img className="child-img" src={laptop13} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop4.html">
              <img className="child-img" src={laptop14} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop5.html">
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop6.html">
              <img className="child-img" src={laptop10} alt="laptop_image" />
            </a>
            <p>
              <b>
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos
              </b>
            </p>
          </div>
          <div className="child">
            <a href="laptop7.html">
              <img className="child-img" src={laptop2} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop3} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop4} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop6} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop7} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop8} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <a href="laptop1.html">
              <img className="child-img" src={laptop9} alt="laptop_image" />
            </a>
            <div>
              <p>
                <b>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quoslorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quos
                </b>
              </p>
            </div>
          </div>
        </div>
        <button className="right" onClick={rightScroll}>
          →
        </button>
      </div>
    </div>
  );
};

export default LatestNews;
