import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; 
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Footerimg from '../../assets/Footer.jpg';
const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <Container>
        <Row>
          <Col md={3}>
            <h5>Get Connected</h5>
            <ul className="list-icons">
             <li><SlSocialInstagram className='icons'/></li>
             <li><FaTwitter className='icons'/></li>
             <li><FaFacebookSquare className='icons'/></li>
             <li><BsYoutube className='icons'/></li>
             <li><FaLinkedin className='icons'/></li>
            </ul>
            <img src={Footerimg} alt="" />
          </Col>
          <Col md={3}>
            <h5>Company Info</h5>
            <ul className="list-unstyled">
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#customer">Customer Data Management</a></li>       
            </ul>
          </Col>
          <Col md={3}>
            <h5>Other Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#magazine">Coffee or Die Magazine</a></li>
              <li><a href="#ads">About Ads</a></li>  
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#sale">Sale</a></li>
              <li><a href="#faqs">FAQs</a></li>           
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>91 + 7339566898</p>
            <p>M-F 9:00AM-5:00PM CST</p>
          </Col>
        </Row>
      </Container>
      <div className='footer-bottom'>
      <p>&copy; 2024 Divakardharma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
