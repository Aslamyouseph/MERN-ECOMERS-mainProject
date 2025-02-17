import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import ImageSlider from "../../User-Components/Home/ImageSlider/imageSlider";
import Top_Laptop from "../../User-Components/Home/Top_Laptop/laptopListing";
import LaptopCategory from "../../User-Components/Home/laptopsCategory/laptopCategory";
import LatestLaptop from "../../User-Components/Home/LatestLaptopes/LatestLaptop";
import LatestNews from "../../User-Components/Home/news_homePage/latestNews";
import HowTo from "../../User-Components/Home/howToKnowpage/howTo";
function home() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <ImageSlider /> {/*This is used to import the Image slider   */}
      <LaptopCategory /> {/* This id used to import the Laptop category */}
      <Top_Laptop /> {/*This is used to import the Body */}
      <LatestLaptop /> {/*This is used to import the dragableCard*/}
      <LatestNews /> {/*This is used to import the latestNews*/}
      <HowTo /> {/*This is used to import the HowTo*/}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default home;
