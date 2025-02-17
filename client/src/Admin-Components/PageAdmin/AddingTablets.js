import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddingTablets from "../ManageLaptop/AddingLaptops/AddingTablets";
function AddingTablet() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AddingTablets /> {/*This is used to import the adding Tablets page*/}
    </div>
  );
}

export default AddingTablet;
