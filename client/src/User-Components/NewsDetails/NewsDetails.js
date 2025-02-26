import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./NewsDetails.css";

function NewsDetails() {
  const { id } = useParams(); // Get the particular id of the product from the URL
  const [NewsDetails, setNewsDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/getNewsDetails/${id}`,
          {
            method: "GET",
            credentials: "include", // Ensures that the session is used for authentication
          }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setNewsDetails(data.NewsDetails); // Ensure backend returns correct structure
      } catch (error) {
        console.error("Error fetching News details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchNewsDetails();
  }, [id]);

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
        NEWS
      </h1>
      <br />

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {NewsDetails ? (
        <>
          <div className="NewsContainer">
            <h1 className="NewsHeading">{NewsDetails.News_title}</h1>
            <br />
            <br />
            <div className="imageContainer">
              <img
                src={`http://localhost:5000${NewsDetails.News_image_large}`}
                alt={NewsDetails.News_title}
                className="NewsImage"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="NewsContent">
            <p>{NewsDetails.News_Details}</p>
            <br />
            <br />
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center", fontSize: "20px" }}>Loading News...</p>
      )}
    </div>
  );
}

export default NewsDetails;
