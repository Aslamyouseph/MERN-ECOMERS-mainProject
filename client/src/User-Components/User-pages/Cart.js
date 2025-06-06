import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import Cartt from "../../User-Components/Cart/Cart";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
function Cart() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <Cartt /> {/*This is used to import the cart page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default Cart;
