import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./MainPageArticle.css";

const MainPageArticle = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="my-header fs-1 fw-bold">مقالات</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row dir="rtl" className="mt-2 gy-4">
          {/* Card 1 */}
          <Col lg={3}>
            <Card className="article-card" data-aos="fade-down">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>معرفی، نقد و بررسی تذکره ی زرنگار
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender">&nbsp;&nbsp;</i> <span className="my-title">تاریخ انتشار:</span>  23 حمل 1399 خورشیدی </Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text><span className="my-title">منبع:</span>  روزنامه 8 صبح</Card.Text>
                  <Card.Text><span className="my-title">صفحه:</span>  5</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={3}>
            <Card className="article-card" data-aos="fade-up">
              <Card.Header>
                <Card.Title className="card-title">
                <span className="article-title">عنوان: </span>گوهرشاد بیگم زنی در حصار یک گنبد
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender">&nbsp;&nbsp;</i> <span className="my-title">تاریخ انتشار:</span>  سال هفتم، شماره‌ی نهم، زمستان 1399 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text><span className="my-title">منبع: </span>  فصل‌نامه‌ی دیار دارا</Card.Text>
                  <Card.Text><span className="my-title">صفحه:</span>  19 - 26</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={3}>
            <Card className="article-card" data-aos="fade-down">
              <Card.Header>
                <Card.Title className="card-title">
                <span className="article-title">عنوان: </span>طاهریان فوشنج و نقش آنان در ضرب سکه
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender">&nbsp;&nbsp;</i>  <span className="my-title">تاریخ انتشار:</span>  سال هشتم، شماره‌ی دهم، بهار 1400 خورشیدی  </Card.Text>
                <Card.Footer>
                  <Card.Text><span className="my-title">منبع:</span>  فصل‌نامه‌ی دیار دارا </Card.Text>
                  <Card.Text><span className="my-title">صفحه:</span>  10 - 23</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col lg={3}>
            <LinkContainer to="/articles">
            <Card className="article-card" data-aos="fade-up">
              <Card.Header>
                <Card.Title className="card-title">
                خواجه محمد اسماعیل دارا و سرنوشت دیوانش
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text>تاریخ انتشار: 23 حمل 1399 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا</Card.Text>
                  <Card.Text>صفحه: 67 - 75</Card.Text>
                </Card.Footer>
              </Card.Body>
              {/* Overlay section for veiwing all cards */}
              <div className="article-overlay">
                  <Row className="article-icons mt-2">
                    <Col lg={12} className="d-flex justify-content-around ">
                      <div className="d-flex justify-content-around myCol-article">
                        <i className="fa fa-circle text-light"></i>
                        <i className="fa fa-circle text-light"></i>
                        <i className="fa fa-circle text-light"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col
                      lg={12}
                      className="d-flex justify-content-center text-light"
                    >
                      <p className="more-text">مشاهده موارد بیشتر</p>
                    </Col>
                  </Row>
                </div>
            </Card>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPageArticle;
