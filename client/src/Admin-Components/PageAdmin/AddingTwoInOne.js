import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddingTwoInOne from "../ManageLaptop/AddingLaptops/AddingTwoInOne";
function AddingTwoInOnes() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AddingTwoInOne /> {/*This is used to import the adding two in one page*/}
    </div>
  );
}

export default AddingTwoInOnes;
