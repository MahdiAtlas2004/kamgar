import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./Books.css";
import books from "../../books";
import Book from "../../components/Book/Book";

const Books = () => {
  return (
    <div className="mt-5 books-section">
      <Container>
        <Row>
          <Col className="text-center" lg={12}>
            <h1 className="my-header fs-1 fw-bold">آثار</h1>
          </Col>
        </Row>

        <Row>
        {books.map((item) => {
          return (
            <Col sm={12} md={6} lg={3} key={item._id}>
                <Book book={item}/>
            </Col>
          )
        })}
      </Row>
      </Container>
    </div>
  );
};

export default Books;
