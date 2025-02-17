import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddingBudgetLaptops from "../ManageLaptop/AddingLaptops/AddingBudgetLaptops";
function AddingBudgetLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the adding budget  laptops page*/}
      <AddingBudgetLaptops />
    </div>
  );
}

export default AddingBudgetLaptop;
