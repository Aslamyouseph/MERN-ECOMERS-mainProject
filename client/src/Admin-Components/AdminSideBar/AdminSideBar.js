import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaUser,
  FaCog,
  FaBell,
  FaQuestionCircle,
  FaTachometerAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaPlus,
  FaTrash,
  FaEdit,
  FaNewspaper,
  FaListAlt,
  FaBox,
  FaShoppingCart,
  FaEnvelope,
  FaUndo,
  FaEye,
  FaHome,
} from "react-icons/fa";
import "./AdminSideBar.css";

function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    manageLaptops: false,
    addLaptop: false,
    removeLaptop: false,
    updateLaptop: false,
    manageNews: false,
    manageHowTODO: false,
    viewProducts: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  return (
    <div className="admin-sidebar-container">
      <h1 className="admin-slideHead">Administrator Portal</h1>

      <hr className="admin-divider" />

      {/* Overlay when sidebar is open */}
      {isOpen && <div className="admin-overlay" onClick={toggleSidebar}></div>}

      {/* Hamburger Icon */}
      <div className="admin-hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <div className={`admin-sidebar ${isOpen ? "admin-open" : ""}`}>
        <div className="admin-close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </div>

        <ul className="admin-menu">
          <li>
            <Link to="/AdminHome" className="admin-support-item">
              <FaHome className="admin-icon" /> Admin Home
            </Link>
          </li>
          {/* Manage Laptops Dropdown */}
          <li
            className="admin-dropdown-header"
            onClick={() => toggleDropdown("manageLaptops")}
          >
            <FaTachometerAlt className="admin-icon" /> Manage Laptops
            <FaChevronDown
              className={`admin-dropdown-icon ${
                dropdowns.manageLaptops ? "rotate" : ""
              }`}
            />
          </li>

          {dropdowns.manageLaptops && (
            <ul className="admin-dropdown-menu">
              {/* Add Laptop with Sub-dropdown */}
              <li
                className="admin-dropdown-header"
                onClick={() => toggleDropdown("addLaptop")}
              >
                <FaPlus className="admin-icon" /> Add Laptop
                <FaChevronDown
                  className={`admin-dropdown-icon ${
                    dropdowns.addLaptop ? "rotate" : ""
                  }`}
                />
              </li>

              {dropdowns.addLaptop && (
                <ul className="admin-dropdown-menu">
                  <li>
                    <Link
                      to="/AddingGamingLaptops"
                      className="admin-dropdown-item"
                    >
                      🎮 Gaming Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AddBusinessLaptops"
                      className="admin-dropdown-item"
                    >
                      📈 Business Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AddBudgetLaptops"
                      className="admin-dropdown-item"
                    >
                      💰 Budget Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/AddStudentLaptops"
                      className="admin-dropdown-item"
                    >
                      🎓 Student Laptop
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddingTablets" className="admin-dropdown-item">
                      📱 Tablets
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddingTwoInOne" className="admin-dropdown-item">
                      💻 2-in-1 Laptops
                    </Link>
                  </li>
                </ul>
              )}

              {/* Remove Laptop Section */}
              <li
                className="admin-dropdown-header"
                onClick={() => toggleDropdown("removeLaptop")}
              >
                <FaTrash className="admin-icon" /> Remove & Update Laptop
                <FaChevronDown
                  className={`admin-dropdown-icon ${
                    dropdowns.removeLaptop ? "rotate" : ""
                  }`}
                />
              </li>

              {dropdowns.removeLaptop && (
                <ul className="admin-dropdown-menu">
                  <li>
                    <Link
                      to="/RemoveUpdateGamingLaptops"
                      className="admin-dropdown-item"
                    >
                      🎮 Gaming Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RemoveUpdateBusinessLaptops"
                      className="admin-dropdown-item"
                    >
                      📈 Business Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RemoveUpdateBudgetLaptops"
                      className="admin-dropdown-item"
                    >
                      💰 Budget Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RemoveUpdateStudentLaptops"
                      className="admin-dropdown-item"
                    >
                      🎓 Student Laptop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RemoveUpdateTablets"
                      className="admin-dropdown-item"
                    >
                      📱 Tablets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/RemoveUpdateTwoInOne"
                      className="admin-dropdown-item"
                    >
                      💻 2-in-1 Laptops
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          )}

          {/* Manage News Dropdown */}
          <li
            className="admin-dropdown-header"
            onClick={() => toggleDropdown("manageNews")}
          >
            <FaNewspaper className="admin-icon" /> Manage News
            <FaChevronDown
              className={`admin-dropdown-icon ${
                dropdowns.manageNews ? "rotate" : ""
              }`}
            />
          </li>

          {dropdowns.manageNews && (
            <ul className="admin-dropdown-menu">
              <li>
                <Link to="/AdminAddNews" className="admin-dropdown-item">
                  ➕ Add News
                </Link>
              </li>
              <li>
                <Link to="/DeleteUpdateNews" className="admin-dropdown-item">
                  ❌ Remove & Update News
                </Link>
              </li>
            </ul>
          )}

          {/* Manage HowTODO Dropdown */}
          <li
            className="admin-dropdown-header"
            onClick={() => toggleDropdown("manageHowTODO")}
          >
            <FaListAlt className="admin-icon" /> Manage HowToDO
            <FaChevronDown
              className={`admin-dropdown-icon ${
                dropdowns.manageHowTODO ? "rotate" : ""
              }`}
            />
          </li>

          {dropdowns.manageHowTODO && (
            <ul className="admin-dropdown-menu">
              <li>
                <Link to="/AdminAddHowToDo" className="admin-dropdown-item">
                  ➕ Add HowToDO
                </Link>
              </li>
              <li>
                <Link to="/DeleteUpdateHowToDo" className="admin-dropdown-item">
                  ❌Remove & Update HowToDO
                </Link>
              </li>
            </ul>
          )}

          {/* View Products Dropdown */}
          <li
            className="admin-dropdown-header"
            onClick={() => toggleDropdown("viewProducts")}
          >
            <FaBox className="admin-icon" /> View Products
            <FaChevronDown
              className={`admin-dropdown-icon ${
                dropdowns.viewProducts ? "rotate" : ""
              }`}
            />
          </li>

          {dropdowns.viewProducts && (
            <ul className="admin-dropdown-menu">
              <li>
                <Link to="/gamingLaptops" className="admin-dropdown-item">
                  🎮 Gaming Laptops
                </Link>
              </li>
              <li>
                <Link to="/BusinessLaptops" className="admin-dropdown-item">
                  🏢 Business Laptops
                </Link>
              </li>
              <li>
                <Link to="/BudgetLaptops" className="admin-dropdown-item">
                  💰 Budget Laptops
                </Link>
              </li>
              <li>
                <Link to="/StudentLaptops" className="admin-dropdown-item">
                  🎓 Student Laptops
                </Link>
              </li>
              <li>
                <Link to="/Tablets" className="admin-dropdown-item">
                  📱 Tablets
                </Link>
              </li>
              <li>
                <Link to="/TwoInOne" className="admin-dropdown-item">
                  💻 2-in-1 Laptops
                </Link>
              </li>
            </ul>
          )}

          <li>
            <Link to="/AdminViewNews" className="admin-support-item">
              <FaNewspaper className="admin-icon" /> View News
            </Link>
          </li>
          <li>
            <Link to="/AdminViewHowToDo" className="admin-support-item">
              <FaListAlt className="admin-icon" /> View HowToDo
            </Link>
          </li>
          <li>
            <Link to="/UserAccount" className="admin-support-item">
              <FaUser className="admin-icon" /> User Account
            </Link>
          </li>
          <li>
            <Link to="/AdminViewReviews" className="admin-support-item">
              <FaBell className="admin-icon" /> User Review
            </Link>
          </li>
          <li>
            <Link to="/AdminUserContact" className="admin-support-item">
              <FaEnvelope className="admin-icon" /> User Contact
            </Link>
          </li>
          <li>
            <Link to="/AdminReturnRefund" className="admin-support-item">
              <FaUndo className="admin-icon" /> Return & Refunds
            </Link>
          </li>
          <li>
            <Link to="/AdminAllOrders" className="admin-support-item">
              <FaShoppingCart className="admin-icon" /> All Orders
            </Link>
          </li>
          <li>
            <Link to="/" className="admin-support-item">
              <FaEye className="admin-icon" /> View Website
            </Link>
          </li>
          <li>
            <Link to="/login" className="admin-logout-link">
              <FaSignOutAlt className="admin-icon" /> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavBar;
