import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import lappora from "../../User-images/lappora_icon.png"; // Importing the logo image
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Enable routing
import { useState } from "react";
import { useEffect } from "react";
import "./navBar.css";

function NavScrollExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sessionName, setSessionName] = useState("");
  const [cartDetails, setCartDetails] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate();
  // TODO:This section is used to check the user is logged or not
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/checksection`,
          {
            method: "GET",
            credentials: "include", // Ensure cookies are sent
          }
        );

        const data = await res.json();
        // Storing the session user name in to a state
        setSessionName(data.user.name);
        // console.log("data", data);
        // console.log("data Name", data.user.name);
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/logout`,
        {
          method: "POST", // Ensure your backend supports this method
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        localStorage.removeItem("user"); // Remove user from localStorage
        navigate("/login"); // Redirect to login page
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };
  useEffect(() => {
    const fetchCartDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/user/getCartDetails`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        console.log("API Response:", data);
        setCartDetails(data.cartDetails || []); // Ensure cartDetails is set to an array
        setTotalQuantity(data.totalQuantity || 0); // Set total quantity
      } catch (error) {
        console.error("Error fetching cart details:", error);
      }
    };
    fetchCartDetails();
  }, []);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Nav.Link as={Link} to="/">
            <img
              src={lappora}
              alt="Lappora Logo"
              style={{ height: "70px", width: "auto" }}
            />
          </Nav.Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown
                title="Laptop Categories"
                id="navbarScrollingDropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item as={Link} to="/gamingLaptops">
                  Gaming Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/BusinessLaptops">
                  Business Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/BudgetLaptops">
                  Budget Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/StudentLaptops">
                  Student Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Tablets">
                  Who need tablets
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/TwoInOne">
                  2 in one
                </NavDropdown.Item>
              </NavDropdown>
              {/* TODO:The cart and the orderSection is only visible for the logged users */}
              {isLoggedIn && (
                <>
                  <Nav.Link as={Link} to="/Cart">
                    Cart Section{" "}
                    <span className="badge bg-danger">
                      {totalQuantity} {/* Use totalQuantity state */}
                    </span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/OrderPage">
                    Order Section
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/HowToDO">
                How To
              </Nav.Link>
              <Nav.Link as={Link} to="/service">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/ContactUs">
                Contact Us
              </Nav.Link>

              <Dropdown className="Account-dropdown">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="custom-dropdown"
                >
                  {/* If there is a user logged then the name will display otherwise Account will display */}
                  {isLoggedIn ? sessionName : "Account"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* This is used to dynamically display the login or the logout button */}
                  {!isLoggedIn ? (
                    <Dropdown.Item as={Link} to="/login">
                      Login
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
