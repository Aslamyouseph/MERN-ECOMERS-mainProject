import React from "react";
import "./OrderProductDisplay.css";
import image1 from "../User-images/laptop34.webp";

function OrderProductDisplay() {
  return (
    <div className="laptop-container">
      <div className="container">
        <div className="col-xs-12 col-md-12 bootstrap snippets bootdeys">
          <div className="product-content product-wrap clearfix">
            <div className="product-image">
              <img src={image1} alt="Laptop" className="img-responsive" />
            </div>
            <div className="product-detail">
              <p className="text-muted">Order placed on: 12-01-2023</p>
              <h3 className="name">
                <a href="#">
                  Lenovo Legion 5 <span>HP</span>
                </a>
              </h3>
              <h4 className="order-product-price">
                <span>&#x20B9;</span> 1,500{" "}
                <span className="payment-method text-muted">(COD)</span>
              </h4>
              <p className="text-muted">Qt: 1 Pair</p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default OrderProductDisplay;
