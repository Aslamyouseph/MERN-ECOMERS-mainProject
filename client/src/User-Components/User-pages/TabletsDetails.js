import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import TabletsDetailss from "../ProductDetails/TabletsDetails";

function TabletsDetails() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <TabletsDetailss /> {/*This is used to import the productDetails page  */}
      <Footer /> {/*This is used to import the Footer   */}
    </div>
  );
}

export default TabletsDetails;
