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
    backgroundColor: "#383838", // Your desired hex color
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link href="/homepage">
            <img
              src={Logo}
              alt="DallEGram Logo"
              width="125"
              height="30"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0" // spacing ms-auto: right, me-auto: left
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
