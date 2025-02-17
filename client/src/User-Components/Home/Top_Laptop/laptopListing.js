import React from "react";
import "./laptopListing.css";
import laptop1 from "../../User-images/laptop35.webp";
import laptop2 from "../../User-images/laptop45.webp";
import laptop3 from "../../User-images/laptop31.webp";
import laptop4 from "../../User-images/laptop23.webp";

function LaptopListing() {
  return (
    <div>
      <br />
      <br />
      <h5 style={{ paddingLeft: "5%", fontFamily: "inherit", color: "red" }}>
        <b>Top Laptop Picks :</b>
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      {/* Top laptops listing card */}
      <div
        className="laptop-listing-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          // alignItems: "center",
          // justifyContent: "center", // Center the cards
          gap: "32px", // Space between rows and columns
          padding: "20px", // Add padding for spacing
          leftPadding: "4%",
          rightPadding: "6%",
        }}
      >
        <div
          className="card"
          style={{
            maxWidth: "22rem",
            minHeight: "30rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={laptop1}
            alt="Laptop"
            style={{ width: "100%", height: "40%", objectFit: "cover" }}
          />
          <div
            className="container"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <h4>
              <b>Asus Zenbook 14 OLED Touch (UM3406)</b>
            </h4>
            <p>
              The latest in Asus' overflowing Zenbook 14 OLED family skimps a
              bit on the screen resolution but delivers impressive power,
              battery life, and convenience for $850.The latest in Asus'
              overflowing Zenbook 14 OLED family skimps a bit on the screen
              resolution but delivers impressive power, battery life, and
              convenience for $850.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            maxWidth: "22rem",
            minHeight: "30rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={laptop2}
            alt="Laptop"
            style={{ width: "100%", height: "40%", objectFit: "cover" }}
          />
          <div
            className="container"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <h4>
              <b>Apple MacBook Air (2024, M3)</b>
            </h4>
            <p>
              The 2024 Apple MacBook Air 13-Inch shoehorns more performance into
              its slim chassis, and amps up the external-monitor support and
              gaming capability.the best ultraportable Mac.The latest in Asus'
              overflowing Zenbook 14 OLED family skimps a bit on the screen
              resolution but delivers impressive power.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            maxWidth: "22rem",
            minHeight: "30rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={laptop3}
            alt="Laptop"
            style={{ width: "100%", height: "40%", objectFit: "cover" }}
          />
          <div
            className="container"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <h4>
              <b>Acer Aspire 3 (A315-24P)</b>
            </h4>
            <p>
              The Acer Aspire 3 (A315-24P) undercuts the competition with decent
              performance in its base configuration. It’s basic as bricks,
              though, and the higher-end configuration just isn't as competitive
              laptop.The latest in Asus' overflowing Zenbook 14 OLED family
              skimps a bit on the screen resolution but delivers impressive
              power, battery life, and convenience for $850.
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            maxWidth: "22rem",
            minHeight: "30rem",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={laptop4}
            alt="Laptop"
            style={{ width: "100%", height: "40%", objectFit: "cover" }}
          />
          <div
            className="container"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <h4>
              <b>Asus Zenbook 14X OLED (Q420)</b>
            </h4>
            <p>
              The Asus Zenbook 14X OLED Q420 model is more of a general
              productivity ultraportable than a creator machine, but its sharp
              build, quick CPU, and brilliant OLED display.The latest in Asus'
              overflowing Zenbook 14 OLED family skimps a bit on the screen
              resolution but delivers impressive power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopListing;
