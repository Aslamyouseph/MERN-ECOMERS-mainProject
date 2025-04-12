import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateBusinessLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateBusinessLaptop";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function RemoveUpdateBusinessLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update business laptops page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateBusinessLaptops />
    </div>
  );
}

export default RemoveUpdateBusinessLaptop;
