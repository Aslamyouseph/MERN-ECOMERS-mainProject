import React, { useState, useEffect } from "react";
import "./AdminReturnRefund.css";
function AdminReturnRefund() {
  const [returnRefund, setReturnRefund] = useState([]); // State to store return & refund requests
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // Track the item being deleted

  // Fetch return & refund details from the database
  useEffect(() => {
    const fetchReturnRefund = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/admin/getReturnRefund",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Return & Refund details");
        }

        const data = await res.json();
        setReturnRefund(data.returnRefund || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching Return & Refund details:", error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchReturnRefund();
  }, []);

  // Function to delete a request
  const handleDelete = async (request) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete Return & Refund request for Order ID: ${request.orderId}?`
    );
    if (!confirmDelete) return;

    setDeletingId(request._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/deleteReturnRefund/${request._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Return & Refund request");
      }

      setReturnRefund((prevRequests) =>
        prevRequests.filter((item) => item._id !== request._id)
      );

      alert("Return & Refund request deleted successfully!");
    } catch (error) {
      console.error("Error deleting Return & Refund request:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };

  return (
    <div>
      <div className="admin-container">
        <br />
        <h1 className="admin-title">Return and Refund Requests</h1>
        <br />
        {error && <p className="error-message">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Order ID</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Reason For Returning</th>
                  <th>Contact</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {returnRefund.length === 0 ? (
                  <tr>
                    <td colSpan="7">No Return and Refund Requests found.</td>
                  </tr>
                ) : (
                  returnRefund.map((request) => (
                    <tr key={request._id}>
                      <td>{request._id}</td>
                      <td>{request.orderId}</td>
                      <td>{request.email}</td>
                      <td>{request.phone}</td>
                      <td>{request.reason}</td>
                      <td>
                        <button className="contact-btn">
                          <a
                            className="contact-btn"
                            href={`https://wa.me/${request.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <b>Contact User</b>
                          </a>
                        </button>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(request)}
                          disabled={deletingId === request._id}
                        >
                          {deletingId === request._id
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminReturnRefund;
