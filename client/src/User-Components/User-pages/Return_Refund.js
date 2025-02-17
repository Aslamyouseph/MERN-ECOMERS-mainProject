import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import Return_Refund from "../../User-Components/Return_Refund/Return_Refund";
function ReturnRefund() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <Return_Refund />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default ReturnRefund;
