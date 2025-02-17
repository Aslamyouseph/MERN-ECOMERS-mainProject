import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import DeleteUpdateHowToDo from "../ManageHowToDo/AdminDeleteUpdateHowToDo";
function AdminDeleteUpdateHowToDo() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <DeleteUpdateHowToDo />{" "}
      {/*This is used to import the Delete update how to do page*/}
    </div>
  );
}

export default AdminDeleteUpdateHowToDo;
