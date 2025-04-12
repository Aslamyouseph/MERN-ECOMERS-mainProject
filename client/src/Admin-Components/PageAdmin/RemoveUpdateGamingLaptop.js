import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateGamingLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateGamingLaptops";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";

function RemoveUpdateGamingLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update gaming laptops page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateGamingLaptops />
    </div>
  );
}

export default RemoveUpdateGamingLaptop;
