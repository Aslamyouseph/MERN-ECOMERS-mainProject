import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingStudentLaptopss from "../ManageLaptop/UpdatingLaptops/StudentLaptopUpdating";

function UpdatingStudentLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingStudentLaptopss />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdatingStudentLaptop;
