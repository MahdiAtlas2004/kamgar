import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from "./components/Header/Header";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Books from "./pages/Books/Books";
import BookPage from "./pages/BookPage/BookPage";
// import Footer from "./components/Footer/Footer";
import Layout from "./pages/Layout/Layout";
import AllBooks from "./pages/AllBooks/AllBooks";
import AboutFullPage from "./pages/AboutFullPage/AboutFullPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/allBooks" element={<AllBooks />} />
          <Route path="/about" element={<AboutFullPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
