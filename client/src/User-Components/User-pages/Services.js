import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import Services from "../../User-Components/Services/Services";
function services() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      {/* <SearchBar /> This is used to import the Search bar  */}
      <Services /> {/*This is used to import the Services page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default services;
