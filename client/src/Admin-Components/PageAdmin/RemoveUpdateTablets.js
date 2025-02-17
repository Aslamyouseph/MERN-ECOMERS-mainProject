import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateTablets from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateTablets";
function RemoveUpdateTablet() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update tablets page*/}
      <RemoveUpdateTablets />
    </div>
  );
}

export default RemoveUpdateTablet;
