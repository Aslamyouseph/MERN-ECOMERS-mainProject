import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AddStudentsLaptops from "../ManageLaptop/AddingLaptops/AddingStudentLaptops";
function AddingStudentsLaptops() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the adding Student laptops page*/}
      <AddStudentsLaptops />
    </div>
  );
}

export default AddingStudentsLaptops;
