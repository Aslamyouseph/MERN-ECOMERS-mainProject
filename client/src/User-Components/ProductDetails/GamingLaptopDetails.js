import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css";

export default function ProductPage() {
  const { id } = useParams(); // Get The particular id of the product from the URL
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/getGamingLaptopDetails/${id}`,
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
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchLaptopDetails();
  }, [id]);

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
    </div>
  );
}
