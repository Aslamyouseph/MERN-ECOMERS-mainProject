import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingBudgetLaptopss from "../ManageLaptop/UpdatingLaptops/BudgetLaptopUpdate";

function UpdatingBudgetLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingBudgetLaptopss />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdatingBudgetLaptop;
