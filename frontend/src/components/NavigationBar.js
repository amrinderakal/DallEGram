import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/dallegramLogo.png";

function NavigationBar() {
  const { logout } = useAuth();

  const navbarStyle = {
    backgroundColor: "#fff", // Your desired hex color
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={navbarStyle} variant="light">
      <Container fluid>
        <Navbar.Brand href="/homepage">
          <img
            src={Logo}
            alt="DallEGram Logo"
            width="125"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/homepage">Public Feed</Nav.Link>
            <Nav.Link href="/image-generator-page">Image Generator</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            {/* Need to call firebase logout function */}
            <Nav.Link href="/" onClick={() => logout()}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
