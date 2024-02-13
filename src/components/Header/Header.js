import React from "react";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./Header.css";
// bg-body-tertiary
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navBrand">Kamgar Info Website</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* This is the space between Title and Tabs */}
          <Nav className="me-auto"></Nav>

          {/* This is our main menue */}
          <Nav>
            <Nav.Link href="#contact" className="myLink">
              ارتباط با من
            </Nav.Link>
            <Nav.Link href="#articles" className="myLink">
              مقالات
            </Nav.Link>

            <LinkContainer to="/allBooks">
              <Nav.Link href="#book" className="myLink">
                آثار
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link className="myLink">بیوگرافی</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/">
              <Nav.Link className="myLink">خانه</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
