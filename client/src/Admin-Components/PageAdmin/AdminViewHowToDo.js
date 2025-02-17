import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import HowToDoPage from "../AdminViewHowToDo/AdminViewHowToDo";
function AdminViewHowToDo() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <HowToDoPage /> {/*This is used to import the how to do page*/}
    </div>
  );
}

export default AdminViewHowToDo;
