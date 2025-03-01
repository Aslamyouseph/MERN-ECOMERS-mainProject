import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import ToInOneLaptopDetailss from "../ProductDetails/TwoInOneLaptopDetailss";

function TwoInOneLaptopdetails() {
  return (
    <div>
      <div>
        <NavBar /> {/*This is used to import the navigation bar  */}
        <ToInOneLaptopDetailss />
        <Footer /> {/*This is used to import the Footer   */}
      </div>
    </div>
  );
}

export default TwoInOneLaptopdetails;
