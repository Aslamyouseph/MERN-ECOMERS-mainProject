import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateTablets from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateTablets";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function RemoveUpdateTablet() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update tablets page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateTablets />
    </div>
  );
}

export default RemoveUpdateTablet;
