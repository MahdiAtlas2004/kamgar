import React from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import MainPageBook from "../MainPageBook/MainPageBook";
import Footer from "../../components/Footer/Footer";
import MainPageArticle from "../MainPageArticle/MainPageArticle";
import MainPageContact from "../MainPageContact/MainPageContact";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";

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
      <SocialMediaIcons />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
