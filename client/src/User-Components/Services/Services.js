import React from "react";
import "./Services.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
function Services() {
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
        <b>Services</b>
      </h1>
      <h5 style={{ textAlign: "center" }}>
        Empowering you with expert advice and hassle-free shopping
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <div className="main-ServicesContainer">
        <div className="service-container">
          <Link
            to="/OrderPage"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="service-heading">Your Orders</h3>
            <p style={{ textAlign: "center" }}>
              Track your orders in real-time
            </p>
          </Link>
        </div>
        <div className="service-container">
          <Link
            to="/Return&Refund"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="service-heading">Return and Refunds</h3>
            <p style={{ textAlign: "center" }}>
              Return or exchange your product
            </p>
          </Link>
        </div>
        <div className="service-container">
          <Link
            to="/PlaceOrder"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="service-heading">Payment Settings</h3>
            <p style={{ textAlign: "center" }}>Know about Payment methods</p>
          </Link>
        </div>{" "}
        <div className="service-container">
          <Link
            to="/HowToDO"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="service-heading">How To Do</h3>
            <p style={{ textAlign: "center" }}>Solve the technical issues</p>
          </Link>
        </div>
        <div className="service-container">
          <Link
            to="/ContactUs"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <h3 className="service-heading">Connect with us</h3>
            <p style={{ textAlign: "center" }}>For customer support</p>
          </Link>
        </div>
        <div className="service-container">
          <Link to="/news" style={{ color: "inherit", textDecoration: "none" }}>
            <h3 className="service-heading">Latest News</h3>
            <p style={{ textAlign: "center", textDecoration: "none" }}>
              Know the latest tech news and updates
            </p>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Services;
