import React, { useState, useEffect } from "react";
import "./AdminViewReview.css";

function AdminViewReview() {
  const [GamingReview, setGamingReview] = useState([]);
  const [BusinessReview, setBusinessReview] = useState([]);
  const [BudgetReview, setBudgetReview] = useState([]);
  const [StudentReview, setStudentReview] = useState([]);
  const [TwoInOneReview, setTwoInOneReview] = useState([]);
  const [TabletsReview, setTabletsReview] = useState([]);
  const [error, setError] = useState(null);

  // Fetch Gaming Laptops review details
  useEffect(() => {
    const fetchGamingReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getGamingLaptops`,
          { method: "GET", credentials: "include" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Gaming Laptops review details");
        }

        const data = await res.json();
        // console.log("gaming laptops from frontend", data);
        setGamingReview(data.laptops || []);
      } catch (error) {
        console.error("Error fetching Gaming Laptops review details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchGamingReviewDetails();
  }, []);

  // Fetch Business Laptops review details
  useEffect(() => {
    const fetchBusinessReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getBusinessLaptops`,
          { method: "GET", credentials: "include" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Business Laptops review details");
        }

        const data = await res.json();
        setBusinessReview(data.laptops || []);
      } catch (error) {
        console.error("Error fetching Business Laptops review details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchBusinessReviewDetails();
  }, []);

  // Fetch Budget Laptops review details
  useEffect(() => {
    const fetchBudgetReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getBudgetLaptops`,
          { method: "GET", credentials: "include" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Budget Laptops review details");
        }

        const data = await res.json();
        setBudgetReview(data.laptops || []);
      } catch (error) {
        console.error("Error fetching Budget Laptops review details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchBudgetReviewDetails();
  }, []);

  // Fetch Student Laptops review details
  useEffect(() => {
    const fetchStudentReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getStudentsLaptops`,
          { method: "GET", credentials: "include" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Student Laptops review details");
        }

        const data = await res.json();
        setStudentReview(data.laptops || []);
      } catch (error) {
        console.error("Error fetching Student Laptops review details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchStudentReviewDetails();
  }, []);

  // Fetch Tablets review details
  useEffect(() => {
    const fetchTabletsReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getTablets`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Tablets review details");
        }

        const data = await res.json();
        setTabletsReview(data.laptops || []);
      } catch (error) {
        console.error("Error fetching Tablets review details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchTabletsReviewDetails();
  }, []);

  // Fetch Two-In-One Laptops review details
  useEffect(() => {
    const fetchTwoInOneReviewDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getTwoInOneLaptops`,
          { method: "GET", credentials: "include" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Two-In-One Laptops review details");
        }

        const data = await res.json();
        setTwoInOneReview(data.laptops || []);
      } catch (error) {
        console.error(
          "Error fetching Two-In-One Laptops review details:",
          error
        );
        setError("Something went wrong. Please try again.");
      }
    };

    fetchTwoInOneReviewDetails();
  }, []);

  return (
    <div className="admin-review-container">
      <h1 className="reviewHeading">View Reviews of Each Product</h1>
      <hr />

      {error && <p className="error-message">{error}</p>}

      {/* Gaming Laptops */}
      <h2 className="category-heading">Gaming Laptops</h2>
      {GamingReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />

      {/* Budget Laptops */}
      <h2 className="category-heading">Budget Laptops</h2>
      {BudgetReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />

      {/* Business Laptops */}
      <h2 className="category-heading">Business Laptops</h2>
      {BusinessReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />

      {/* Student Laptops */}
      <h2 className="category-heading">Student Laptops</h2>
      {StudentReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />

      {/* Tablets */}
      <h2 className="category-heading">Tablets</h2>
      {TabletsReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />

      {/* Two-In-One Laptops */}
      <h2 className="category-heading">Two-In-One Laptops</h2>
      {TwoInOneReview.map((laptop, index) => (
        <div key={laptop._id || index} className="laptop-card">
          <h3
            style={{
              textAlign: "center",
              color: "green",
              fontSize: "40px",
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            {laptop.Laptop_title}
          </h3>
          <div className="reviews">
            {laptop.Laptop_Review && laptop.Laptop_Review.length > 0 ? (
              laptop.Laptop_Review.map((review, rIndex) => (
                <div key={review._id || rIndex} className="review-card">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-text">{review.review}</p>
                  {/* This is used to display the date and time of the review */}
                  <small>{new Date(review.date).toLocaleString()}</small>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default AdminViewReview;
