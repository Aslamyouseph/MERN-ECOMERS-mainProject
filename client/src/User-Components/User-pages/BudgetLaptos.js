import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import BudgetLaptop from "../../User-Components/BudgetLaptos/BudgetLaptos";
function BudgetLaptos() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}{" "}
      {/*This is used to import the BudgetLaptos laptops page*/}
      <BudgetLaptop />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default BudgetLaptos;
