import React, { useState } from "react";
import { Form, Button, Alert, FloatingLabel, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDatabase } from "../../context/DatabaseContext";
import Logo from "../../assets/dallegramLogo.png";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, uid } = useAuth();
  const navigate = useNavigate();
  const { updateUID } = useDatabase();
  async function handleSubmit(e) {
    // e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      updateUID(email, uid);
      console.log("sucessful");
      //NEED TO RETREIVE INFRO FROM BACKEND HERE
      navigate("/homepage");
    } catch (err) {
      console.log(err);
      setError("Incorrect Username or password");
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
      <div style={{ background: "#383838" }}>
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ width: "100%", height: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <div className="d-flex align-items-center justify-content-center w-100">
              {/* <img className="mb-4 w-100" src={logo} alt="" /> */}
            </div>
            {error ? (
              <Alert
                variant="danger"
                className="d-flex align-items-center justify-content-center w-100"
              >
                {error}
              </Alert>
            ) : (
              console.log("no errors")
            )}

            <div className="d-flex align-items-center justify-content-center w-100">
              <img src={Logo}></img>
            </div>

            <div className="d-flex align-items-center justify-content-center w-100">
              <i>
                <h5 style={{ color: "white" }}>
                  Bring Your Words To Life With AI
                </h5>
              </i>
            </div>

            <Form.Group id="username" className=" mb-4">
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    borderColor: "#000000",
                    borderRadius: "50px",
                  }}
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
                  style={{ borderColor: "#000000", borderRadius: "50px" }}
                  placeholder="Password"
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              disabled={loading}
              variant="primary"
              className="w-100"
              type="submit"
              style={{ borderRadius: "50px" }}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>

            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password" style={{ color: "#007aad" }}>
                Forgot Password?
              </Link>
            </div>
            <div className="w-100 text-center mt-3">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <div className="me-1" style={{ color: "white" }}>
                  New User?
                </div>
                <Link to="/create-user" style={{ color: "#007aad" }}>
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
