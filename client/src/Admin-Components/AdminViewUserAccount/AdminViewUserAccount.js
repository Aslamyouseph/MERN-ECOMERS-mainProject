import React from "react";
import "./AdminViewUserAccount.css"; // Import the CSS file

function AdminViewUserAccount() {
  const users = [
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      phone: "9876543210",
      password: "******",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      phone: "8765432109",
      password: "******",
    },
    {
      id: 3,
      username: "mike_ross",
      email: "mike@example.com",
      phone: "7654321098",
      password: "******",
    },
    {
      id: 4,
      username: "sara_connor",
      email: "sara@example.com",
      phone: "6543210987",
      password: "******",
    },
  ];

  return (
    <div className="admin-container">
      <br />
      <h1 className="admin-title">Admin View User Accounts</h1>
      <br />
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Password</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.password}</td>
                <td>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminViewUserAccount;
