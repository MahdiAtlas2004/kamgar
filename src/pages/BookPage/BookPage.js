import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import "./BookPage";

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

      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 style={{ color: "rgb(0, 52, 89)" }}>{book.name}</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="d-flex justify-content-center">
            <Image
              src={book.image}
              style={{
                width: "100%",
                height: "45vh",
                boxShadow: "box-shadow: 2px 2px 1.4rem rgb(0, 52, 89)",
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <ListGroup variant="flush">
              <ListGroupItem dir="rtl"><b>تاریخ انتشار: {book.date}</b></ListGroupItem>
              <ListGroupItem dir="rtl">{book.description}</ListGroupItem>
                <Link dir="rtl" to="/allBooks" className="btn btn-primary my-3 mt-2 backButton">
                  بازگشت به صفحه قبلی
                </Link>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookPage;
