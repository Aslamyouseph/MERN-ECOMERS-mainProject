import React, { useState, useEffect, useContext } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../SearchContext.js";

function News() {
  const [News, setNews] = useState([]);
  const [error, setError] = useState("");

  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getNews`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setNews(data.News);
      } catch (error) {
        console.error("Error fetching News details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchNewsDetails();
  }, []);

  // TODO: Filter the news list based on the search input (title match)
  const filteredData = News.filter((item) =>
    item.News_title?.toLowerCase().includes(search.toLowerCase())
  );

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

        {/*TODO:Display filtered news data based on search title */}
        {filteredData.length > 0 ? (
          filteredData.map((newsItem) => (
            <div className="card-main h-100" key={newsItem._id}>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${newsItem.News_image_small}`}
                alt={newsItem.News_title}
                className="card-img"
                onError={(e) => {
                  console.error("Image failed to load:", e.target.src);
                  e.target.style.display = "none";
                }}
              />
              <div className="card-bodySection">
                <h5 className="card-heading">{newsItem.News_title}</h5>
                <p className="card-para">{newsItem.News_description}</p>
              </div>
              <div className="card-footer">
                <Link
                  to={`/NewsDetails/${newsItem._id}`}
                  className="read-more-btn"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No News articles found.</p>
        )}
      </div>
      <br />
    </div>
  );
}

export default News;
