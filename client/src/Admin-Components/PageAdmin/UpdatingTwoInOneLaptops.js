import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingTwoInOneLaptops from "../ManageLaptop/UpdatingLaptops/TwoInOneLaptopUpdating";
function UpdatingTwoInOneLaptop() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingTwoInOneLaptops />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdatingTwoInOneLaptop;
