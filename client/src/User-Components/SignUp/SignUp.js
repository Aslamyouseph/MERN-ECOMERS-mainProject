import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom"; // Routing

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(""); // Added error state
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Navigation function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Validation function
  const validateForm = () => {
    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("All fields are required.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }

    setError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Run validation

    try {
      const { confirmPassword, ...sendData } = formData; // Remove confirmPassword before sending
      const res = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Signup successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => navigate("/"), 1000); // Navigate after 1s delay
      } else {
        setError(data.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="signup-container">
        <h2>SignUp</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Displays errors */}
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}{" "}
        {/* Displays success message */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your number"
            pattern="[0-9]{10}"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />

          <div className="login-link">
            <Link to="/login">Already have an account? Login</Link>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SignUp;
