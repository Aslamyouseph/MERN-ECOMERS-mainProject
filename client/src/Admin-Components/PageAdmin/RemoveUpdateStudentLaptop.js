import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import RemoveUpdateStudentLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateStudentLaptops";
function RemoveUpdateStudentLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update student laptops page*/}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <RemoveUpdateStudentLaptops />
    </div>
  );
}

export default RemoveUpdateStudentLaptop;
