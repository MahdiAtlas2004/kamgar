import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <Container>
        <Row>
          <Col>
            <div>
              <h1>من حمیدالله کامگار هستم</h1>
              <h2>نویسنده، تاریخ شناس</h2>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
