import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import Signup from "../../User-Components/SignUp/SignUp";
function SignUp() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <Signup />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default SignUp;
