import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import ContactUs from "../../User-Components/contactUs/contactBody";
import ContactForm from "../../User-Components/contactUs/contactForm";
function Contact_Us() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <ContactUs /> {/*This is used to import the contactUs page  */}
      <ContactForm /> {/*This is used to import the contactForm page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default Contact_Us;
