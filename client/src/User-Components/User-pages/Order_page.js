import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import OrderPage from "../../User-Components/Order-page/orderPage";
function Order_page() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <OrderPage /> {/*This is used to import the order page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default Order_page;
