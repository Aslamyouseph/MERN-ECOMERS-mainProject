import React, { useState, useEffect } from "react";
import "./News.css";
import { Link } from "react-router-dom";

function News() {
  const [News, setNews] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/getNews", {
          method: "GET",
          credentials: "include", // Ensures that the session is used for authentication
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        // console.log("gaming laptops from frontend", data);
        setNews(data.News); // Saving the laptops details to the state
      } catch (error) {
        console.error("Error fetching News details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchNewsDetails();
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginTop: "25px",
        }}
      >
        <b>News</b>
      </h1>
      <h4 style={{ textAlign: "center" }}>
        Get the latest technology news and in-depth analysis from the expert
        analysts at Lappora.
      </h4>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <div className="card-container-main">
        {error && <p className="error-message">{error}</p>}
        {/* Mapping operation is stating from here onwards */}
        {Array.isArray(News) && News.length > 0 ? (
          News.map((News) => (
            <div className="card-main h-100">
              <img
                src={`http://localhost:5000${News.News_image_small}`}
                alt={News.News_title}
                className="card-img"
                onError={(e) => {
                  console.error("Image failed to load:", e.target.src);
                }}
              />{" "}
              <div className="card-bodySection">
                <h5 className="card-heading">{News.News_title}</h5>
                <p className="card-para">{News.News_description}</p>
              </div>
              <div className="card-footer">
                <Link to={`/NewsDetails/${News._id}`} className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No News available at the moment.</p>
        )}
      </div>
      <br />
    </div>
  );
}

export default News;
