import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";
import ITyped from "../../components/ITyped/ITyped";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="homeContainer d-flex align-items-center justify-content-center mt-5" id="home">
      <Container>
        <Row className="gy-4">
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="./assets/images/1.JPG"
              className="homeImage"
              data-aos="fade-up"
              alt="home-page"
            />
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="homeTitle text-center" data-aos="fade-right">
              <h1>من حمیدالله کامگار هستم</h1>
              <h2 dir="rtl">&nbsp;<ITyped /></h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
