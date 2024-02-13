import React from "react";
import Books from "../Books/Books";
import Header from "../../components/Header/Header";

const AllBooks = () => {
  return (
    <div>
      <Header />

      <div style={{ marginTop: "10vh" }}>
        <Books />
      </div>
    </div>
  );
};

export default AllBooks;
