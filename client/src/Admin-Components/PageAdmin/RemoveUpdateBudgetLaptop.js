import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateBudgetLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateBudgetLaptops";
function RemoveUpdateBudgetLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update budget laptops page*/}
      <RemoveUpdateBudgetLaptops />
    </div>
  );
}

export default RemoveUpdateBudgetLaptop;
