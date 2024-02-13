import React from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import MainPageBook from "../MainPageBook/MainPageBook";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <MainPageBook />
      <Footer />
    </div>
  );
};

export default Layout;
