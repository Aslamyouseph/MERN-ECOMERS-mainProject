import React, { useState, useEffect } from "react";
import "./StudentsLaptops.css";
import { Link } from "react-router-dom";

function StudentsLaptops() {
  const [laptops, setLaptops] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/admin/getStudentsLaptops",
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

  return (
    <div className="laptop-container">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <br />
      <h1 className="laptop-heading">The Best Students Laptops for 2025</h1>
      <br />
      <h3 className="laptop-description">
        Designed for learning and productivity, student laptops offer a perfect
        blend of performance, portability, and battery life. Ideal for online
        classes, assignments, and research, these laptops provide smooth
        multitasking and reliable performance at an affordable price. Stay
        connected and study smarter with the right laptop for your education!
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
                        to={`/StudentLaptopDetails/${laptops._id}`}
                        className="btn btn-success"
                      >
                        View More
                      </Link>
                      <a href="#" className="btn btn-success">
                        Add To Cart
                      </a>
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

export default StudentsLaptops;
