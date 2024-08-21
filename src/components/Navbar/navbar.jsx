import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/brcc_logo.png";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import './navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
           
            <NavDropdown title="SHOP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#mainpage">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#content">CAREERS</NavDropdown.Item>
              <NavDropdown.Item href="#content">BULK ORDERS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#footer">PRIVACY POLICY</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#footer">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
