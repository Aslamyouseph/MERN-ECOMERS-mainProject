import React from "react";
import "./AdminViewUserContact.css";
function AdminViewUserContact() {
  const users = [
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      phone: "9876543210",
      password: "Hello",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      phone: "8765432109",
      password: "Hi",
    },
    {
      id: 3,
      username: "mike_ross",
      email: "mike@example.com",
      phone: "7654321098",
      password: "Hello",
    },
    {
      id: 4,
      username: "sara_connor",
      email: "sara@example.com",
      phone: "6543210987",
      password: "Hi",
    },
  ];
  return (
    <div>
      <div className="admin-container">
        <br />
        <h1 className="admin-title">Respond to Users Messages</h1>
        <br />
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Contact</th>
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
                    <button className="Contact-btn">Contact</button>
                  </td>
                  <td>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminViewUserContact;
