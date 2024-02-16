import React from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import MainPageBook from "../MainPageBook/MainPageBook";
import Footer from "../../components/Footer/Footer";
import MainPageArticle from "../MainPageArticle/MainPageArticle";
import MainPageContact from "../MainPageContact/MainPageContact";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <MainPageBook />
      <MainPageArticle />
      <MainPageContact />
      <Footer />
    </div>
  );
};

export default Layout;
