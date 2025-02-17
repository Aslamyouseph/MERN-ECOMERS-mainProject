import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./contactForm.css";

function ContactForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear errors on input change
  };

  // Validate form fields
  const validateForm = () => {
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setError("All fields are required.");
      return false;
    }
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    // phone number validation
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/user/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensures cookies are sent
        body: JSON.stringify(formData),
      });

      // Parse JSON response before using it
      const data = await res.json();

      // TODO:If user is not logged in then this block of code will work
      if (res.status === 401) {
        setError(data.message || "To contact us you need to log in.");
        // Redirect to the login page after 5 seconds
        setTimeout(() => navigate("/login"), 5000);
        return;
      }

      if (res.ok) {
        setSuccessMessage(
          "Your request has been submitted successfully! Our staff will contact you very soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Redirect after success (change the route if needed)
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
    <div>
      <h1 className="contact-form-heading" style={{ margin: "0 5%" }}>
        <b>
          Need to reach us for reporting inquiries? No problem. Just fill out
          the form below, and we'll make sure your message reaches the right
          person.
        </b>
      </h1>
      <br />

      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="email"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="40"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message"
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
