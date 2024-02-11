import React from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Books from "../Books/Books";
// import BookPage from "../BookPage/BookPage";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Books />
      <Footer />
    </div>
  );
};

export default Layout;
