import React, { useRef, useEffect } from "react";
import "./LatestLaptop.css";
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
const ScrollImages = () => {
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
    const interval = setInterval(autoScroll, 2500);
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
            <big>Latest Laptop Top Picks :</big>
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
              to={`/GamingLaptopDetails/67c275746b2985d565fc9efe`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop1} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Powerful performance laptop with sleek design, ideal for
                  students, professionals, and gamers needing multitasking
                  efficiency.
                </b>
              </p>
            </div>
          </div>

          <div className="child">
            <Link
              to={`/GamingLaptopDetails/67c1a7c818f27ff85d982e63`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop2} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Lightweight laptop featuring long battery life, perfect for
                  travel, remote work, and everyday productivity on-the-go.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BusinessLaptopDetails/67b991df053f121edb60d268`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop3} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Affordable yet reliable laptop offering smooth browsing,
                  document editing, and HD streaming for casual users.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BusinessLaptopDetails/67b98f5ea3b38dd225be4819`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop4} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Premium build quality with vibrant display, this laptop excels
                  in creative tasks like video editing and design.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BudgetLaptopDetails/67bea9f65aebe6d01935f6f2`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Fast-booting laptop with SSD storage and ergonomic keyboard,
                  best for coding, writing, and extended use.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BudgetLaptopDetails/67b992cd84d69bb8f3fd4f4c`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop6} alt="laptop_image" />
            </Link>
            <p>
              <b>
                Compact 2-in-1 touchscreen laptop ideal for note-taking,
                drawing, and flexible study or presentation tasks.
              </b>
            </p>
          </div>
          <div className="child">
            <Link
              to={`/StudentLaptopDetails/67beab695aebe6d01935f746`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop7} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Durable business-class laptop with robust security, enhanced
                  connectivity, and dependable office software compatibility.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/TabletsDetails/67beb2f663dfd1f8351ff53e`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop8} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Gaming laptop with dedicated graphics, RGB keyboard, and high
                  refresh rate screen for immersive experiences.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/TwoInOneLaptopDetails/67beabb35aebe6d01935f750`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop9} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Ultra-thin laptop with minimal bezels, great for
                  presentations, media viewing, and efficient workspace
                  organization.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/GamingLaptopDetails/67c275746b2985d565fc9efe`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop10} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Budget-friendly laptop for students, supports educational
                  apps, video calls, and basic computer tasks with ease.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/GamingLaptopDetails/67c1a7c818f27ff85d982e63`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop11} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  High-performance laptop with latest processor, crisp display,
                  and fast internet for modern multitasking needs.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BusinessLaptopDetails/67b991df053f121edb60d268`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop12} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Stylish laptop with metallic finish, quiet fan, and quality
                  speakers — built for entertainment and work.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BusinessLaptopDetails/67b98f5ea3b38dd225be4819`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop13} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Business-ready laptop with fingerprint scanner, privacy
                  features, and great typing experience in compact form.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/BudgetLaptopDetails/67bea9f65aebe6d01935f6f2`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop14} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Everyday laptop with HD display, good sound, and all essential
                  ports for general use and connectivity.
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

export default ScrollImages;
