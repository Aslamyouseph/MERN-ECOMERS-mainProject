import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // This is used to import the app page
import { BrowserRouter as Router } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)
import "bootstrap/dist/css/bootstrap.min.css"; // This code is used to import the bootstrap in our project
import { SearchProvider } from "./SearchContext.js"; // This is used to create a React Context API to share the search input value across multiple components in your app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // This code is used to give the router to the app page
  <React.StrictMode>
    <Router>
      {/* When we can the App during that time itself the context will be created */}
      <SearchProvider>
        <App />
      </SearchProvider>
    </Router>
  </React.StrictMode>
);
