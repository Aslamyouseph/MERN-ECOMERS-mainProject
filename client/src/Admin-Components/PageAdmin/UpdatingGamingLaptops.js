import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UpdatingGamingLaptopss from "../ManageLaptop/UpdatingLaptops/GamingLaptopUpdate";
function UpdatingGamingLaptops() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UpdatingGamingLaptopss />
      {/*This is used to display the Updating form to the n */}
    </div>
  );
}

export default UpdatingGamingLaptops;
