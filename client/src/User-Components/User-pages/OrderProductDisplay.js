import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import OrderProductDisplay from "../../User-Components/OrderProductDisplay/OrderProductDisplay";
function OrderproductDisplay() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <br />
      {/*This is used to import the OrderProductDisplay page  */}
      <OrderProductDisplay /> <Footer />{" "}
      {/*This is used to import the Footer   */}
    </div>
  );
}

export default OrderproductDisplay;
