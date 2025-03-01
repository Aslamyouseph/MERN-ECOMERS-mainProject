import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import BudgetLaptopDetails from "../ProductDetails/BudgetLaptopDetails";

function BudgetLaptopDetailss() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <BudgetLaptopDetails />{" "}
      {/*This is used to import the productDetails page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default BudgetLaptopDetailss;
