import React, { useEffect, useState, useContext } from "react";
import { SearchContext } from "../../SearchContext.js";
import { useNavigate, Link } from "react-router-dom";

function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/getAllOrders`,
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
        setOrders(data.orders || []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching Order details:", error);
        setError("User  is not logged in. Please try after login.");
      }
    };

    fetchOrderDetails();
  }, []);

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <b>
          <big>
            Order Page <br />
          </big>
        </b>
      </h1>
      <br />
      {error && <div className="alert alert-danger">{error}</div>}

      <table striped bordered hover id="orderTable">
        <thead>
          <tr>
            <th>Si_No</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Address</th>
            <th>PinCode</th>
            <th>Mobile No</th>
            <th>Place</th>
            <th>Total Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .filter((item) => {
              const lowerSearch = search.toLowerCase();

              return lowerSearch === ""
                ? true
                : item?.userId?.name?.toLowerCase().includes(lowerSearch) ||
                    item?.userId?.email?.toLowerCase().includes(lowerSearch) ||
                    item?.deliveryDetails?.mobile
                      ?.toString()
                      .includes(lowerSearch) ||
                    item?.deliveryDetails?.pincode
                      ?.toString()
                      .includes(lowerSearch) ||
                    item?.deliveryDetails?.address
                      ?.toLowerCase()
                      .includes(lowerSearch) ||
                    item?.deliveryDetails?.place
                      ?.toLowerCase()
                      .includes(lowerSearch) ||
                    item?.deliveryDetails?.totalAmount
                      ?.toString()
                      .includes(lowerSearch) ||
                    item?.paymentMethod?.toLowerCase().includes(lowerSearch) ||
                    item?.status?.toLowerCase().includes(lowerSearch) ||
                    new Date(item?.createdAt)
                      .toLocaleString()
                      .toLowerCase()
                      .includes(lowerSearch) ||
                    item?.products?.some(
                      (product) =>
                        product?.name?.toLowerCase().includes(lowerSearch) ||
                        product?.quantity?.toString().includes(lowerSearch)
                    );
            })
            .map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>

                <td>
                  {order.products.map((product, idx) => (
                    <div key={idx}>
                      {product.name} Quantity: {product.quantity}
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;
