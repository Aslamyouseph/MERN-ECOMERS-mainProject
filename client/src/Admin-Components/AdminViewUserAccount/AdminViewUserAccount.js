import React, { useState, useEffect, useContext } from "react";
import "./AdminViewUserAccount.css"; // Import CSS file
import { SearchContext } from "../../SearchContext.js";

function AdminViewUserAccount() {
  const [users, setUsers] = useState([]); // State to store users
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // Track the item being deleted
  const { search } = useContext(SearchContext);

  // Fetch user details from the database
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/admin/getUsersDetails",
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await res.json();
        setUsers(data.users || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchUserDetails();
  }, []);

  // Function to delete a user
  const handleDelete = async (user) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );
    if (!confirmDelete) return;

    setDeletingId(user._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/deleteUserDetails/${user._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers((prevUsers) =>
        prevUsers.filter((item) => item._id !== user._id)
      );

      alert("User details deleted successfully!");
    } catch (error) {
      console.error("Error deleting user details:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin View User Accounts</h1>

      {error && <p className="error-message">{error}</p>}
      {loading ? (
        <p className="loading-message">Loading user details...</p>
      ) : (
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>SiNo</th>
                <th>UserID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5">No users found.</td>
                </tr>
              ) : (
                users
                  .filter((item) => {
                    const lowerSearch = search.toLowerCase();
                    return lowerSearch === ""
                      ? true
                      : item.name.toLowerCase().includes(lowerSearch) ||
                          item.phone.toString().includes(lowerSearch) ||
                          item._id.toString().includes(lowerSearch) ||
                          item.email.toLowerCase().includes(lowerSearch);
                  })
                  .map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(user)}
                          disabled={deletingId === user._id}
                        >
                          {deletingId === user._id ? "Deleting..." : "Delete"}
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
  );
}

export default AdminViewUserAccount;
