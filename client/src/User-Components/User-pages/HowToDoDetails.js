import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import HowToDoDetails from "../../User-Components/HowToDoDetails/HowToDoDetails";
function HowToDODetails() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <HowToDoDetails /> {/*This is used to import the How to do page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default HowToDODetails;
