import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./RemoveUpdate.css";
import { SearchContext } from "../../../SearchContext.js";

function RemoveUpdateBusinessLaptop() {
  const [laptops, setLaptops] = useState([]);
  const [error, setError] = useState("");
  const { search } = useContext(SearchContext);
  const [deletingId, setDeletingId] = useState(null); // Track the item being deleted
  // This is used to fetch the laptop details from the database
  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getBusinessLaptops`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setLaptops(data.laptops || []);
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchLaptopDetails();
  }, []);
  // This is used to delete the laptop from the  database
  const handleDelete = async (laptop) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${laptop.Laptop_title}?`
    );
    if (!confirmDelete) return;

    setDeletingId(laptop._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/deleteBusinessLaptop/${laptop._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Failed to delete laptop");

      setLaptops((prevLaptops) =>
        prevLaptops.filter((item) => item._id !== laptop._id)
      );

      alert("Laptop deleted successfully!");
    } catch (error) {
      console.error("Error deleting laptop:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };
  return (
    <div>
      <br />
      <h1 className="Managing-heading">Remove or Update Business Laptops</h1>
      {error && <p className="error-message">{error}</p>}

      <div className="table-container-Laptop">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Small Description</th>
              <th>Detailed Description</th>
              <th>Keywords</th>
              <th>Small Image</th>
              <th>Large Image</th>
              <th>Original Price</th>
              <th>Discount Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {laptops
              .filter((item) => {
                const lowerSearch = search.toLowerCase();

                return lowerSearch === ""
                  ? true
                  : item.Laptop_title.toLowerCase().includes(lowerSearch) ||
                      item.Laptop_keywords.some((keyword) =>
                        keyword.toLowerCase().includes(lowerSearch)
                      ) ||
                      item.Laptop_original_price.toString().includes(
                        lowerSearch
                      ) ||
                      item.Laptop_discount_price.toString().includes(
                        lowerSearch
                      );
              })
              .map((laptop, index) => (
                <tr key={laptop._id}>
                  <td>{index + 1}</td>
                  <td>{laptop.Laptop_title}</td>
                  <td>{laptop.Laptop_description}</td>
                  <td>{laptop.Laptop_Details}</td>
                  <td>
                    {laptop.Laptop_keywords?.slice(0, 10).map((keyword, i) => (
                      <span key={i} className="keyword">
                        {keyword}
                        {i < 9 ? ", " : ""}
                      </span>
                    ))}
                  </td>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}${laptop.Laptop_image_small}`}
                      alt={laptop.Laptop_title}
                      width="200px"
                      height="130px"
                    />
                  </td>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}${laptop.Laptop_image_large}`}
                      alt={laptop.Laptop_title}
                      width="200"
                      height="200px"
                    />
                  </td>
                  <td>${laptop.Laptop_original_price}</td>
                  <td>${laptop.Laptop_discount_price}</td>
                  <td>
                    {/* Delete Button */}
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(laptop)}
                      disabled={deletingId === laptop._id} // Disable while deleting
                    >
                      {deletingId === laptop._id ? "Deleting..." : "Delete"}
                    </button>

                    {/* Update Button */}
                    <Link
                      to={`/UpdateBusinessLaptops/${laptop._id}`}
                      className="update-btn"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {laptops.length === 0 && !error && <p>No laptops found.</p>}
      </div>
    </div>
  );
}

export default RemoveUpdateBusinessLaptop;
