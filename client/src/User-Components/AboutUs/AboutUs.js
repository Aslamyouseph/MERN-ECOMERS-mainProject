import React from "react";
import image1 from "../User-images/about1.webp";
import image2 from "../User-images/about3.webp";
import image3 from "../User-images/about2.webp";
import "./Aboutus.css";

function About() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginTop: "25px",
        }}
      >
        <b>About</b>
      </h1>
      <h5 style={{ textAlign: "center" }}>
        Who we are, what we do, and how we test products
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      <div className="main-card-container">
        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-1">
            <img className="card-img-top" src={image2} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What We're All About: The Lappora Editorial Mission</b>
          </h3>
        </div>

        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-2">
            <img className="card-img-top" src={image3} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What Are The Mission and Vision OF Lappora</b>
          </h3>
        </div>

        <div className="sub-card" style={{ width: "30rem" }}>
          <a href="#section-3">
            <img className="card-img-top" src={image1} alt="About image" />
          </a>
          <h3 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>Who We Are: Meet The Editorial Team Of Us</b>
          </h3>
        </div>
      </div>

      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 1 */}
      <div id="section-1" className="section-1">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What We're All About: The Lappora Editorial Mission</b>
          </h1>
          <br />
          <p className="paragraph">
            At Lappora, our mission is to provide comprehensive, unbiased, and
            up-to-date information on laptops. We offer expert reviews, detailed
            comparisons, and tailored buying guides to help you make informed
            decisions. Our editorial team tests the latest models across various
            brands, covering everything from performance to design. Committed to
            integrity and transparency, Lappora is your trusted resource for all
            things laptops, ensuring you find the perfect device to meet your
            needs.
          </p>
        </div>
      </div>

      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 2 */}
      <div id="section-2" className="section-2">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>What Are The Mission and Vision OF Lappora</b>
          </h1>
          <br />
          <h2 style={{ fontFamily: "initial", marginLeft: "10%" }}>
            <u>Mission</u>
          </h2>
          <p className="paragraph">
            Lappora's mission is to empower consumers with accurate, unbiased,
            and comprehensive information about laptops, ensuring they make
            well-informed purchasing decisions. We strive to offer expert
            reviews, detailed comparisons, and personalized buying guides,
            making technology accessible and understandable for everyone. Our
            commitment is to deliver content rooted in integrity, transparency,
            and excellence, helping users find the perfect laptop to suit their
            unique needs. By fostering trust and innovation, we aim to create a
            reliable resource that simplifies the laptop selection process while
            keeping our audience informed about the latest trends and
            advancements in the industry.
          </p>

          <h2 style={{ fontFamily: "initial", marginLeft: "10%" }}>
            <u>Vision</u>
          </h2>
          <p className="paragraph">
            Our vision is to redefine how people explore and purchase laptops by
            becoming the most trusted and innovative authority in the laptop
            industry. We aspire to set the benchmark for quality, expertise, and
            transparency, offering a platform that blends cutting-edge
            technology with human-centric insights. At Lappora, we envision a
            world where every consumer, regardless of their technical knowledge,
            can confidently choose a laptop that perfectly aligns with their
            needs. By fostering trust, integrity, and a commitment to
            excellence, we aim to inspire a global community of informed and
            empowered tech enthusiasts while contributing to the advancement of
            sustainable and user-focused innovations in the laptop market.
          </p>
        </div>
      </div>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />

      {/* Section 3 */}
      <div id="section-3" className="section-3">
        <div className="section">
          <h1 style={{ textAlign: "center", fontFamily: "initial" }}>
            <b>Who We Are: Meet The Editorial Team</b>
          </h1>
          <p className="paragraph">
            <u>REVIEWS & TECHNOLOGY BUYING ADVICE</u>
            <br />
            . PC Labs Director/Executive Editor: John Burek
            <br />
            . Executive Editor: Alex Colon
            <br />
            . Managing Editors: Tom Brant, Osborne
            <br />
            . Lead Analyst: Brian Westover
            <br />
            . Senior Analysts: Matthew Buzzi, Tony Hoffman
            <br />
            . Analysts: Zackery Cuevas, Michael Sexton
            <br />. Junior Analyst/Associate Producer: Francisco La Hoz
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
