import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddingGamingLaptops from "../ManageLaptop/AddingLaptops/AddingGamingLaptops";
function AddingGamingLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AddingGamingLaptops />{" "}
      {/*This is used to import the adding Gaming laptops page*/}
    </div>
  );
}

export default AddingGamingLaptop;
