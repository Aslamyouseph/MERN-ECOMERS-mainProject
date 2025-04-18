import React, { useState, useEffect, useContext } from "react";
import "./BudgetLaptos.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../SearchContext.js";

function BudgetLaptos() {
  const [laptops, setLaptops] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");
  const [laptopDetails, setLaptopDetails] = useState(null);
  const navigate = useNavigate();
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getBudgetLaptops`,
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
  // After  Clicking the Add To Cart then this operation is performed
  const handleCart = async (id) => {
    try {
      // Fetch laptop details
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/getBudgetLaptopDetails/${id}`,
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

  // TODO: Filter the laptops list based on the search input
  const filteredData = laptops.filter(
    (item) =>
      item.Laptop_title?.toLowerCase().includes(search.toLowerCase()) ||
      item.Laptop_discount_price?.toString().includes(search.toLowerCase()) ||
      item.Laptop_description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="laptop-container">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <br />
      <h1 className="laptop-heading">The Best Budget Laptops for 2025</h1>
      <br />
      <h3 className="laptop-description">
        Affordable and reliable, budget laptops offer a perfect balance of
        performance and value. Ideal for everyday tasks like browsing, studying,
        and office work, these laptops provide essential features without
        breaking the bank. Get efficiency and functionality at an economical
        price!
      </h3>
      <br />
      <div className="container">
        <div className="col-xs-8 col-md-8 bootstrap snippets bootdeys">
          {error && <p className="error-message">{error}</p>}
          {/* Mapping operation is stating from here onwards */}
          {Array.isArray(filteredData) && filteredData.length > 0 ? (
            filteredData.map((laptops) => (
              <div
                key={laptops._id}
                className="product-content product-wrap clearfix"
              >
                <div className="product-image">
                  <img
                    src={`${process.env.REACT_APP_API_BASE_URL}${laptops.Laptop_image_small}`}
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
                        to={`/BudgetLaptopDetails/${laptops._id}`}
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
}

export default BudgetLaptos;
