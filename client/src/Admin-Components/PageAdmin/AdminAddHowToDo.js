import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import HowToDoPage from "../ManageHowToDo/AdminAddHowToDo";
function AdminAddHowToDos() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <HowToDoPage /> {/*This is used to import the How to do page*/}
    </div>
  );
}

export default AdminAddHowToDos;
