import React from "react";
import "./HomeDesign.css";
import AdminImage from "../Admin-Images/AdminImage.jpg";
// Home Page Design
function HomeDesign() {
  return (
    <div>
      <img className="AdminImage" src={AdminImage} alt="Admin Image" />
    </div>
  );
}

export default HomeDesign;
