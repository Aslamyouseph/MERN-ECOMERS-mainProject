import React from "react";
import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import SearchBar from "../Home/SearchBar/searchBar";
import BusinesLaptops from "../BusinesLaptops/BusinesLaptops";
function BusinesLaptop() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the BusinesLaptops laptopes page*/}
      <BusinesLaptops />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default BusinesLaptop;
