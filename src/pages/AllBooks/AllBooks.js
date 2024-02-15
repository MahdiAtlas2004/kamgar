import React from "react";
import Books from "../Books/Books";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AllBooks = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "10vh" }}>
        <Books />
      </div>

      <Footer />
    </div>
  );
};

export default AllBooks;
