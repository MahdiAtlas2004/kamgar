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
                  معرفی، نقد و بررسی تذکره ی زرنگار
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: روایت دیروز، آئینه امروز، نوید فردا
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: 23 حمل 1399 خورشیدی </Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text>منبع: روزنامه 8 صبح</Card.Text>
                  <Card.Text>صفحه: 5</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={3}>
            <Card className="article-card" data-aos="fade-up">
              <Card.Header>
                <Card.Title className="card-title">
                  گوهرشاد بیگم زنی در حصار یک گنبد
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>موضوع: فرهنگی، تاریخی، هنری</Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال هفتم، شماره‌ی نهم، زمستان 1399 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا</Card.Text>
                  <Card.Text>صفحه: 19 - 26</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={3}>
            <Card className="article-card" data-aos="fade-down">
              <Card.Header>
                <Card.Title className="card-title">
                طاهریان فوشنج و نقش آنان در ضرب سکه
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i>  تاریخ انتشار: سال هشتم، شماره‌ی دهم، بهار 1400 خورشیدی  </Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا </Card.Text>
                  <Card.Text>صفحه: 10 - 23</Card.Text>
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
              <div className="article-overlay">
                  <Row className="icons mt-2">
                    <Col lg={12} className="d-flex justify-content-around ">
                      <div className="d-flex justify-content-around myCol">
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
                      <p>مشاهده موارد بیشتر</p>
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
