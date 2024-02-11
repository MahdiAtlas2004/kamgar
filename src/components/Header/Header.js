import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import './Header.css'; 
// bg-body-tertiary
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home">Kamgar Info Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          {/* This is the space between Title and Tabs */}
          <Nav className="me-auto"></Nav>

          {/* This is our main menue */}
          <Nav>
          <Nav.Link href="#contact">ارتباط با من</Nav.Link>
          <Nav.Link href="#articles">مقالات</Nav.Link>
            <Nav.Link href="#book">
              آثار
            </Nav.Link>
            <Nav.Link  href="#about">
              بیوگرافی
            </Nav.Link>
            <Nav.Link  href="#home">
              خانه
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
