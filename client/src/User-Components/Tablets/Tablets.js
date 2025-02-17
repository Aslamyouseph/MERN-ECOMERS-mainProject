import React from "react";
import "./Tablets.css";
import image1 from "../User-images/laptop35.webp";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Tablets() {
  return (
    <div>
      <div className="laptop-container">
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <br />
        <h1 className="laptop-heading">The Best Tablets for 2025</h1>
        <br />
        <h3 className="laptop-description">
          Designed for learning and productivity, student laptops offer a
          perfect blend of performance, portability, and battery life. Ideal for
          online classes, assignments, and research, these laptops provide
          smooth multitasking and reliable performance at an affordable price.
          Stay connected and study smarter with the right laptop for your
          education
        </h3>
        <br />
        <div className="container">
          <div className="col-xs-12 col-md-12 bootstrap snippets bootdeys">
            <div className="product-content product-wrap clearfix">
              <div className="product-image">
                <img src={image1} alt="Laptop" className="img-responsive" />
              </div>
              <div className="product-detail">
                <h5 className="name">
                  <a href="#">
                    Lenovo Legion 5 <span>Laptop</span>
                  </a>
                </h5>
                <p className="price-container">
                  <span>$99</span>
                </p>
                <div className="description">
                  <p>
                    Proin in ullamcorper lorem. Maecenas eu ipsum. Use the
                    latest version of Font Awesome for modern icons and better
                    performance.
                  </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <Link to="/ProductDetails" className="btn btn-success">
                        View More
                      </Link>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <a href="#" className="btn btn-success">
                        Add TO Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-content product-wrap clearfix">
              <div className="product-image">
                <img src={image1} alt="Laptop" className="img-responsive" />
              </div>
              <div className="product-detail">
                <h5 className="name">
                  <a href="#">
                    Lenovo Legion 5 <span>Laptop</span>
                  </a>
                </h5>
                <p className="price-container">
                  <span>$99</span>
                </p>
                <div className="description">
                  <p>
                    Proin in ullamcorper lorem. Maecenas eu ipsum. Use the
                    latest version of Font Awesome for modern icons and better
                    performance.
                  </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <Link to="/ProductDetails" className="btn btn-success">
                        View More
                      </Link>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <a href="#" className="btn btn-success">
                        Add TO Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-content product-wrap clearfix">
              <div className="product-image">
                <img src={image1} alt="Laptop" className="img-responsive" />
              </div>
              <div className="product-detail">
                <h5 className="name">
                  <a href="#">
                    Lenovo Legion 5 <span>Laptop</span>
                  </a>
                </h5>
                <p className="price-container">
                  <span>$99</span>
                </p>
                <div className="description">
                  <p>
                    Proin in ullamcorper lorem. Maecenas eu ipsum. Use the
                    latest version of Font Awesome for modern icons and better
                    performance.
                  </p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <Link to="/ProductDetails" className="btn btn-success">
                        View More
                      </Link>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <a href="#" className="btn btn-success">
                        Add TO Cart
                      </a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tablets;
