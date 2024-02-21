import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import './AllArticles.css';
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const AllArticles = () => {
  return (
    <div>
      <Header />
      <Container style={{marginTop: "10vh"}}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="my-header fs-1 fw-bold">مقالات</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        {/* All The Articles */}
        <Row dir="rtl" className="mt-2 gy-4 text-center">
          {/* Card 1 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                  معرفی، نقد و بررسی تذکره ی زرنگار
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: روایت دیروز، آئینه امروز، نوید فردا
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: 23 حمل 1399 خورشیدی</Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text>منبع: روزنامه 8 صبح</Card.Text>
                  <Card.Text>صفحه: 5</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col lg={3}>
            <Card className="article-card">
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
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                طاهریان فوشنج و نقش آنان در ضرب سکه
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال هشتم، شماره‌ی دهم، بهار 1400 خورشیدی </Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا </Card.Text>
                  <Card.Text>صفحه: 10 - 23</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                خواجه محمد اسماعیل دارا و سرنوشت دیوانش
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: 23 حمل 1399 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا</Card.Text>
                  <Card.Text>صفحه: 67 - 75</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
            
          </Col>

          {/* Card 5 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                ناخدای نستعلیق (شرح حال، احوال و آثار میرعلی هروی)
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: ادبی - هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال سوم، شماره‌ی یازدهم، پاییز 1401 خورشیدی </Card.Text>
                <Card.Footer className="card-footer">
                  <Card.Text>منبع: فصل‌نامه‌ی شمیره </Card.Text>
                  <Card.Text>صفحه: 111 – 157</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                روج و مشاهیر آن
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>موضوع: فرهنگی، تاریخی، هنری</Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال نهم، شماره‌ی دوازدهم، بهار 1402 خورشیدی </Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا</Card.Text>
                  <Card.Text>صفحه: 8 – 27</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 7 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                نگرشی بر جایگاه جغرافیای فوشنج
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال دهم، شماره‌ی سیزدهم، بهار 1402 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی دیار دارا </Card.Text>
                  <Card.Text>صفحه:  9 – 21</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 8 */}
          <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                نی‌نامه جامی و فهرست توصیفی نسخه‌های آن
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: ادبی - هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال چهارم، شماره‌ی سیزدهم، بهار 1402 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: فصل‌نامه‌ی شمیره </Card.Text>
                  <Card.Text>صفحه: 39 – 66</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
            
          </Col>

            {/* Card 9 */}
            <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                منار جام شاهکاری بی‌نظیر در هنر معماری
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال نخست، شماره‌ی نخست، بهار 1402 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: سال‌نامه‌ی فرگرد</Card.Text>
                  <Card.Text>صفحه: 13 – 57</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
            
          </Col>

            {/* Card 10 */}
            <Col lg={3}>
            <Card className="article-card">
              <Card.Header>
                <Card.Title className="card-title">
                ادیب بزرگ هرات (نگاهی کوتاه به کارنامه‌ی محمد ناصر ره‌یاب)
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  موضوع: فرهنگی، تاریخی، هنری
                </Card.Text>
                <Card.Text><i className="fa-solid fa-calendar-days article-icon-calender"></i> تاریخ انتشار: سال ششم، شماره‌ی 1628، سه‌شنبه 10 بهمن 1402 خورشیدی</Card.Text>
                <Card.Footer>
                  <Card.Text>منبع: روزنامه‌ی سازندگی</Card.Text>
                  <Card.Text>صفحه: 4</Card.Text>
                </Card.Footer>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </Container>
    <Footer />
    <BackToTopButton />
    </div>
  );
};

export default AllArticles;
