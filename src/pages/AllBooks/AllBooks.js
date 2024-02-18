import React from "react";
import Books from "../Books/Books";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

import "./AllBooks.css";

const AllBooks = () => {
  return (
    <div>
      <Header />

      <div className="all-books">
        <Books />
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default AllBooks;
