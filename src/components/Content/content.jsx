import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Content1 from "../../assets/content1.jpg";
import Content2 from "../../assets/content2.jpg";
import Content3 from "../../assets/content3.jpg";
import Content4 from "../../assets/comtent5.jpg";
import "./content.css";

const contentData = [
  {
    img: Content1,
    alt: "Coffee Sampler",
    heading: "COFFEE SAMPLER",
    description: "Not sure where to start? Try our classic light, medium, and dark roasts in our Complete Mission Fuel Kit Sampler."
  },
  {
    img: Content2,
    alt: "Gear",
    heading: "GEAR",
    description: "Elevate your every cup with our latest top-of-the-line gear drop."
  },
  {
    img: Content3,
    alt: "Coffee Bundles",
    heading: "COFFEE BUNDLES",
    description: "Get more of American Coffee for less."
  },
  {
    img: Content4,
    alt: "Apparel",
    heading: "APPAREL",
    description: "Shop our newest collection of kickass apparel designs."
  }
];

const Content = () => {
  return (
    <Container fluid className="content-container" id='content'>
      <Row className="g-4">
        {contentData.map((item, index) => (
          <Col md={6} className="mb-4 content-item" key={index}>
            <div className="content-img-wrapper">
              <img src={item.img} alt={item.alt} className="img-fluid content-img" />
            </div>
            <div className="content-text">
              <h1>{item.heading}</h1>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Content;
