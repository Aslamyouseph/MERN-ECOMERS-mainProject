import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UserContact from "../AdminViewUserContact/AdminViewUserContact";
function AdminViewUserContact() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <UserContact /> {/*This is used to import the user contact page*/}
    </div>
  );
}

export default AdminViewUserContact;
