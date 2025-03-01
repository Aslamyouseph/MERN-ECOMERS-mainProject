import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import BusinessLaptopDetails from "../ProductDetails/BusinessLaptopDetails";

function BusinessLaptopDetailss() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <BusinessLaptopDetails /> <Footer />{" "}
      {/*This is used to import the Footer   */}
    </div>
  );
}

export default BusinessLaptopDetailss;
