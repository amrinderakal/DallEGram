import React from 'react'
import {
  Form, Button, FloatingLabel, Container, Nav, Navbar, NavDropdown
} from 'react-bootstrap';

function NavigationBar() {
  return (
    <>
    {/* Navigation Bar */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>DallEGram</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="ms-auto my-2 my-lg-0" // spacing ms-auto: right, me-auto: left
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="#action2">Public Feed</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            {/* Need to call firebase logout function */}
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavigationBar