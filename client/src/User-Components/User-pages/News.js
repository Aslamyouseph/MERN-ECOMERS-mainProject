import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import SearchBar from "../../User-Components/Home/SearchBar/searchBar";
import News_page from "../../User-Components/News/News";
function News_section() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <SearchBar /> {/*This is used to import the Search bar  */}
      <News_page /> {/*This is used to import the news page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default News_section;
