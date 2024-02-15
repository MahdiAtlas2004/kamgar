import React from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card
} from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact-div">
      <Header />

      <Container style={{ marginTop: "10vh" }} className="myContainer">

        {/* Title Row */}
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="myHeader fs-1 fw-bold">ارتباط با من</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        {/* Contact Details Column */}
        <Row className="mt-5">
          <Col lg={6}>

          </Col>

        {/* Form Column */}
          <Col lg={6}>
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
  );
};

export default Contact;
