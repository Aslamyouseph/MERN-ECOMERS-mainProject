import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AdminDeleteUpdateNews from "../ManageNews/AdminDeleteUpdateNews";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function AdminDeleteUpdateNew() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <AdminDeleteUpdateNews />{" "}
      {/*This is used to import the delete update news page*/}
    </div>
  );
}

export default AdminDeleteUpdateNew;
