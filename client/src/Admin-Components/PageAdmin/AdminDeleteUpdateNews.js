import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AdminDeleteUpdateNews from "../ManageNews/AdminDeleteUpdateNews";
function AdminDeleteUpdateNew() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AdminDeleteUpdateNews />{" "}
      {/*This is used to import the delete update news page*/}
    </div>
  );
}

export default AdminDeleteUpdateNew;
