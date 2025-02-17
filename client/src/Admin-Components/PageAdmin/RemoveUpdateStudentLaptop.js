import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateStudentLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateStudentLaptops";
function RemoveUpdateStudentLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update student laptops page*/}
      <RemoveUpdateStudentLaptops />
    </div>
  );
}

export default RemoveUpdateStudentLaptop;
