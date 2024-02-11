import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
        <Header />
        <Home />
        <About />
        <Footer />
    </div>
  );
};

export default App;
