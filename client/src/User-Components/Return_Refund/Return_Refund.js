import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Return_Refund.css";

const Return_Refund = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderId: "",
    reason: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on input change
  };

  // Validate form fields
  const validateForm = () => {
    const { orderId, phone, reason } = formData;

    if (!orderId || !phone || !reason) {
      setError("All fields are required.");
      return false;
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/returnRefund`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );

      let data;
      try {
        data = await res.json();
      } catch (error) {
        setError("Invalid response from server. Please try again later.");
        return;
      }

      if (res.status === 401) {
        setError(data.message || "To send the request, you need to log in.");
        setTimeout(() => navigate("/login"), 5000);
        return;
      }

      if (res.ok) {
        setSuccessMessage(
          "Your request has been submitted successfully! Redirecting..."
        );
        setFormData({ orderId: "", phone: "", reason: "" });

        setTimeout(() => {
          if (window.location.pathname !== "/") {
            navigate("/");
          }
        }, 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to submit. Please check your internet connection.");
    }
  };

  return (
    <div className="return-refund-container">
      <div className="return-refund-card">
        <h2 className="return-refund-title">
          Not Happy with Your Order? Let’s Fix That!
        </h2>
        <br />
        {error && <p className="return-refund-error">{error}</p>}
        {successMessage && (
          <p className="return-refund-success">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="return-refund-form">
          <div className="return-refund-field">
            <label>Order ID:</label>
            <input
              type="text"
              name="orderId"
              value={formData.orderId}
              onChange={handleChange}
              placeholder="Enter Order ID"
              required
            />
          </div>

          <div className="return-refund-field">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
              required
            />
          </div>

          <div className="return-refund-field">
            <label>Reason for Return:</label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe the issue"
              required
            />
          </div>

          <button type="submit" className="return-refund-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Return_Refund;
