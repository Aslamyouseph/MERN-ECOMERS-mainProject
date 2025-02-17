import React from "react";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import Footer from "../../User-Components/Home/footer/footer";
import Login from "../../User-Components/login/login";
function login() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <Login /> {/*This is used to login the page */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default login;
