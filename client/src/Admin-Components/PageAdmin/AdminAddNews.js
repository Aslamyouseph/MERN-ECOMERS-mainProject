import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AdminAddNews from "../ManageNews/AdminAddNews";
function AdminAddNew() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AdminAddNews /> {/*This is used to import the add News page*/}
    </div>
  );
}

export default AdminAddNew;
