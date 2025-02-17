import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import NewsPage from "../AdminViewNews/AdminViewNews";
function AdminViewNews() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <NewsPage /> {/*This is used to import the news page*/}
    </div>
  );
}

export default AdminViewNews;
