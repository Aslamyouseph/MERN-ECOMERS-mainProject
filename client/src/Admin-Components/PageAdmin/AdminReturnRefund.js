import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import ReturnRefund from "../AdminReturnRefund/AdminReturnRefund";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";

function AdminReturnRefund() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <ReturnRefund /> {/*This is used to import the return refund page*/}
    </div>
  );
}

export default AdminReturnRefund;
