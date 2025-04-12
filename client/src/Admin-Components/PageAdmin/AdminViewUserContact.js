import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import UserContact from "../AdminViewUserContact/AdminViewUserContact";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function AdminViewUserContact() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <SearchBar /> {/*This is used to import the Search bar  */}
      <UserContact /> {/*This is used to import the user contact page*/}
    </div>
  );
}

export default AdminViewUserContact;
