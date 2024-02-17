import React from 'react';
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
// import "@fortawesome/fontawesome-free/css/all.min.css";


const MainPageContact = () => {
  return (
    <div className='contact-div'>
      <Container style={{ marginTop: "10vh" }} className="myContainer">
        {/* Title Row */}
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="myHeader fs-1 fw-bold">ارتباط با من</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        {/* Contact Details Column */}
        <Row
          className="mt-5 d-flex justify-content-center align-items-center mb-4"
          dir="rtl"
        >
          <Col lg={6}>
            <Row dir="rtl" className="gy-4 mb-4 d-flex justify-content-center">
              {/* Location */}
              <Col md={5} className="link-Col ms-4" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-solid fa-location-dot icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>آدرس</Col>
                </Row>
                <Row>
                  <Col lg={12}>هرات، غوریان</Col>
                </Row>
              </Col>

              {/* Contact */}
              <Col md={5} className="link-Col" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-solid fa-phone icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>شماره تماس</Col>
                </Row>
                <Row>
                  <Col lg={12}>0798478850</Col>
                </Row>
              </Col>
            </Row>

            <Row dir="rtl" className="gy-4 mb-4 d-flex justify-content-center">
              {/* Email */}
              <Col md={5} className="link-Col ms-4" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-solid fa-envelope icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>ایمیل</Col>
                </Row>
                <Row>
                  <Col lg={12}>hamidfarhat786@gmail.com</Col>
                </Row>
              </Col>

              {/* Telegram Channel */}
              <Col md={5} className="link-Col" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-brands fa-square-whatsapp icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>واتساپ</Col>
                </Row>
                <Row>
                  <Col lg={12}>0798478850</Col>
                </Row>
              </Col>
            </Row>

            <Row dir="rtl" className="gy-4 mb-4 d-flex justify-content-center">
              {/* Telegram Channel */}
              <Col md={5} className="link-Col ms-4" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-brands fa-telegram icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>کانال تلگرام</Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <a
                      href="https://t.me/Hamidkamgar"
                      style={{ textDecoration: "none" }}
                    >
                      نگارستان کامگار
                    </a>
                  </Col>
                </Row>
              </Col>

              {/* Facebook Page */}
              <Col md={5} className="link-Col" data-aos="zoom-in">
                <Row>
                  <Col lg={12}>
                    <i className="fa-brands fa-facebook icon"></i>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>صفحه فیسبوک</Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <a
                      href="https://www.facebook.com/profile.php?id=100021681229637&mibextid=ZbWKwL"
                      style={{ textDecoration: "none" }}
                    >
                      کتابخانه کامگار
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          {/* Form Column */}
          <Col lg={6} data-aos="zoom-out">
            <Card className="p-3" border="primary" bg="light">
              <Form dir="rtl" className="myForm" border="primary">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>اسم</Form.Label>
                  <Form.Control type="text" placeholder="اسم" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>ایمیل</Form.Label>
                  <Form.Control type="email" placeholder="ایمیل" />
                  <Form.Text className="text-muted">
                    ما هرگز ایمیل شما را با دیگران به اشتراک نخواهیم گذاشت.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContext">
                  <Form.Label>موضوع</Form.Label>
                  <Form.Control type="text" placeholder="موضوع" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTextarea">
                  <Form.Label>پیام شما</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  ارسال
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainPageContact;