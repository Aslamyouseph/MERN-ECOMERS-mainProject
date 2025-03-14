import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminDeleteUpdateToDo.css";
// Data Table implemented
import Table from "react-bootstrap/Table";
import $ from "jquery";
import "datatables.net-bs5";
function AdminDeleteUpdateHowToDo() {
  const [HowToDo, setHowToDo] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

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
  // Data Table implemented block
  useEffect(() => {
    if (HowToDo.length > 0) {
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
  }, [HowToDo]); // Run only when `laptops` data changes
  return (
    <div>
      <br />
      <h1 className="Managing-heading">Remove or Update How To Do Section</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="table-container-Laptop">
        <Table striped bordered hover id="orderTable">
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
            {HowToDo.map((item, index) => (
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
                    disabled={deletingId === item._id} // Disable while deleting
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
        </Table>
      </div>
    </div>
  );
}

export default AdminDeleteUpdateHowToDo;
