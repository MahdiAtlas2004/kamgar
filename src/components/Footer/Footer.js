import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5 my-footer">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <Row className="d-flex justify-content-center">
              <Col lg={4}>
                <a href="https://www.facebook.com/hamidullah.feizi?mibextid=ZbWKwL">
                  <i className="fa-brands fa-facebook f-icon"></i>
                </a>
                <a href="https://wa.me/0798478850">
                  <i className="fa-brands fa-square-whatsapp f-icon"></i>
                </a>
                <a href="https://t.me/Hamid_Kamgar">
                  <i className="fa-brands fa-telegram f-icon"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg={12} className="text-center">
            <h6>
              &copy; <b>Mahdi Atlas</b>, All Rights Reserved | Designed And
              Developed By{" "}
              <a href="https://linkedin.com/in/mahdi-atlas-59258a289" className="author-link">Mahdi Atlas</a>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
