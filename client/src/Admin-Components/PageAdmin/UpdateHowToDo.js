import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import HowToDo from "../ManageHowToDo/UpdateHowToDo";

function UpdateHowToDo() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <HowToDo />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdateHowToDo;
