import React, { useState, useEffect, useContext } from "react";
import "./AdminViewUserContact.css";
import { SearchContext } from "../../SearchContext.js";

function AdminViewUserContact() {
  const [usersContact, setUsersContact] = useState([]); // State to store usersContact
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); // Track the item being deleted
  const { search } = useContext(SearchContext);

  // Fetch users contact details from the database
  useEffect(() => {
    const fetchUsersContactDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getUsersContact`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user contact details");
        }

        const data = await res.json();
        setUsersContact(data.usersContact || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching user contact details:", error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchUsersContactDetails();
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
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/deleteUsersContact/${user._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user contact details");
      }

      setUsersContact((prevUsers) =>
        prevUsers.filter((item) => item._id !== user._id)
      );

      alert("User contact details deleted successfully!");
    } catch (error) {
      console.error("Error deleting user contact details:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };

  return (
    <div className="admin-container">
      <br />
      <h1 className="admin-title">Respond to Users Messages</h1>
      <br />
      {error && <p className="error-message">{error}</p>}
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User_ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Contact</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {usersContact.length === 0 ? (
              <tr>
                <td colSpan="8">No users contact found.</td>
              </tr>
            ) : (
              usersContact
                .filter((item) => {
                  const lowerSearch = search.toLowerCase();
                  return lowerSearch === ""
                    ? true
                    : item.name.toLowerCase().includes(lowerSearch) ||
                        item.phone.toString().includes(lowerSearch) ||
                        item._id.toString().includes(lowerSearch) ||
                        item.email.toLowerCase().includes(lowerSearch) ||
                        item.message.toLowerCase().includes(lowerSearch);
                })
                .map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.message}</td>
                    <td>
                      <button className="Contact-btn">
                        <a
                          className="Contact-btn"
                          href={`https://wa.me/${user.phone}`}
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
    </div>
  );
}

export default AdminViewUserContact;
