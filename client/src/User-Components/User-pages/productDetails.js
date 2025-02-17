import React from "react";
import Footer from "../../User-Components/Home/footer/footer";
import NavBar from "../../User-Components/Home/NavigationBar/navBar";
import ProductDetails from "../../User-Components/ProductDetails/productDetails";
import ProductReview from "../../User-Components/ProductReview/ProductReview";
import ProductReviewDisplay from "../../User-Components/ProductReviewDisplay/ProductReviewDisplay";
function ProductDetail() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <ProductDetails /> {/*This is used to import the productDetails page  */}
      <ProductReview /> {/*This is used to import the productReview page  */}
      {/*This is used to import the productReviewDisplay page  */}
      <ProductReviewDisplay />
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default ProductDetail;
