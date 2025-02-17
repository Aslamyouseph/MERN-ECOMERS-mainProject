import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import RemoveUpdateTwoInOnes from "../ManageLaptop/RemovUpdatingLaptops/RemoveUpdateTwoInOne";
function RemoveUpdateTwoInOne() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      {/*This is used to import the remove update two in one page*/}
      <RemoveUpdateTwoInOnes />
    </div>
  );
}

export default RemoveUpdateTwoInOne;
