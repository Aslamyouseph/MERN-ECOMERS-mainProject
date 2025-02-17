import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateGamingLaptops from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateGamingLaptops";
function RemoveUpdateGamingLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update gaming laptops page*/}
      <RemoveUpdateGamingLaptops />
    </div>
  );
}

export default RemoveUpdateGamingLaptop;
