import React, { useState } from "react";
import { Form, Button, Alert, FloatingLabel, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDatabase } from "../../context/DatabaseContext";
import Logo from "../../assets/dallegramlogo5.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, uid } = useAuth();
  const navigate = useNavigate();
  const { updateUID } = useDatabase();

  // Logs a user in when the submit button is clicked
  async function handleSubmit() {
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      updateUID(email, uid);
      console.log("successful");
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
          .btn-primary:hover {
            background-color: #005071;
            color: white;
          }
          h5 {
            font-size: 1.5rem;
          }
          img {
            width: 250px; 
          }
        `}
      </style>
      <div style={{ background: "#FAF9F6" }}>
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ width: "100%", height: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "700px" }}>
            <div className="d-flex align-items-center justify-content-center w-100">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="d-flex align-items-center justify-content-center w-100">
              <i>
                <h5 style={{ color: "black", fontWeight: "bold" }}>
                  Bring Your Words To Life With AI
                </h5>
              </i>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                margin: "auto",
              }}
            >
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}

              <Form.Group id="username" className="mb-4">
                <FloatingLabel controlId="floatingInput" label="Email">
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      borderColor: "#000000",
                      borderRadius: "",
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
                    style={{ borderColor: "#000000", borderRadius: "" }}
                    placeholder="Password"
                  />
                </FloatingLabel>
              </Form.Group>

              <Button
                disabled={loading}
                variant="primary"
                className="w-100"
                type="submit"
                style={{ borderRadius: "" }}
                onClick={() => handleSubmit()}
              >
                Login
              </Button>

              <div className="w-100 text-center mt-3">
                <Link
                  to="/forgot-password"
                  style={{ color: "#007aad", fontWeight: "bold" }}
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="w-100 text-center mt-3">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <div
                    className="me-1"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    New User?
                  </div>
                  <Link
                    to="/create-user"
                    style={{ color: "#007aad", fontWeight: "bold" }}
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
