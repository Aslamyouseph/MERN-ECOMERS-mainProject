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
import { Link } from "react-router-dom";
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
            <Link
              to={`/NewsDetails/67fbb889225431a44303e0f9`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop11} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  HP launches new Pavilion series with upgraded processors,
                  sleek design, and improved thermal performance for
                  multitasking.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb867225431a44303e0f7`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop12} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Apple introduces M3 MacBook Air with enhanced speed, better
                  battery, and ultra-silent performance for professionals.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb84c225431a44303e0f5`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop13} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Asus unveils ROG gaming laptops featuring RTX 40 series GPUs
                  and 240Hz refresh rate for gamers.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb82b225431a44303e0f3`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop14} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Dell XPS series gets OLED display and AI-powered features,
                  targeting creators and business professionals alike.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67be7b1ea1b126379cc270a8`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Lenovo’s Yoga Slim 7i released with Intel Core Ultra
                  processor, promising efficiency and lightweight portability.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67bc829da061bf97285dffe8`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop10} alt="laptop_image" />
            </Link>
            <p>
              <b>
                Microsoft Surface Laptop gets refreshed with better display
                clarity, improved keyboard, and Windows 11 enhancements.
              </b>
            </p>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb889225431a44303e0f9`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop2} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Acer Aspire models updated with eco-friendly design, better
                  cooling, and improved audio for everyday usage.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb867225431a44303e0f7`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop3} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Realme enters laptop market with budget-friendly Realme Book
                  featuring fast charging and metallic finish design.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb84c225431a44303e0f5`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop4} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Samsung Galaxy Book4 Pro gets powerful upgrades with AMOLED
                  display and seamless ecosystem connectivity.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb82b225431a44303e0f3`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Alienware M18 brings high-end gaming experience with dual-fan
                  cooling, RTX 4090 GPU, and 18-inch display.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67be7b1ea1b126379cc270a8`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop6} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  HP Spectre x360 now features AI camera, smarter battery, and
                  better hinge design for creative professionals.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67bc829da061bf97285dffe8`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop7} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Asus Chromebook Flip launched with touchscreen and ChromeOS
                  support, focused on education and productivity.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb889225431a44303e0f9`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop8} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Apple’s MacBook Pro 2025 rumors suggest Touch Bar removal,
                  thinner bezels, and USB-C universal support.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/NewsDetails/67fbb867225431a44303e0f7`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop9} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  MSI announces Creator Z series with powerful CPUs and
                  color-accurate displays aimed at designers and editors.
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
