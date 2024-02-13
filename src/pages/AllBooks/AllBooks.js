import React from "react";
import Books from "../Books/Books";
import Header from "../../components/Header/Header";

const AllBooks = () => {
  return (
    <div>
      <Header />
      <div className="distance">
        <p className="mt-4"> a</p>
      </div>
      <div className="container">
        <Books />
      </div>
    </div>
  );
};

export default AllBooks;
