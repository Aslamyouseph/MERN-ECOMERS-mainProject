import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./AdminDeleteUpdateToDo.css";
import { SearchContext } from "../../SearchContext.js";
function AdminDeleteUpdateHowToDo() {
  const [HowToDo, setHowToDo] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const { search } = useContext(SearchContext);
  useEffect(() => {
    const fetchHowToDoDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/getHowToDO", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setHowToDo(data.HowToDO || []);
      } catch (error) {
        console.error("Error fetching HowToDo details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchHowToDoDetails();
  }, []);

  // Delete HowToDo item from the database
  const handleDelete = async (item) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${item.HowToDo_title}"?`
    );
    if (!confirmDelete) return;

    setDeletingId(item._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/deleteHowToDoDetails/${item._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Failed to delete HowToDo");

      setHowToDo((prevHowToDo) =>
        prevHowToDo.filter((howToDoItem) => howToDoItem._id !== item._id)
      );

      alert("HowToDo deleted successfully!");
    } catch (error) {
      console.error("Error deleting HowToDo:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };
  return (
    <div>
      <br />
      <h1 className="Managing-heading">Remove or Update How To Do Section</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="table-container-Laptop">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Title</th>
              <th>Small Description</th>
              <th>Detailed Description</th>
              <th>Small Image</th>
              <th>Large Image</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {/* Search operation is done  */}
            {HowToDo.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.HowToDo_title.toLowerCase().includes(
                    search.toLowerCase()
                  );
            }).map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.HowToDo_title}</td>
                <td>{item.HowToDo_description}</td>
                <td>{item.HowToDo_Details}</td>
                <td>
                  <img
                    src={`http://localhost:5000${item.HowToDo_image_small}`}
                    alt={item.HowToDo_title}
                    width="200"
                    height="200"
                  />
                </td>
                <td>
                  <img
                    src={`http://localhost:5000${item.HowToDo_image_large}`}
                    alt={item.HowToDo_title}
                    width="200"
                    height="200"
                  />
                </td>
                <td>
                  {/* Delete Button */}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item)}
                    disabled={deletingId === item._id}
                  >
                    {deletingId === item._id ? "Deleting..." : "Delete"}
                  </button>
                  {/* Update Button */}
                  <Link
                    to={`/UpdateHowToDo/${item._id}`}
                    className="update-btn"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDeleteUpdateHowToDo;
