import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import StudentsLaptop from "../../User-Components/StudentsLaptops/StudentsLaptops";
function StudentsLaptops() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the Students laptops page*/}
      <StudentsLaptop />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default StudentsLaptops;
