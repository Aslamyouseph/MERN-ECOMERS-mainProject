import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import DeleteUpdateHowToDo from "../ManageHowToDo/AdminDeleteUpdateHowToDo";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function AdminDeleteUpdateHowToDo() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <DeleteUpdateHowToDo />{" "}
      {/*This is used to import the Delete update how to do page*/}
    </div>
  );
}

export default AdminDeleteUpdateHowToDo;
