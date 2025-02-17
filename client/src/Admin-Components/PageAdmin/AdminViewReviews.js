import React from "react";
import AdminNavBar from "../AdminSideBar/AdminSideBar";
import ReviewPage from "../AdminViewReview/AdminViewReview";
function AdminViewReviews() {
  return (
    <div>
      {/*This is used to import the admin Navigation bar  form Admin folder */}
      <AdminNavBar />
      <ReviewPage /> {/*This is used to import the review page*/}
    </div>
  );
}

export default AdminViewReviews;
