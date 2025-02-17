//TODO: This three dependency wants to install in package.json
//jquery
//datatables.net-dt
// datatables.net-bs5

import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import $ from "jquery";
import "datatables.net-bs5";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function OrderPage() {
  useEffect(() => {
    setTimeout(() => {
      $("#orderTable").DataTable({
        responsive: true, // Enable responsiveness
        scrollX: true, // Enable horizontal scrolling for small screens
        destroy: true, // Ensure re-initialization is smooth
      });
    }, 100); // Ensuring DOM is ready
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <b>
          <big>Order Page</big>
        </b>
      </h1>
      <br />
      <Table striped bordered hover id="orderTable">
        <thead>
          <tr>
            <th>Si_No</th>
            <th>Date</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>Mobile No</th>
            <th>Place</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2024-02-04</td>
            <td>123 Street</td>
            <td>686693</td>
            <td>9876543210</td>
            <td>City A</td>
            <td>₹10,000</td>
            <td>UPI</td>
            <td>Delivered</td>
            <td>
              <button
                onClick={() => navigate("/OrderProductDisplay")}
                className="btn btn-primary btn-sm"
              >
                View
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2024-02-03</td>
            <td>456 Avenue</td>
            <td>685542</td>
            <td>9876543211</td>
            <td>City B</td>
            <td>₹8,500</td>
            <td>COD</td>
            <td>Pending</td>
            <td>
              <button
                onClick={() => navigate("/OrderProductDisplay")}
                className="btn btn-primary btn-sm"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  );
}

export default OrderPage;
