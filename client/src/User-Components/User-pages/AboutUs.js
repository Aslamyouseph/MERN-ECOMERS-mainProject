import React from "react";
import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import SearchBar from "../Home/SearchBar/searchBar";
import About from "../AboutUs/AboutUs";

function AboutUs() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <About /> {/* This is used to import the Mission_Vission page */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default AboutUs;
