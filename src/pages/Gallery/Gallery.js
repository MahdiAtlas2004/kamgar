import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';
import gallery from '../../gallery';
import GalleryCard from '../../components/GalleryCard/GalleryCard';

import './Gallery.css';

const Gallery = () => {
  return (
    <div>
      <Header />

      <Container style={{marginTop: "10vh"}}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="fs-1 fw-bold myHeader">گالری</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>

        <Row dir='rtl' className='mt-3'>
        {gallery.map((item) => {
          return (
            <Col sm={12} md={6} lg={3} key={item._id}>
                <GalleryCard gallery={item}/>
            </Col>
          )
        })}
        </Row>
        </Container>
        <Footer />
        <SocialMediaIcons />
        <BackToTopButton />
    </div>
  )
}

export default Gallery;
