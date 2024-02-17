import React from "react";
import Books from "../Books/Books";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const AllBooks = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "10vh" }}>
        <Books />
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default AllBooks;
