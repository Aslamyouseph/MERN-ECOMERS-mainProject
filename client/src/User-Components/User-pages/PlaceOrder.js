import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import Placeorder from "../../User-Components/PlaceOrder/PlaceOrder";
function PlaceOrder() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <Placeorder /> {/*This is used to import the placeOrder page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default PlaceOrder;
