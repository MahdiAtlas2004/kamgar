import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./Books.css";
import books from "../../books";
import Book from "../../components/Book/Book";
import yearBooks from "../../yearBooks";

const Books = () => {
  return (
    <div className="mt-5 books-section">
      <Container>
        <Row>
          <Col className="text-center" lg={12}>
            <h1 className="my-header fs-1 fw-bold">آثار</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row>
          {books.map((item) => {
            return (
              <Col sm={12} md={6} lg={3} key={item._id}>
                <Book book={item} />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col lg={12} className="text-center mt-4">
            <h1 className="my-header fs-1 fw-bold">سالنامه ها</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          {yearBooks.map((item) => {
            return (
              <Col sm={12} md={6} lg={3} key={item._id}>
                <Book book={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Books;
