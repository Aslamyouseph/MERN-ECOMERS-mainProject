import React, { useState, useEffect, useContext } from "react"; // Import useState and useEffect
import "./AdminAllOrders.css";
import { SearchContext } from "../../SearchContext.js";

function AdminAllOrders() {
  const [orders, setOrders] = useState([]); // Corrected to lowercase 'orders'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const { search } = useContext(SearchContext);

  // Fetch Order details from the database
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getAllOrders`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Order details");
        }

        const data = await res.json();
        console.log("Order details:", data);
        setOrders(data.Orders || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching Order details:", error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false); // Stop loading after fetch completes
      }
    };

    fetchOrderDetails();
  }, []);

  // Function to delete a request
  const handleDelete = async (order) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete order ${order._id}?`
    );
    if (!confirmDelete) return;

    setDeletingId(order._id); // Disable button for the item being deleted

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/deleteOrder/${order._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete this Order");
      }

      setOrders((prevOrders) =>
        prevOrders.filter((item) => item._id !== order._id)
      );

      alert("Order deleted successfully!");
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null); // Re-enable button after operation
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  // Approving the order
  const handleApprove = async (order) => {
    const confirmApprove = window.confirm(
      `Are you sure you want to approve order ${order._id}?`
    );
    if (!confirmApprove) return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/ApproveOrder/${order._id}`,
        {
          method: "put",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to approve this Order");
      }

      alert("Order approved successfully!");
      // Optionally, you can refresh the orders list or update the state here
    } catch (error) {
      console.error("Error approving order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Rejecting the order
  const handleReject = async (order) => {
    const confirmReject = window.confirm(
      `Are you sure you want to reject order ${order._id}?`
    );
    if (!confirmReject) return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/RejectOrder/${order._id}`,
        {
          method: "put",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reject this Order");
      }

      alert("Order rejected successfully!");
      // Optionally, you can refresh the orders list or update the state here
    } catch (error) {
      console.error("Error rejecting order:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  //Deliver the order
  const handleDelivered = async (order) => {
    const confirmDeliver = window.confirm(
      `Are you sure you want to Deliver order ${order._id}?`
    );
    if (!confirmDeliver) return;

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/DeliverOrder/${order._id}`,
        {
          method: "put",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to Deliver this Order");
      }

      alert("Order Deliver successfully!");
      // Optionally, you can refresh the orders list or update the state here
    } catch (error) {
      console.error("Error Deliver order:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="admin-container">
      <br />
      <h1 className="admin-title">All Orders</h1>
      <br />
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Products ID & Quantity</th>
              <th>Address</th>
              <th>Pin Code</th>
              <th>Mobile No</th>
              <th>Place</th>
              <th>Total Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Contact</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) => {
                const lowerSearch = search.toLowerCase();
                if (lowerSearch === "") return true;

                return (
                  order.userId?.name?.toLowerCase().includes(lowerSearch) ||
                  order.userId?.email?.toLowerCase().includes(lowerSearch) ||
                  order.deliveryDetails?.mobile
                    ?.toString()
                    .includes(lowerSearch) ||
                  order.deliveryDetails?.pincode
                    ?.toString()
                    .includes(lowerSearch) ||
                  order.deliveryDetails?.address
                    ?.toLowerCase()
                    .includes(lowerSearch) ||
                  order.deliveryDetails?.place
                    ?.toLowerCase()
                    .includes(lowerSearch) ||
                  order.deliveryDetails?.totalAmount
                    ?.toString()
                    .includes(lowerSearch) ||
                  order.paymentMethod?.toLowerCase().includes(lowerSearch) ||
                  order.status?.toLowerCase().includes(lowerSearch) ||
                  new Date(order.createdAt)
                    .toLocaleString()
                    .toLowerCase()
                    .includes(lowerSearch) ||
                  order.products?.some(
                    (product) =>
                      product.name?.toLowerCase().includes(lowerSearch) ||
                      product.quantity?.toString().includes(lowerSearch)
                  )
                );
              })
              .map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>{order.userId.name}</td>
                  <td>{order.userId.email}</td>
                  <td>
                    {order.products.map((product, idx) => (
                      <div key={idx}>
                        {product.name ? product.name : "Name not available"}{" "}
                        Quantity: {product.quantity}
                        <hr />
                      </div>
                    ))}
                  </td>
                  <td>{order.deliveryDetails.address}</td>
                  <td>{order.deliveryDetails.pincode}</td>
                  <td>{order.deliveryDetails.mobile}</td>
                  <td>{order.deliveryDetails.place}</td>
                  <td>{order.deliveryDetails.totalAmount}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(order)}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleReject(order)}
                    >
                      Reject
                    </button>
                    <button
                      className="Delivered-btn"
                      onClick={() => handleDelivered(order)}
                    >
                      Delivered
                    </button>
                  </td>
                  <td>
                    <button
                      style={{ backgroundColor: "blue", borderRadius: "15px" }}
                    >
                      <a
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        href={`https://wa.me/${order.deliveryDetails.mobile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <b>Contact</b>
                      </a>
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(order)} // Corrected to use order
                      disabled={deletingId === order._id}
                    >
                      {deletingId === order._id ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminAllOrders;
