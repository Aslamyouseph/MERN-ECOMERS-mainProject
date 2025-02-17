import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UserAccount from "../AdminViewUserAccount/AdminViewUserAccount";
function AdminViewUserAccount() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UserAccount /> {/*This is used to import the user account page*/}
    </div>
  );
}

export default AdminViewUserAccount;
