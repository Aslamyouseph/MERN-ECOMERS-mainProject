import React, { useState } from "react";
import "./PlaceOrder.css";
import { useNavigate, useParams } from "react-router-dom";

function PlaceOrder() {
  const { totalAmount } = useParams(); // Extract totalAmount from URL parameters
  const navigate = useNavigate();
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

  const validateForm = () => {
    const { address, pincode, mobile, place, paymentMethod } = formData;

    if (!address || !pincode || !mobile || !place || !paymentMethod) {
      setError("All fields are required.");
      return false;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(mobile)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
      setError("Please enter a valid pincode.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if the payment method is available
    if (formData.paymentMethod === "online") {
      setError(
        "Cash on Delivery is the only payment option available right now."
      );
      return; // Prevent form submission
    }

    try {
      const res = await fetch("http://localhost:5000/api/user/placeOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ ...formData, totalAmount }), // Include totalAmount in the request
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage(
          "Your order has been placed successfully! We will deliver it very soon."
        );
        setFormData({
          address: "",
          pincode: "",
          mobile: "",
          place: "",
          paymentMethod: "cod",
        });
        setTimeout(() => navigate("/"), 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit. Please check your internet connection.");
    }
  };

  return (
    <div className="order-container">
      <h2 className="order-header">Checkout</h2>

      {error && <p className="order-error">{error}</p>}
      {successMessage && <p className="order-success">{successMessage}</p>}

      <form id="order-form" className="order-form" onSubmit={handleSubmit}>
        <div className="order-row">
          <div className="order-column">
            <div className="shipping-card">
              <h4 className="card-title">Delivery Details</h4>
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

          <div className="order-column">
            <div className="billing-card">
              <h4 className="card-title">
                Total Amount:{" "}
                <span style={{ color: "red" }}>
                  RS: {totalAmount || "0.00"}
                </span>
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
                    disabled // Disable online payment option
                  />
                  <label htmlFor="online">
                    Online Payment
                    <span style={{ color: "red" }}> (Not available)</span>
                  </label>
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
