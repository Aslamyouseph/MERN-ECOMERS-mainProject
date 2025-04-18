import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./productDetails.css";

export default function ProductPage() {
  const { id } = useParams(); // Get The particular id of the product from the URL
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  // Check login status
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/checksection`,
          {
            method: "GET",
            credentials: "include",
          }
        );
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
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getStudentLaptopDetails/${id}`,
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
        `${process.env.REACT_APP_API_BASE_URL}/api/user/addReviewStudent`,
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
  // After  Clicking the Add To Cart then this operation is performed
  const handleCart = async (id) => {
    try {
      // Fetch laptop details
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/getStudentLaptopDetails/${id}`,
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      if (!data.laptopDetails) {
        throw new Error("Laptop details not found.");
      }

      setLaptopDetails(data.laptopDetails);

      // Confirm before adding to cart
      const confirmAdd = window.confirm(
        `Are you sure you want to add ${data.laptopDetails.Laptop_title} to cart?`
      );

      if (!confirmAdd) return;

      // If confirmed, proceed with adding to cart
      const addToCartRes = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/addToCart/${id}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!addToCartRes.ok) throw new Error("Network response was not ok");
      // get back the response from the backend
      const cartData = await addToCartRes.json();

      if (!cartData.message) {
        throw new Error("Product is not added to cart.");
      }

      console.log("Laptop added to cart:", data.laptopDetails.Laptop_title);
    } catch (error) {
      console.error("Error:", error);
      setError("User is not logged in. Please log in to continue.");
      setTimeout(() => navigate("/login"), 5000);
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
                src={`${process.env.REACT_APP_API_BASE_URL}${laptopDetails.Laptop_image_large}`}
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
              {error && <p className="error-message">{error}</p>}
              {/* Cart Button */}
              <div className="quantity-container">
                <button
                  className="add-to-cart"
                  onClick={() => handleCart(laptopDetails._id)}
                >
                  Add to Cart
                </button>{" "}
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
