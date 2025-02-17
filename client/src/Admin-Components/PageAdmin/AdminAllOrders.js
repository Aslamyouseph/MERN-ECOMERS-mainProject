import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import AllOrders from "../AdminAllOrders/AdminAllOrders";
function AdminAllOrders() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <AllOrders /> {/*This is used to import the All orders page*/}
    </div>
  );
}

export default AdminAllOrders;
