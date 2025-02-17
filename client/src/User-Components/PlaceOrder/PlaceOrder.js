import React, { useState } from "react";
import "./PlaceOrder.css";

function PlaceOrder({ user, totalAmount }) {
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    mobile: "",
    place: "",
    paymentMethod: "cod",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.address ||
      !formData.pincode ||
      !formData.mobile ||
      !formData.place
    ) {
      setError("All fields are required.");
      return;
    }

    setSuccessMessage(
      "Your order has been placed successfully! We will deliver it very soon."
    );

    // Reset form except for payment method
    setFormData({
      address: "",
      pincode: "",
      mobile: "",
      place: "",
      paymentMethod: "cod",
    });

    setError("");
  };

  return (
    <div className="order-container">
      <h2 className="order-header">Checkout</h2>

      {error && <p className="order-error">{error}</p>}
      {successMessage && <p className="order-success">{successMessage}</p>}

      <form id="order-form" className="order-form" onSubmit={handleSubmit}>
        <div className="order-row">
          {/* Delivery Details */}
          <div className="order-column">
            <div className="shipping-card">
              <h4 className="card-title">Delivery Details</h4>
              <input type="hidden" name="userId" value={user?._id || ""} />

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-input"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  className="form-input"
                  id="pincode"
                  name="pincode"
                  placeholder="Enter your pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  className="form-input"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input
                  type="text"
                  className="form-input"
                  id="place"
                  name="place"
                  placeholder="Enter your place"
                  value={formData.place}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="order-column">
            <div className="billing-card">
              <h4 className="card-title">
                Total Amount:{" "}
                <span className="total-amount">RS: {totalAmount}</span>
              </h4>

              <div className="form-group">
                <label className="payment-method-title">Payment Method</label>

                <div className="radio-group">
                  <input
                    className="radio-input"
                    type="radio"
                    name="paymentMethod"
                    id="cod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  <label htmlFor="cod">Cash on Delivery (COD)</label>
                </div>

                <div className="radio-group">
                  <input
                    className="radio-input"
                    type="radio"
                    name="paymentMethod"
                    id="online"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleChange}
                  />
                  <label htmlFor="online">Online Payment</label>
                </div>
              </div>

              <button className="order-button" type="submit">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
