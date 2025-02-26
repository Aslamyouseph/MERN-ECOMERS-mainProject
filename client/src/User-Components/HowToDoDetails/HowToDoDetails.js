import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HowToDoDetails.css";

function HowToDoDetails() {
  const { id } = useParams(); // Get the particular ID from the URL
  const [HowToDODetails, setHowToDODetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHowToDoDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/getHowToDoDetails/${id}`,
          {
            method: "GET",
            credentials: "include", // Ensures authentication session is used
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setHowToDODetails(data.HowToDODetails); // Ensure backend returns correct structure
      } catch (error) {
        console.error("Error fetching HowToDo details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchHowToDoDetails();
  }, [id]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Ensure we have data before rendering
  if (!HowToDODetails) {
    return <p className="loading-message">Loading...</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <b>
          <big>How-To</big>
        </b>
      </h1>
      <br />
      <div className="how-to-container">
        <div className="how-to-heading">
          <h1>{HowToDODetails.HowToDo_title}</h1>
        </div>
        <br />
        <br />
        <div className="HowToDoContainer">
          <img
            src={`http://localhost:5000${HowToDODetails.HowToDo_image_large}`}
            alt={HowToDODetails.HowToDo_title}
            className="HowToImage"
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              e.target.style.display = "none";
            }}
          />
        </div>
        <br />
        <br />
        <div className="how-to-content">
          <p className="how-to-Content">{HowToDODetails.HowToDo_Details}</p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default HowToDoDetails;
