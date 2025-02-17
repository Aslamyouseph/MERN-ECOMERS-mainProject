import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddingBusinessLaptops from "../ManageLaptop/AddingLaptops/AddingBusinessLaptops";
function AddingBusinessLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the adding Business laptops page*/}
      <AddingBusinessLaptops />
    </div>
  );
}

export default AddingBusinessLaptop;
