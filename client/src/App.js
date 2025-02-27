import React, { useEffect, useState } from "react";
import axios from "axios"; //This us used to connect the frontend to the backend
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // This is used to enable routing.
// TODO:User Routes
import Home from "./User-Components/User-pages/home"; // This is used to import the home page from the pages folder
import About from "./User-Components/User-pages/AboutUs"; // This is used to import the About us page from the pages folder
import HowToDO from "./User-Components/User-pages/HowToDO";
import ContactUs from "./User-Components/User-pages/contactUs";
import News from "./User-Components/User-pages/News";
import Services from "./User-Components/User-pages/Services";
import GamingLaptop from "./User-Components/User-pages/GamingLaptops";
import BusinesLaptops from "./User-Components/User-pages/BusinesLaptops";
import BudgetLaptos from "./User-Components/User-pages/BudgetLaptos";
import StudentLaptop from "./User-Components/User-pages/StudentsLaptops";
import Tablets from "./User-Components/User-pages/Tablets";
import TwoInOne from "./User-Components/User-pages/TwoInOne";
import Order_page from "./User-Components/User-pages/Order_page";
import OrderProductDisplay from "./User-Components/User-pages/OrderProductDisplay";
import GamingLaptopDetails from "./User-Components/User-pages/GamingLaptopDetails";
import BusinessLaptopDetails from "./User-Components/User-pages/BusinessLaptopDetails";
import BudgetLaptopDetails from "./User-Components/User-pages/BudgetLaptopDetailss";
import StudentLaptopDetails from "./User-Components/User-pages/StudentLaptopDetailss";
import TabletsDetails from "./User-Components/User-pages/TabletsDetails";
import TwoInOneLaptopDetails from "./User-Components/User-pages/TwoInOneLaptopdetails";
import Cart from "./User-Components/User-pages/Cart";
import PlaceOrder from "./User-Components/User-pages/PlaceOrder";
import SignUp from "./User-Components/User-pages/SignUp";
import Login from "./User-Components/User-pages/login";
import Return_Refund from "./User-Components/User-pages/Return_Refund";
import NewsDetails from "./User-Components/User-pages/NewsDetails";
import HowToDoDetails from "./User-Components/User-pages/HowToDoDetails";
// TODO:Admin routes
import AdminHome from "./Admin-Components/PageAdmin/AdminHome";
import AdminViewUserAccount from "./Admin-Components/PageAdmin/AdminViewUserAccount";
import AdminViewReviews from "./Admin-Components/PageAdmin/AdminViewReviews";
import AdminUserContact from "./Admin-Components/PageAdmin/AdminViewUserContact";
import AdminReturnRefund from "./Admin-Components/PageAdmin/AdminReturnRefund";
import AdminAllOrders from "./Admin-Components/PageAdmin/AdminAllOrders";
import AdminAddNews from "./Admin-Components/PageAdmin/AdminAddNews";
import AdminDeleteUpdateNews from "./Admin-Components/PageAdmin/AdminDeleteUpdateNews";
import AdminAddHowToDO from "./Admin-Components/PageAdmin/AdminAddHowToDo";
import DeleteUpdateHowToDo from "./Admin-Components/PageAdmin/AdminDeleteUpdateHowToDo";
import AdminAddBudgetLaptops from "./Admin-Components/PageAdmin/AddingBudgetLaptop";
import AddBusinessLaptop from "./Admin-Components/PageAdmin/AddingBusinessLaptop";
import AddingGamingLaptops from "./Admin-Components/PageAdmin/AddingGamingLaptop";
import AddStudentLaptops from "./Admin-Components/PageAdmin/AddingStudentsLaptops";
import AddingTablets from "./Admin-Components/PageAdmin/AddingTablets";
import AddingTwoInOne from "./Admin-Components/PageAdmin/AddingTwoInOne";
import RemoveUpdateBudgetLaptops from "./Admin-Components/PageAdmin/RemoveUpdateBudgetLaptop";
import RemoveUpdateBusinessLaptops from "./Admin-Components/PageAdmin/RemoveUpdateBusinessLaptop";
import RemoveUpdateGamingLaptops from "./Admin-Components/PageAdmin/RemoveUpdateGamingLaptop";
import RemoveUpdateStudentLaptops from "./Admin-Components/PageAdmin/RemoveUpdateStudentLaptop";
import RemoveUpdateTablets from "./Admin-Components/PageAdmin/RemoveUpdateTablets";
import RemoveUpdateTwoInOne from "./Admin-Components/PageAdmin/RemoveUpdateTwoInOnes";
import UpdateGamingLaptops from "./Admin-Components/PageAdmin/UpdatingGamingLaptops";
import UpdateBusinessLaptops from "./Admin-Components/PageAdmin/UpdateBusinessLaptop";
import UpdateBudgetLaptops from "./Admin-Components/PageAdmin/UpdatingBudgetLaptop";
import UpdateStudentLaptops from "./Admin-Components/PageAdmin/UpdatingStudentLaptop";
import UpdateTablets from "./Admin-Components/PageAdmin/UpdateTablets";
import UpdateTwoInOneLaptops from "./Admin-Components/PageAdmin/UpdatingTwoInOneLaptops";
import UpdateNews from "./Admin-Components/PageAdmin/UpdatingNews";
import UpdateHowToDo from "./Admin-Components/PageAdmin/UpdateHowToDo";
function App() {
  return (
    <div>
      <Routes>
        {/*TODO:User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/HowToDO" element={<HowToDO />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Services />} />
        <Route path="/gamingLaptops" element={<GamingLaptop />} />
        <Route path="/BusinessLaptops" element={<BusinesLaptops />} />
        <Route path="/BudgetLaptops" element={<BudgetLaptos />} />
        <Route path="/StudentLaptops" element={<StudentLaptop />} />
        <Route path="/Tablets" element={<Tablets />} />
        <Route path="/TwoInOne" element={<TwoInOne />} />
        <Route path="/OrderPage" element={<Order_page />} />
        <Route path="/OrderProductDisplay" element={<OrderProductDisplay />} />
        {/* When the user click on the view more button then the product id will came to here and pass to the particular page */}
        <Route
          path="/GamingLaptopDetails/:id"
          element={<GamingLaptopDetails />}
        />
        <Route
          path="/BusinessLaptopDetails/:id"
          element={<BusinessLaptopDetails />}
        />
        <Route
          path="/BudgetLaptopDetails/:id"
          element={<BudgetLaptopDetails />}
        />
        <Route
          path="/StudentLaptopDetails/:id"
          element={<StudentLaptopDetails />}
        />
        <Route path="/TabletsDetails/:id" element={<TabletsDetails />} />
        <Route
          path="/TwoInOneLaptopDetails/:id"
          element={<TwoInOneLaptopDetails />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Return&Refund" element={<Return_Refund />} />
        <Route path="/NewsDetails/:id" element={<NewsDetails />} />
        <Route path="/HowToDoDetails/:id" element={<HowToDoDetails />} />
        {/*TODO:Admin Routes */}
        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/UserAccount" element={<AdminViewUserAccount />} />
        <Route path="/AdminViewReviews" element={<AdminViewReviews />} />
        <Route path="/AdminUserContact" element={<AdminUserContact />} />
        <Route path="/AdminReturnRefund" element={<AdminReturnRefund />} />
        <Route path="/AdminAllOrders" element={<AdminAllOrders />} />
        <Route path="/AdminAddNews" element={<AdminAddNews />} />
        <Route path="/DeleteUpdateNews" element={<AdminDeleteUpdateNews />} />
        <Route path="/AdminAddHowToDo" element={<AdminAddHowToDO />} />
        <Route path="/DeleteUpdateHowToDo" element={<DeleteUpdateHowToDo />} />
        <Route path="/AddBudgetLaptops" element={<AdminAddBudgetLaptops />} />
        <Route path="/AddBusinessLaptops" element={<AddBusinessLaptop />} />
        <Route path="/AddingGamingLaptops" element={<AddingGamingLaptops />} />
        <Route path="/AddStudentLaptops" element={<AddStudentLaptops />} />
        <Route path="/AddingTablets" element={<AddingTablets />} />
        <Route path="/AddingTwoInOne" element={<AddingTwoInOne />} />
        <Route
          path="/RemoveUpdateBudgetLaptops"
          element={<RemoveUpdateBudgetLaptops />}
        />
        <Route
          path="/RemoveUpdateBusinessLaptops"
          element={<RemoveUpdateBusinessLaptops />}
        />
        <Route
          path="/RemoveUpdateGamingLaptops"
          element={<RemoveUpdateGamingLaptops />}
        />
        <Route
          path="/RemoveUpdateStudentLaptops"
          element={<RemoveUpdateStudentLaptops />}
        />
        <Route path="/RemoveUpdateTablets" element={<RemoveUpdateTablets />} />
        <Route
          path="/RemoveUpdateTwoInOne"
          element={<RemoveUpdateTwoInOne />}
        />
        <Route
          path="/UpdateGamingLaptops/:id"
          element={<UpdateGamingLaptops />}
        />
        <Route
          path="/UpdateBusinessLaptops/:id"
          element={<UpdateBusinessLaptops />}
        />
        <Route
          path="/UpdateBudgetLaptops/:id"
          element={<UpdateBudgetLaptops />}
        />
        <Route
          path="/UpdateStudentLaptops/:id"
          element={<UpdateStudentLaptops />}
        />
        <Route path="/UpdateTablets/:id" element={<UpdateTablets />} />
        <Route
          path="/UpdateTwoInOneLaptops/:id"
          element={<UpdateTwoInOneLaptops />}
        />
        <Route path="/UpdateNews/:id" element={<UpdateNews />} />
        <Route path="/UpdateHowToDo/:id" element={<UpdateHowToDo />} />
      </Routes>
    </div>
  );
}

export default App;
