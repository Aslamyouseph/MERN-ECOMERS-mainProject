import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import RemoveUpdateBudgetLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateBudgetLaptops";
function RemoveUpdateBudgetLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update budget laptops page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateBudgetLaptops />
    </div>
  );
}

export default RemoveUpdateBudgetLaptop;
