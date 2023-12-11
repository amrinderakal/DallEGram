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
import Logo from "../assets/dallegramlogo6.png";

function NavigationBar() {
  const { logout } = useAuth();

  const navbarStyle = {
    backgroundColor: "#000", // Your desired hex color
  };

  const navLinkStyle = {
    color: "#fff", // White color
    fontWeight: "", // Bold text
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={navbarStyle} variant="dark">
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
            <Nav.Link href="/homepage" style={navLinkStyle}>Public Feed</Nav.Link>
            <Nav.Link href="/image-generator-page" style={navLinkStyle}>Image Generator</Nav.Link>
            <Nav.Link href="/profile" style={navLinkStyle}>Profile</Nav.Link>
            <Nav.Link href="/about-us" style={navLinkStyle}>About Us</Nav.Link>
            {/* Need to call firebase logout function */}
            <Nav.Link href="/" onClick={() => logout()} style={navLinkStyle}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;