import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import BudgetLaptopDetails from "../ProductDetails/BudgetLaptopDetails";
import ProductReview from "../ProductReview/ProductReview";
import ProductReviewDisplay from "../ProductReviewDisplay/ProductReviewDisplay";

function BudgetLaptopDetailss() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <BudgetLaptopDetails />{" "}
      {/*This is used to import the productDetails page  */}
      <ProductReview /> {/*This is used to import the productReview page  */}
      {/*This is used to import the productReviewDisplay page  */}
      <ProductReviewDisplay />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default BudgetLaptopDetailss;
