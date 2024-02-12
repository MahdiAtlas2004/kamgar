import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";

import Header from "../../components/Header/Header";
import books from "../../books";

const BookPage = () => {
  const { id } = useParams();
  const book = books.find((item) => item._id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <Header />

      <Row className="mt-5">
        <Col md={4} className="mt-5 ps-5">
          <Image src={book.image} fluid />
        </Col>
        <Col md={8}>
        <Link to="/" className="btn btn-light my-3 mt-5">
        بازگشت به صفحه اصلی
      </Link>

          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{book.name}</h3>
            </ListGroupItem>
            <ListGroupItem>{book.date}</ListGroupItem>
            <ListGroupItem dir="rtl">{book.description}</ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default BookPage;
