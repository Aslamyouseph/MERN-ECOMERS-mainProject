import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import ToInOneLaptopDetailss from "../ProductDetails/TwoInOneLaptopDetailss";
import ProductReview from "../ProductReview/ProductReview";
import ProductReviewDisplay from "../ProductReviewDisplay/ProductReviewDisplay";

function TwoInOneLaptopdetails() {
  return (
    <div>
      <div>
        <NavBar /> {/*This is used to import the navigation bar  */}
        <ToInOneLaptopDetailss />{" "}
        {/*This is used to import the productDetails page  */}
        <ProductReview /> {/*This is used to import the productReview page  */}
        {/*This is used to import the productReviewDisplay page  */}
        <ProductReviewDisplay />
        <Footer /> {/*This is used to import the Footer   */}
      </div>
    </div>
  );
}

export default TwoInOneLaptopdetails;
