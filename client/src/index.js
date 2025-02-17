import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This is used to import the app page
import { BrowserRouter as Router } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)
import "bootstrap/dist/css/bootstrap.min.css"; // This code is used to import the bootstrap in our project
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // This code is used to give the router to the app page
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
