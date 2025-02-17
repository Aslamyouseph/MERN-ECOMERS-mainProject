import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import ReturnRefund from "../AdminReturnRefund/AdminReturnRefund";
function AdminReturnRefund() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <ReturnRefund /> {/*This is used to import the return refund page*/}
    </div>
  );
}

export default AdminReturnRefund;
