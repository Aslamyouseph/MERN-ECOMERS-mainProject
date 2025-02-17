import React from "react";
import image1 from "../User-images/contactUs.jpg";
import "./contactBody.css";
function ContactUs() {
  return (
    <div>
      <br />
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginTop: "25px",
        }}
      >
        <b>Contact Us.</b>
      </h1>
      <h5 style={{ textAlign: "center" }}>
        Answers to common questions about how to reach us
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <div className="image-container">
        <img
          src={image1}
          className="contactUs-image"
          alt="contactUs"
          style={{
            width: "30%",
            height: "auto",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      </div>
      <br />
      <h2
        style={{ marginLeft: "5%", marginRight: "5%", fontFamily: "initial" }}
      >
        <big>Meet Our Staff</big>
      </h2>
      <br />
      <p className="paragraph">
        Lappora provides comprehensive hands-on, labs-based testing of hardware,
        software, consumer electronics, and mobile products. Check out our
        Masthead to learn about who we are, what we do, and whom to contact
        about evaluating your product. Or you can or email us at
        Reviews@pcmag.com.
      </p>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <h2
        style={{ marginLeft: "5%", marginRight: "5%", fontFamily: "initial" }}
      >
        <big>Lappora Magazine Digital Subscriptions</big>
      </h2>
      <br />
      <p className="paragraph">
        As of December 2025, the digital edition of Lappora Magazine has been
        discontinued. For inquiries regarding your subscription, email
        <b> lapporadigital@gmail.com</b> or call <b>1-800-289-0429.</b>
      </p>

      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <h2
        style={{ marginLeft: "5%", marginRight: "5%", fontFamily: "initial" }}
      >
        <big>Mailing Address:</big>
      </h2>
      <br />
      <p className="paragraph">
        Lappora 114 Fifth Avenue,
        <br /> H.NO. B-23 F/F BLOCK-B, <br />
        SECTOR-12, <br />
        5th Floor Techno Park kerala india, NY 10011
      </p>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
    </div>
  );
}

export default ContactUs;
