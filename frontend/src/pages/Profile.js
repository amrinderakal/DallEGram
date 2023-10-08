
import React, { useState } from 'react';
import {
  Form, Button, Alert, FloatingLabel, Container, Nav, Navbar, NavDropdown
} from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";

export default function Homepage() {
    // Set states here
    const [img_desc, setImageDesc] = useState()
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Function call --> submit button
    async function handleSubmit(e) {
    try { 
      setError("");
      setLoading(true);
      console.log("successful");
    //   add function call --> await(setImageDesc)
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }
  return (
    // CSS
     <>
      <style type="text/css">
        {`
    .btn-primary {
      background-color: #3366CC;
      color: white;
     
    }    
    .btn-primary:hover{
      background-color: #333399;
      color: white;
    }
    `}
      </style>

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
            <Nav.Link href="/homepage">Home</Nav.Link>
            <Nav.Link href="#action2">Public Feed</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* User Profile  */}

    {/* Greeting User (text) */}
    <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: '20vh' }}
      >
        {/* change "USER" to specific name */}
        <div className="w-100" style={{ maxWidth: '700px' }}>
          <div className="d-flex align-items-center justify-content-center w-100">
            <h2>Welcome User!</h2>
          </div>
        </div>

        <div className="w-100" style={{ maxWidth: '700px' }}>
          <div className="d-flex align-items-center justify-content-center w-100">
            <h4>Let's look at some of the images you've created.</h4>
          </div>
        </div>

        {/* Gallery of images */}

      </Container>
    </>
  );
}




