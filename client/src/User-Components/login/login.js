import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/login`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Login successful!");
        setError(""); // Clear error if successful
        setEmail("");
        setPassword("");
        setTimeout(() => navigate("/"), 1000); // Navigate after 1s delay
      } else {
        setError(data.message || "Login failed. Try again.");
        setSuccessMessage(""); // Clear success message on error
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
      setSuccessMessage(""); // Clear success message on error
    }
    // Admin login operation (Give a default email and password for admin to login)
    if (email === "admin@gmail.com" && password === "123123") {
      navigate("/AdminHome");
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />

      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <div className="signUp-link">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br />
      <br />
      <h3
        style={{
          textAlign: "center",
          fontSize: "30px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "12px",
          color: "#333",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          margin: "20px auto",
          maxWidth: "600px",
          fontFamily: "Arial, sans-serif",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            color: "#d32f2f",
            textTransform: "uppercase",
            fontSize: "30px",
          }}
        >
          LOGIN FOR ADMIN
        </span>
        : - <br />
        <span
          style={{
            fontWeight: "bold",
            color: "#ff5722",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <span style={{ textDecoration: "underline" }}>Email</span>:
          admin@gmail.com
        </span>
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "#ff5722",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <span style={{ textDecoration: "underline" }}>Password</span>: 123123
        </span>
      </h3>

      <br />
      <br />
    </div>
  );
}

export default Login;
