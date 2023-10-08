import React, { useState } from 'react';
import {
  Form, Button, Alert, FloatingLabel, Container,
} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function CreateUser() {
  const [email, setEmail] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword} = useAuth(); // change

  async function handleSubmit(e) {
    // e.preventDefault();
    // resetPassword --> why don't we need to send password?
    try {
      setError("");
      setLoading(true);
      await resetPassword(email);  
      console.log("successful");
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setLoading(false);
  }

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
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '700px' }}>
         
          <div className="d-flex align-items-center justify-content-center w-100">
            {/* <img className="mb-4 w-100" src={logo} alt="" /> */}
          </div>
          {error && <Alert variant="danger">{error}</Alert>}

          <div className="d-flex align-items-center justify-content-center w-100">
            <h1>Reset Your Password</h1>
          </div>

          <div className="d-flex align-items-center justify-content-center w-100">
            <h5>We'll Send You an Email</h5>
          </div>

          <Form.Group id="username" className=" mb-4"> {/* email or username? */}
            <FloatingLabel controlId="floatingInput" label="Email">
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: '#000000' }}
                placeholder="Email"
              />
            </FloatingLabel>
          </Form.Group>

          <Button
            disabled={loading}
            variant="primary"
            className="w-100"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>

          <div className="w-100 text-center mt-3">
            <Link to="/" style={{ color: '#007aad' }}>
              Back to Login Page
            </Link>
          </div>

        </div>
      </Container>
    </>
  );
}
