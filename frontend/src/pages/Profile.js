
import React, { useState } from 'react';
import {
  Form, Button, Alert, FloatingLabel, Container, Nav, Navbar, NavDropdown
} from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";
import NavigationBar from '../components/NavigationBar';

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
  <NavigationBar/>

    {/* User Profile  */}

    {/* Greeting User (text) */}
    <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: '20vh' }}
      >
        {/* change "USER" to specific name */}
        <div className="w-100" style={{ maxWidth: '700px' }}>
          <div className="d-flex align-items-center justify-content-center w-100">
            <h2>Welcome!</h2>
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




