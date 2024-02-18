import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./MainPageBook.css";
import books from "../../books";
import Book from "../../components/Book/Book";
import { LinkContainer } from "react-router-bootstrap";

const MainPageBook = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col className="text-center" lg={12}>
            <h1 className="my-header fs-1 fw-bold">آثار</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row className="book-container">
          <LinkContainer to="allBooks">
            <Col
              sm={12}
              md={6}
              lg={3}
              key={books[0]._id}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <div className="container mt-3 rounded">
                <img
                  src="./assets/images/book7.jpg"
                  alt="myPhoto"
                  className="more-image rounded"
                />
                {/* This is overlay part where other books placed */}
                <div className="overlay">
                  <Row className="icons mt-5">
                    <Col lg={12} className="d-flex justify-content-around">
                      <div className="d-flex justify-content-around myCol">
                        <i className="fa fa-circle text-light"></i>
                        <i className="fa fa-circle text-light"></i>
                        <i className="fa fa-circle text-light"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      lg={12}
                      className="d-flex justify-content-center text-light"
                    >
                      <p>مشاهده موارد بیشتر</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </LinkContainer>

          <Col
            sm={12}
            md={6}
            lg={3}
            key={books[1]._id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <Book book={books[1]} />
          </Col>

          <Col
            sm={12}
            md={6}
            lg={3}
            key={books[2]._id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <Book book={books[2]} />
          </Col>

          <Col
            sm={12}
            md={6}
            lg={3}
            key={books[3]._id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="100"
          >
            <Book book={books[3]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPageBook;
