import React from "react";
import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import GamingLaptopDetails from "../ProductDetails/GamingLaptopDetails";
function ProductDetail() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <GamingLaptopDetails />
      {/*This is used to import the Footer   */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
