import React from "react";
import "./searchBar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function SearchBar() {
  return (
    <div>
      <div className="search-bar-container">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search your feed"
            className="me-2 feed-search-bar"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
