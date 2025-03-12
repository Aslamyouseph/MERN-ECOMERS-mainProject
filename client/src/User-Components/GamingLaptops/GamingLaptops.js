import React, { useState, useEffect } from "react";
import "./GamingLaptops.css"; // Import your updated CSS file
import { Link, useNavigate } from "react-router-dom";

const GamingLaptops = () => {
  const [laptops, setLaptops] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");
  const [laptopDetails, setLaptopDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/admin/getGamingLaptops",
          {
            method: "GET",
            credentials: "include", // Ensures that the session is used for authentication
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        // console.log("gaming laptops from frontend", data);
        setLaptops(data.laptops); // Saving the laptops details to the state
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchLaptopDetails();
  }, []);
  //
  // After  Clicking the Add To Cart then this operation is performed
  const handleCart = async (id) => {
    try {
      // Fetch laptop details
      const res = await fetch(
        `http://localhost:5000/api/admin/getGamingLaptopDetails/${id}`,
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
        `http://localhost:5000/api/user/addToCart/${id}`,
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
    <div className="laptop-container">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <br />
      <h1 className="laptop-heading">The Best Gaming Laptops for 2025</h1>
      <br />
      <h3 className="laptop-description">
        Experience high-performance gaming with powerful processors, dedicated
        graphics, and high refresh rate displays. Designed for smooth gameplay,
        immersive visuals, and advanced cooling, these laptops are perfect for
        gamers who demand speed and precision.
      </h3>
      <br />
      <div className="container">
        <div className="col-xs-8 col-md-8 bootstrap snippets bootdeys">
          {error && <p className="error-message">{error}</p>}
          {/* Mapping operation is stating from here onwards */}
          {Array.isArray(laptops) && laptops.length > 0 ? (
            laptops.map((laptops) => (
              <div
                key={laptops._id}
                className="product-content product-wrap clearfix"
              >
                <div className="product-image">
                  <img
                    src={`http://localhost:5000${laptops.Laptop_image_small}`}
                    alt={laptops.Laptop_title}
                    className="img-responsive"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                    }}
                  />
                </div>
                {/* <h1>{laptops._id}</h1> */}
                <div className="product-detail">
                  <h5 className="name">{laptops.Laptop_title}</h5>

                  <p className="price-container">
                    <span>$ {laptops.Laptop_discount_price}</span>
                  </p>
                  <div className="description">
                    <p>{laptops.Laptop_description}</p>
                    <br />
                  </div>
                  <br />

                  <div className="product-info">
                    <div className="button-container">
                      <Link
                        //Sending the Particular laptop id when the View more button is clicked time
                        // This id first go to the route setup in App.js and then to the ProductDetails component
                        //TODO:CHECK the APP.Js for more details
                        to={`/GamingLaptopDetails/${laptops._id}`}
                        className="btn btn-success"
                      >
                        View More
                      </Link>
                      <button
                        onClick={() => handleCart(laptops._id)}
                        className="btn btn-success"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No laptops available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GamingLaptops;
