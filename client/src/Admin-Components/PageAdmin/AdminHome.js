import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import HomeDesign from "../Admin-Home/HomeDesign";
function AdminHome() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <HomeDesign /> {/*This is used to import the home page design*/}
    </div>
  );
}

export default AdminHome;
