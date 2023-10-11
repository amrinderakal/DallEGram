// ALL CURRENT HTML NEEDS TO BE A ENTIRELY DIFF FUNCTIONAL COMONENT (NAV BAR and IMAGE GENERATION) FOR CLEANER CODE
import React, { useEffect, useState } from 'react';
import {
  Form, Button, FloatingLabel, Container, Nav, NavDropdown
} from 'react-bootstrap';
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link} from 'react-router-dom';

export default function AccountCreated() {

    return (
        <>
         <style type="text/css">
           {`
       .btn-primary {
         background-color: #007AAD;
         color: white;
        
       }    
       .btn-primary:hover{
         background-color: #005071;
         color: white;
       }
    `}
      </style>

    <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: '50vh' }}
      >
        <div className="w-100" style={{ maxWidth: '700px' }}>

          <div className="d-flex align-items-center justify-content-center w-100">
            <h2>Account Successfully Created!</h2>
          </div>

          <Link to="/login" className="btn btn-primary align-items-center justify-content-center w-100">
                Let's Login!
          </Link>

        </div>
      </Container>
    </>
  );
}




