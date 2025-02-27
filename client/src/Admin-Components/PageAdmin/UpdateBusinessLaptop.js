import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingBusinessLaptopss from "../ManageLaptop/UpdatingLaptops/BusinessLaptopUpdate";

function UpdateBusinessLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingBusinessLaptopss />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdateBusinessLaptop;
