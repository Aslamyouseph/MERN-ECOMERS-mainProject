import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import NewsDetails from "../../User-Components/NewsDetails/NewsDetails";
function Newsdetails() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <NewsDetails />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default Newsdetails;
