import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Container,
} from "react-bootstrap";
import "./BookPage.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import books from "../../books";
import yearBooks from "../../yearBooks";

const BookPage = () => {
  const { id } = useParams();
  const isYearBook = id && window.location.pathname.includes("yearbook");

  let data;
  if (isYearBook) {
    data = yearBooks.find((item) => item._id === id);
  } else {
    data = books.find((item) => item._id === id);
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(
        window.innerWidth <= 390 ||
          window.innerWidth <= 430 ||
          window.innerWidth <= 768 ||
          window.innerWidth <= 820 ||
          window.innerWidth <= 1024
      );
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <Header />

      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 style={{ color: "rgb(0, 52, 89)" }}>{data.name}</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12} className="d-flex justify-content-center">
            <Image
              src={data.image}
              className="bookpage-image"
              style={{
                width: isSmallScreen ? "100%" : "40%",
                height: isSmallScreen ? "45vh" : "80vh",
                objectFit: isSmallScreen ? "cover" : "cover",
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <ListGroup variant="flush">
              <ListGroupItem dir="rtl">
                <b>تاریخ انتشار: {data.date}</b>
              </ListGroupItem>
              <ListGroupItem dir="rtl" className="paragraph">
                {data.description}
              </ListGroupItem>
              {data.note ? (
                <ListGroupItem dir="rtl" className="note">
                  <span className="fw-bold">یادداشت: </span>
                  {data.note}
                </ListGroupItem>
              ) : null}

              {data.isYearBook && (
                <ListGroupItem dir="rtl" className="note">
                  <a
                    href={data.pdf}
                    download={`fargard_${id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-outline-primary">
                      Download PDF <i className="fa-solid fa-arrow-down"></i>
                    </button>
                  </a>
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
      <SocialMediaIcons />
      <BackToTopButton />
    </div>
  );
};

export default BookPage;
