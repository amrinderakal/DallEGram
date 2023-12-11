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
          .btn-primary:hover {
            background-color: #005071;
            color: white;
          }
          .success-box {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .success-box h3 {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000; /* Set the desired color */
          }
        `}
      </style>

      <div style={{ background: '#FAF9F6', minHeight: '100vh' }}>
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: '50vh' }}
        >
          <div className="w-100" style={{ maxWidth: '700px' }}>
            <div className="success-box">
              <div className="d-flex align-items-center justify-content-center w-100">
                <h3>Account Successfully Created!</h3>
              </div>

              <Link to="/login" className="btn btn-primary w-100 mt-3">
                Let's Login!
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}



