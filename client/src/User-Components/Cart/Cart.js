import React from "react";
import "./Cart.css";
import image from "../User-images/laptop28.webp";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <section>
        <br />
        <div className="cart-card">
          <h2 className="cart-title">Shopping Cart</h2>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={image} alt="Product" className="cart-image" />
                </td>
                <td>Aslam</td>
                <td>₹10,000</td>
                <td>
                  <div className="cart-quantity">
                    <button className="cart-btn increment">+</button>
                    <span className="cart-quantity-value">1</span>
                    <button className="cart-btn decrement">-</button>
                  </div>
                </td>
                <td>
                  <a
                    href="/delete-from-cart/{{this._id}}"
                    className="cart-remove-btn"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you want to delete this item?"
                      )
                    }
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <img src={image} alt="Product" className="cart-image" />
                </td>
                <td>Aslam</td>
                <td>₹10,000</td>
                <td>
                  <div className="cart-quantity">
                    <button className="cart-btn increment">+</button>
                    <span className="cart-quantity-value">1</span>
                    <button className="cart-btn decrement">-</button>
                  </div>
                </td>
                <td>
                  <a
                    href="/delete-from-cart/{{this._id}}"
                    className="cart-remove-btn"
                    onClick={() =>
                      window.confirm(
                        "Are you sure you want to delete this item?"
                      )
                    }
                  >
                    Remove
                  </a>
                </td>
              </tr>

              <tr>
                <td colSpan="5" className="cart-empty">
                  No products found in the cart.
                </td>
              </tr>
            </tbody>
          </table>

          <hr />
          <div className="cart-footer">
            <h3 className="cart-total">
              <u>Total Price: ₹10,000</u>
            </h3>
            <Link to="/PlaceOrder" className="cart-order-btn">
              <b>Place Order</b>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
}

export default Cart;
