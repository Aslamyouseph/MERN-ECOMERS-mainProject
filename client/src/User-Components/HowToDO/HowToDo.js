import React, { useState, useEffect, useContext } from "react";
import "./HowToDO.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../SearchContext.js";

function HowToDo() {
  const [HowToDO, setHowToDO] = useState([]);
  const [error, setError] = useState("");
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchHowToDODetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/getHowToDO", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setHowToDO(data.HowToDO);
      } catch (error) {
        console.error("Error fetching HowToDO details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchHowToDODetails();
  }, []);

  // TODO:Filter based on title
  const filteredData = HowToDO.filter((item) =>
    item.HowToDo_title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <b>
          <big>How-To</big>
        </b>
      </h1>
      <h4 style={{ textAlign: "center" }}>
        How do we make the unknown familiar.
      </h4>
      <br />
      <h5 style={{ paddingLeft: "5%", fontFamily: "inherit", color: "black" }}>
        <b>
          <big>Latest How-To :</big>
        </b>
      </h5>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />

      <div className="mainSection">
        {error && <p className="error-message">{error}</p>}

        {filteredData.length > 0 ? (
          filteredData.map((item) => <Card key={item._id} item={item} />)
        ) : (
          <p>No How-To articles found.</p>
        )}
      </div>
      <br />
    </div>
  );
}

function Card({ item }) {
  return (
    <div style={{ marginBottom: "20px" }} className="card-row">
      <div className="card-image">
        <img
          src={`http://localhost:5000${item.HowToDo_image_small}`}
          alt={item.HowToDo_title}
          className="Card Image"
          onError={(e) => {
            console.error("Image failed to load:", e.target.src);
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="card-content">
        <Link
          to={`/HowToDoDetails/${item._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <h5 className="card-title">{item.HowToDo_title}</h5>
        </Link>
        <p className="card-text">{item.HowToDo_description}</p>
      </div>
      <br />
    </div>
  );
}

export default HowToDo;
