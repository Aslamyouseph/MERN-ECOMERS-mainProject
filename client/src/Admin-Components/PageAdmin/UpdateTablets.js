import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingTablets from "../ManageLaptop/UpdatingLaptops/Tablets";
function UpdateTablets() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingTablets />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdateTablets;
