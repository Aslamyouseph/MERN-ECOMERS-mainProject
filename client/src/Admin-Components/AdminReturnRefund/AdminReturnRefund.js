import React, { useState, useEffect, useContext } from "react";
import "./AdminReturnRefund.css";
import { SearchContext } from "../../SearchContext.js";

function AdminReturnRefund() {
  const [returnRefund, setReturnRefund] = useState([]); // State to store return & refund requests
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // Track the item being deleted
  const { search } = useContext(SearchContext);

  // Fetch return & refund details from the database
  useEffect(() => {
    const fetchReturnRefund = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getReturnRefund`,
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
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/deleteReturnRefund/${request._id}`,
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
                  returnRefund
                    .filter((item) => {
                      const lowerSearch = search.toLowerCase();
                      return lowerSearch === ""
                        ? true
                        : item.phone.toString().includes(lowerSearch) ||
                            item.orderId.toString().includes(lowerSearch) ||
                            item._id.toString().includes(lowerSearch) ||
                            item.reason.toLowerCase().includes(lowerSearch);
                    })
                    .map((request, index) => (
                      <tr key={request._id}>
                        <td>{index + 1}</td>
                        <td>{request.orderId}</td>
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
