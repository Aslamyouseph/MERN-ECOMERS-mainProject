import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import RemoveUpdateTwoInOnes from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateTwoInOne";
function RemoveUpdateTwoInOne() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update two in one page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateTwoInOnes />
    </div>
  );
}

export default RemoveUpdateTwoInOne;
