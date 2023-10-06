
import React, { useState } from 'react';
import {
  Form, Button, Alert, FloatingLabel, Container,
} from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  async function handleSubmit(e) {
    // e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
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
            <h1>Welcome to DallEGram</h1>
          </div>

          <div className="d-flex align-items-center justify-content-center w-100">
            <i><h4>Bring Your Words to Life</h4></i>
          </div>

          <Form.Group id="username" className=" mb-4">
          
            <FloatingLabel controlId="floatingInput" label="Email">
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: '#F3CEB1' }}
                placeholder="Email"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group id="password" className="mb-4">
           
            <FloatingLabel controlId="floatingInput" label="Password">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: '#F3CEB1' }}
                placeholder="Password"
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
            Login
          </Button>

          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" style={{ color: '#007aad' }}>
              Forgot Password?
            </Link>
          </div>
          <div className="w-100 text-center mt-3">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <div className="me-1">New User?</div>
              <Link to="/create-user" style={{ color: '#007aad' }}>
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
