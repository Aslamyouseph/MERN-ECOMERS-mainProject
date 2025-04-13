import React, { useRef, useEffect } from "react";
import "./howTo.css";
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

const HowTo = () => {
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
    const interval = setInterval(autoScroll, 2900);
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
            <big>Latest Laptop How-To Do :</big>
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
              to={`/HowToDoDetails/67fbbcee225431a44303e140`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop14} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Clear your browser cache regularly to improve webpage loading
                  speeds, troubleshoot persistent errors, and reliably boost
                  performance.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbcdc225431a44303e13e`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop13} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Update your operating system frequently to gain vital security
                  patches, enhanced features, and more efficient device
                  performance.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbccc225431a44303e13c`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop12} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Utilize keyboard shortcuts daily to maximize productivity,
                  reduce repetitive tasks, and streamline your computer workflow
                  effectively overall.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbcba225431a44303e13a`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop11} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Use multi-factor authentication on accounts to protect
                  sensitive information from unauthorized access and cyber
                  threats permanently secured.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67f9fd3ec93dcbe75280be74`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop10} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Back up files to an external drive or cloud storage to avoid
                  data loss during system failures.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67be856bf957bf8b372f87fd`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop9} alt="laptop_image" />
            </Link>
            <p>
              <b>
                Regularly scan your system with antivirus software to detect
                malware, remove threats, and ensure computer safety quickly.
              </b>
            </p>
          </div>
          <div className="child">
            <Link
              to={`HowToDoDetails/67be7fe28f533a6e176c81d7`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop8} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Customize notification settings on apps to minimize
                  interruptions, improve focus, and maintain efficient work
                  sessions consistently daily.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbcee225431a44303e140`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop7} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Keep software applications updated to benefit from the latest
                  features, bug fixes, and enhanced security levels immediately.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbcdc225431a44303e13e`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop6} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Organize desktop files into dedicated folders for better
                  digital workspace management and quick access to documents
                  efficiently.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbccc225431a44303e13c`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop5} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Use a password manager to generate, store, and autofill
                  strong, unique passwords for every online account securely.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67fbbcba225431a44303e13a`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop4} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Optimize computer startup by disabling unnecessary
                  applications to decrease boot time and enhance overall
                  performance immediately noticeable.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67f9fd3ec93dcbe75280be74`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop3} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Regularly clean your hardware, including keyboard and screen,
                  to maintain device longevity and prevent overheating problems
                  effectively.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67be856bf957bf8b372f87fd`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop2} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Use VPN services during public Wi-Fi usage to encrypt online
                  traffic and protect your sensitive personal data.
                </b>
              </p>
            </div>
          </div>
          <div className="child">
            <Link
              to={`/HowToDoDetails/67be7fe28f533a6e176c81d7`}
              style={{ textDecoration: "none" }}
            >
              <img className="child-img" src={laptop1} alt="laptop_image" />
            </Link>
            <div>
              <p>
                <b>
                  Keep your device drivers updated for improved hardware
                  compatibility, enhanced performance, and reduced technical
                  glitches without issues.
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

export default HowTo;
