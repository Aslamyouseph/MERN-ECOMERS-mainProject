import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import TwoInOnes from "../../User-Components/TwoInOne/TwoInOne";
function TwoInOne() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the TwoInOne laptops page*/}
      <TwoInOnes />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default TwoInOne;
