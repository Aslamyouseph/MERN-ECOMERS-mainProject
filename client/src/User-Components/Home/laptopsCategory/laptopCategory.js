import React from "react";
import "./laptopCategory.css";
import { Link } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)

function laptopCategory() {
  return (
    <div>
      <h1 className="laptop-listing-heading1">
        <span style={{ color: "red" }}>Lappora</span> : Buying Advice, Tips, and
        News
      </h1>
      <br />
      <h2 className="laptop-listing-heading2">
        We benchmark, rate, and review hundreds of PCs each year so we can
        <br />
        deliver expert buying advice to help you find the right laptop.
      </h2>
      <br />
      <br />
      {/* Here onwards the card is starting */}
      <div class="card-container">
        <div class="card">
          <Link
            to="/gamingLaptops"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>Gaming Laptops</h2>
              <p>
                Experience unbeatable performance and stunning visuals with our
                high-performance gaming laptops, designed for gamers who demand
                the best.
              </p>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link
            to="/BusinessLaptops"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>Business Laptops</h2>
              <p>
                Power up your gaming experience with our high-performance
                laptops, featuring top-tier processors, graphics, and immersive
                displays.
              </p>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link
            to="/BudgetLaptops"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>Budget Laptops</h2>
              <p>
                Get the best value for your money with our budget laptops,
                offering reliable performance and essential features at an
                affordable price.
              </p>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link
            to="/StudentLaptops"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>Student Laptops</h2>
              <p>
                Find the perfect student laptops, combining affordability,
                performance, and portability to help you succeed in your studies
              </p>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link
            to="/Tablets"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>Who need tablets</h2>
              <p>
                Tablets are perfect for those seeking a portable, versatile
                device for work, study, entertainment, or creative tasks on the
                go
              </p>
            </div>
          </Link>
        </div>
        <div class="card">
          <Link
            to="/TwoInOne"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card-content">
              <h2>2 in one</h2>
              <p>
                2-in-1 laptops offer the flexibility of both a laptop and a
                tablet in one device, perfect for those who need power and
                portability in a single, versatile machine
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default laptopCategory;
