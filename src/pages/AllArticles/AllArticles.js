import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import "./AllArticles.css";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import { articles } from "./inc/articles";

const AllArticles = () => {
  return (
    <div>
      <Header />
      <Container style={{ marginTop: "10vh" }}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="my-header fs-1 fw-bold">مقالات</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        {/* All The Articles */}
        <Row
          dir="rtl"
          className="mt-2 gy-4 text-center d-flex justify-content-center"
        >
          {/* Card 1 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>معرفی، نقد و
                  بررسی تذکره ی زرنگار
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار: </span> 23 حمل 1399
                  خورشیدی{" "}
                </Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text>
                    <span className="my-title">منبع:</span> روزنامه 8 صبح
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 5
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>گوهرشاد بیگم زنی
                  در حصار یک گنبد
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال هفتم،
                  شماره‌ی نهم، زمستان 1399 خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی دیار دارا
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 19 - 26
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>طاهریان فوشنج و
                  نقش آنان در ضرب سکه
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال هشتم،
                  شماره‌ی دهم، بهار 1400 خورشیدی{" "}
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی دیار دارا{" "}
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 10 - 23
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span> خواجه محمد
                  اسماعیل دارا و سرنوشت دیوانش
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> 23 حمل 1399
                  خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی دیار دارا
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 67 - 75
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>ناخدای نستعلیق
                  (شرح حال، احوال و آثار میرعلی هروی)
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال سوم،
                  شماره‌ی یازدهم، پاییز 1401 خورشیدی{" "}
                </Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی شمیره{" "}
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 111 – 157
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>روج و مشاهیر آن
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال نهم،
                  شماره‌ی دوازدهم، بهار 1402 خورشیدی{" "}
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی دیار دارا
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 8 – 27
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 7 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>نگرشی بر جایگاه
                  جغرافیای فوشنج
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال دهم،
                  شماره‌ی سیزدهم، بهار 1402 خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی دیار دارا{" "}
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 9 – 21
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 8 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>نی‌نامه جامی و
                  فهرست توصیفی نسخه‌های آن
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال چهارم،
                  شماره‌ی سیزدهم، بهار 1402 خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> فصل‌نامه‌ی شمیره{" "}
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 39 – 66
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 9 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>منار جام شاهکاری
                  بی‌نظیر در هنر معماری
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال نخست،
                  شماره‌ی نخست، بهار 1402 خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> سال‌نامه‌ی فرگرد
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 13 – 57
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 10 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  <span className="article-title">عنوان: </span>ادیب بزرگ هرات
                  (نگاهی کوتاه به کارنامه‌ی محمد ناصر ره‌یاب)
                </Card.Title>
              </Card.Header>
              <Card.Body className="mt-4">
                <Card.Text>
                  <i className="fa-solid fa-calendar-days article-icon-calender">
                    &nbsp;&nbsp;
                  </i>{" "}
                  <span className="my-title">تاریخ انتشار:</span> سال ششم،
                  شماره‌ی 1628، سه‌شنبه 10 بهمن 1402 خورشیدی
                </Card.Text>
                <Card.Footer>
                  <Card.Text>
                    <span className="my-title">منبع:</span> روزنامه‌ی سازندگی
                  </Card.Text>
                  <Card.Text>
                    <span className="my-title">صفحه:</span> 4
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row
          dir="rtl"
          className="mt-2 gy-4 text-center d-flex justify-content-center"
        >
          {/* Articles with images */}
          {articles.map((article, index) => (
            <Col lg={3} key={index}>
              <div className="article-card h-auto py-2">
                <Card.Header>
                  <Card.Title
                    className="card-title p-2"
                    style={{
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span className="article-title">عنوان: </span>
                    {article.title}
                  </Card.Title>
                </Card.Header>
                <Card.Body className="p-3">
                  {" "}
                  {/* Ensure padding is added */}
                  <img
                    src={article.coverImage}
                    alt="Description of the"
                    className="card-image"
                    style={{
                      width: "100%",
                      height: "14rem",
                      marginBottom: "1rem",
                    }}
                  />
                  <Card.Text>
                    {article.publicationYear && (
                      <>
                        <i className="fa-solid fa-calendar-days article-icon-calender">
                          &nbsp;&nbsp;
                        </i>{" "}
                        <span className="my-title">تاریخ انتشار:</span>{" "}
                        {article.publicationYear} هجری خورشیدی
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="p-2">
                  {" "}
                  {/* Ensure padding is added */}
                  <Card.Text>
                    <span className="my-title">منبع:</span> {article.source}
                  </Card.Text>
                  {article.pages && (
                    <Card.Text>
                      <span className="my-title">صفحه:</span> {article.pages}
                    </Card.Text>
                  )}
                </Card.Footer>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default AllArticles;
