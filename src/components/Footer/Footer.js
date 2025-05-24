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
                <a href="https://www.facebook.com/hamidullah.feizi?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook f-icon"></i>
                </a>
                <a href="https://wa.me/0798478850" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-whatsapp f-icon"></i>
                </a>
                <a href="https://t.me/Hamid_Kamgar" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-telegram f-icon"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col lg={12} className="text-center">
            <h6>
              &copy; <b>Fargard</b>, All Rights Reserved | Designed And
              Developed By{" "}
              <span>Fargard</span>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
