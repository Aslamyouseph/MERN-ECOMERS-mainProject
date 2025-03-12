import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminDeleteUpdateNews.css";
// Data Table implemented
import Table from "react-bootstrap/Table";
import $ from "jquery";
import "datatables.net-bs5";

function AdminDeleteUpdateNews() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Fetch News details from the database
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/getNews", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setNews(data.News || []);
      } catch (error) {
        console.error("Error fetching News details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchNewsDetails();
  }, []);

  // Delete News from the database
  const handleDelete = async (newsItem) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${newsItem.News_title}?`
    );
    if (!confirmDelete) return;

    setDeletingId(newsItem._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/deleteNewsDetails/${newsItem._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Failed to delete News");

      setNews((prevNews) =>
        prevNews.filter((item) => item._id !== newsItem._id)
      );
      alert("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };
  // Data Table implemented block
  useEffect(() => {
    if (news.length > 0) {
      const table = $("#orderTable").DataTable({
        responsive: true, // Enable responsiveness
        scrollX: true, // Enable horizontal scrolling
        destroy: true, // Prevent duplicate initialization
      });

      return () => {
        if ($.fn.DataTable.isDataTable("#orderTable")) {
          table.destroy(); // Cleanup on component unmount
        }
      };
    }
  }, [news]); // Run only when `laptops` data changes
  return (
    <div>
      <br />
      <h1 className="Managing-heading">Remove or Update News</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="table-container-News">
        <Table striped bordered hover id="orderTable">
          <thead>
            <tr>
              <th>News ID</th>
              <th>Title</th>
              <th>Small Description</th>
              <th>Detailed Description</th>
              <th>Small Image</th>
              <th>Large Image</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem, index) => (
              <tr key={newsItem._id}>
                <td>{index + 1}</td>
                <td>{newsItem.News_title}</td>
                <td>{newsItem.News_description}</td>
                <td>{newsItem.News_Details}</td>
                <td>
                  <img
                    src={`http://localhost:5000${newsItem.News_image_small}`}
                    alt={newsItem.News_title}
                    width="200"
                    height="200px"
                  />
                </td>
                <td>
                  <img
                    src={`http://localhost:5000${newsItem.News_image_large}`}
                    alt={newsItem.News_title}
                    width="200"
                    height="200px"
                  />
                </td>
                <td>
                  {/* Delete Button */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(newsItem)}
                    disabled={deletingId === newsItem._id} // Disable while deleting
                  >
                    {deletingId === newsItem._id ? "Deleting..." : "Delete"}
                  </button>
                  {/* Update Button */}
                  <Link
                    to={`/UpdateNews/${newsItem._id}`}
                    className="update-btn"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default AdminDeleteUpdateNews;
