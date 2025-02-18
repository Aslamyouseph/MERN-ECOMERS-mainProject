import React from "react";
import "./AdminAllOrders.css";

function AdminAllOrders() {
  const orders = [
    {
      id: 1,
      date: "2025-02-18",
      name: "John Doe",
      email: "john@example.com",
      products: "Laptop - Dell Inspiron 15",
      address: "123, ABC Street",
      pinCode: "682001",
      mobile: "9876543210",
      place: "Ernakulam",
      amount: "₹55,000",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      id: 2,
      date: "2025-02-17",
      name: "Jane Smith",
      email: "jane@example.com",
      products: "HP Pavilion 14",
      address: "456, XYZ Avenue",
      pinCode: "682002",
      mobile: "9876543211",
      place: "Kochi",
      amount: "₹60,000",
      paymentMethod: "UPI",
      status: "Shipped",
    },
    {
      id: 3,
      date: "2025-02-16",
      name: "Arun Kumar",
      email: "arun@example.com",
      products: "MacBook Air M2",
      address: "789, LMN Road",
      pinCode: "682003",
      mobile: "9876543212",
      place: "Thrissur",
      amount: "₹1,20,000",
      paymentMethod: "Cash on Delivery",
      status: "Shipped",
    },
  ];

  return (
    <div>
      <div className="admin-container">
        <br />
        <h1 className="admin-title">All Orders</h1>
        <br />
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Products Details</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th>Mobile No</th>
                <th>Place</th>
                <th>Total Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.products}</td>
                  <td>{order.address}</td>
                  <td>{order.pinCode}</td>
                  <td>{order.mobile}</td>
                  <td>{order.place}</td>
                  <td>{order.amount}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{order.status}</td>
                  <td>
                    <button className="approve-btn">Approve</button>
                    <button className="reject-btn">Reject</button>
                  </td>
                  <td>
                    <button className="Delete-btn">Delete</button>
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

export default AdminAllOrders;
