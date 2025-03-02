import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

export default function ProductPage() {
  const { id } = useParams(); // Get The particular id of the product from the URL
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  // Check login status
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/checksection", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
          setSessionName(data.user.name);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
    checkLoginStatus();
  }, []);

  // Fetch laptop details
  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/getBusinessLaptopDetails/${id}`,
          {
            method: "GET",
            credentials: "include", // Ensures that the session is used for authentication
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        // console.log("laptop details from frontend", data);
        setLaptopDetails(data.laptopDetails); // "laptopDetails" This is exactly the same name of the state and also form  the backend
        // console.log("Laptop details state:", laptopDetails);
        setReviews(data.laptopDetails.Laptop_Review || []); // Initialize reviews
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchLaptopDetails();
  }, [id]);

  // Submit Review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reviewText.trim()) {
      setError("Please enter the review.");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/user/addReviewBusiness",
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id, // Ensure correct ID is sent
            name: sessionName,
            review: reviewText,
          }),
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        // Update reviews immediately to show the new review
        const newReview = { name: sessionName, review: reviewText };

        setReviews((prevReviews) => [...prevReviews, newReview]);

        // Clear input field after successful submission
        setReviewText("");
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  return (
    <div className="container">
      {laptopDetails ? (
        <div>
          <br />
          {/* Product Section */}
          <section className="product-section">
            {/* Left Side - Images */}
            <div className="image-container">
              <img
                src={`http://localhost:5000${laptopDetails.Laptop_image_large}`}
                alt={laptopDetails.Laptop_title}
                className="featured-image"
              />
            </div>

            {/* Right Side - Product Details */}
            <div className="details-container">
              <h3 className="product-title">{laptopDetails.Laptop_title}</h3>
              <h5 className="price">
                Price: ${laptopDetails.Laptop_discount_price}{" "}
                <del className="original-price">
                  ${laptopDetails.Laptop_original_price}
                </del>
              </h5>
              <p className="description">{laptopDetails.Laptop_Details}</p>

              {/* Cart Button */}
              <div className="quantity-container">
                <button className="add-to-cart">Add to Cart</button>
              </div>

              <div className="delivery-info">
                <h4 className="delivery-title">Key specifications:</h4>

                <div className="delivery-options">
                  <div className="delivery-row">
                    <span> Processor</span>
                    <span>{laptopDetails.Laptop_keywords[0]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Graphics (GPU)</span>
                    <span>{laptopDetails.Laptop_keywords[1]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Display</span>
                    <span>{laptopDetails.Laptop_keywords[2]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Memory (RAM)</span>
                    <span>{laptopDetails.Laptop_keywords[3]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Storage</span>
                    <span>{laptopDetails.Laptop_keywords[4]}</span>
                  </div>
                  <div className="delivery-row">
                    <span>Keyboard</span>
                    <span>{laptopDetails.Laptop_keywords[5]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Battery</span>
                    <span>{laptopDetails.Laptop_keywords[6]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Cooling System</span>
                    <span>{laptopDetails.Laptop_keywords[7]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Ports & Connectivity</span>
                    <span>{laptopDetails.Laptop_keywords[8]}</span>
                  </div>
                  <div className="delivery-row">
                    <span> Operating System</span>
                    <span>{laptopDetails.Laptop_keywords[9]}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>No laptops available at the moment.</p>
      )}

      {/* Review Form */}
      {isLoggedIn && (
        <div className="product-review-container">
          <h2 className="product-review-title">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="product-review-form">
            {error && <p className="error-message">{error}</p>}
            <h4 className="productReviewer-name">Hi {sessionName}</h4>
            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="product-review-button">
              Submit Review
            </button>
          </form>
        </div>
      )}

      {/* Reviews Display */}
      <div className="product-reviewDisplay-container">
        <h3
          style={{
            textAlign: "center",
            fontFamily: "initial",
            fontSize: "50px",
            color: "green",
          }}
        >
          Customer Reviews
        </h3>
        <h3 style={{ textAlign: "center", color: "red" }}>
          {!isLoggedIn && "(Log in to leave a review )"}
        </h3>

        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h4>{review.name}</h4>
              <p>
                {review.review}{" "}
                <span
                  style={{
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  <br />
                  <br />
                  {/* This is used to display the date and time of the review */}
                  {new Date(review.date).toLocaleString()}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="no-reviews">
            No reviews yet. Be the first to review! <br />
            <span>To submit or leave a review, please log in.</span>
          </p>
        )}
      </div>
    </div>
  );
}
