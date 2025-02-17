import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import GamingLaptops from "../../User-Components/GamingLaptops/GamingLaptops";
function gamingLaptops() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the GammingLaptopes laptops page*/}
      <GamingLaptops />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default gamingLaptops;
