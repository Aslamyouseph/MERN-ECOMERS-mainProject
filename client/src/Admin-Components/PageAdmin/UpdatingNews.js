import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingNewss from "../ManageNews/UpdatingNews";

function UpdatingNews() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingNewss />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdatingNews;
