import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UserAccount from "../AdminViewUserAccount/AdminViewUserAccount";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function AdminViewUserAccount() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <UserAccount /> {/*This is used to import the user account page*/}
    </div>
  );
}

export default AdminViewUserAccount;
