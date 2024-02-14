import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="mt-5 my-footer">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <div className="d-flex justify-content-around icons-div">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-pinterest"></i>
              <i className="fa fa-youtube"></i>
              <i className="fa fa-instagram"></i>
            </div>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg={12} className="text-center">
            <h6>
              &copy; <b>Mahdi Atlas</b>, All Rights Reserved | Designed By{" "}
              <a href="linkedin.com/in/mahdi-atlas-59258a289">Mahdi Atlas</a>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
