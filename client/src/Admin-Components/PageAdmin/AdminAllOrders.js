import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AllOrders from "../AdminAllOrders/AdminAllOrders";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";

function AdminAllOrders() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <AllOrders /> {/*This is used to import the All orders page*/}
    </div>
  );
}

export default AdminAllOrders;
