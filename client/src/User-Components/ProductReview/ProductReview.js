// src/ProductReview.js
import { useState } from "react";
import "./ProductReview.css";

const ProductReview = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      setReviews([...reviews, { review }]);
      setReview("");
    }
  };

  return (
    <div className="product-review-container">
      <h2 className="product-review-title">
        Leave a Review – Help Others Decide
      </h2>
      <br />
      <form onSubmit={handleSubmit} className="product-review-form">
        <h4 className="productReviewer-name">Aslam Youseph</h4>
        <textarea
          placeholder="Write your review..."
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="product-review-button">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReview;
