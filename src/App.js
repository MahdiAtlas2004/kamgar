import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
        <Header />
        <Container>
          Body
        </Container>
        <Footer />
    </div>
  );
};

export default App;
