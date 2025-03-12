import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const [cartDetails, setCartDetails] = useState([]);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/user/getCartDetails",
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setCartDetails(data.cartDetails || []);
      } catch (error) {
        console.error("Error fetching cart details:", error);
        setError("User is not logged in. Please log in to continue.");
      }
    };
    fetchCartDetails();
  }, []);

  const totalAmount = cartDetails.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDelete = async (item) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${item.name} from your cart?`
    );
    if (!confirmDelete) return;

    setDeletingId(item._id);

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/deleteCartItem/${item._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!response.ok) throw new Error("Failed to delete cart item");

      setCartDetails((prevCartDetails) =>
        prevCartDetails.filter((cartItem) => cartItem._id !== item._id)
      );
      alert("Cart item deleted successfully!");
    } catch (error) {
      console.error("Error deleting cart item:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleIncrement = async (item) => {
    const updatedQuantity = item.quantity + 1;
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/incrementCartItemQuantity/${item._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: updatedQuantity }),
        }
      );
      if (!response.ok) throw new Error("Failed to update quantity");

      setCartDetails((prevCartDetails) =>
        prevCartDetails.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: updatedQuantity }
            : cartItem
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDecrement = async (item) => {
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/decrementCartItemQuantity/${item._id}`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: updatedQuantity }),
          }
        );

        if (!response.ok) throw new Error("Failed to update quantity");

        setCartDetails((prevCartDetails) =>
          prevCartDetails.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: updatedQuantity }
              : cartItem
          )
        );
      } catch (error) {
        console.error("Error updating quantity:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="cart-container">
      <section>
        <br />
        <div className="cart-card">
          <h2 className="cart-title">Shopping Cart</h2>
          {error && <p className="error-message">{error}</p>}
          <table className="cart-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {cartDetails.length > 0 ? (
                cartDetails.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`http://localhost:5000${item.image}`}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>₹{item.price}</td>
                    <td>
                      <button
                        onClick={() => handleIncrement(item)}
                        className="cartCountIncrement"
                      >
                        +
                      </button>
                      &ensp;&ensp;{item.quantity}&ensp;&ensp;
                      <button
                        onClick={() => handleDecrement(item)}
                        className="cartCountDecrement"
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        disabled={deletingId === item._id}
                        className="btn btn-danger"
                      >
                        {deletingId === item._id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="cart-empty">
                    No products found in the cart.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <hr />
          <div className="cart-footer">
            <h3 className="cart-total">
              <u>Total Price: ₹{totalAmount}</u>
            </h3>
            <Link to={`/PlaceOrder/${totalAmount}`} className="cart-order-btn">
              <b>Place Order</b>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
}

export default Cart;
