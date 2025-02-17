import React from "react";
import HowToDo from "../HowToDO/HowToDo";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import Footer from "../../User-Components/Home/footer/footer";

function HowToDO() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <HowToDo /> {/*This is used to import the How to do page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default HowToDO;
