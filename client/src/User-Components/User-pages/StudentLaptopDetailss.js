import Footer from "../Home/footer/footer";
import NavBar from "../Home/NavigationBar/navBar";
import StudentsLaptopDetails from "../ProductDetails/StudentLaptopDetailss";

function StudentLaptopDetailss() {
  return (
    <div>
      <NavBar /> {/*This is used to import the navigation bar  */}
      <StudentsLaptopDetails /> <Footer />{" "}
      {/*This is used to import the Footer   */}
    </div>
  );
}

export default StudentLaptopDetailss;
